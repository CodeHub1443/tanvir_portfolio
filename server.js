import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'

dotenv.config()

console.log('EMAIL_USER:', process.env.EMAIL_USER)
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Loaded' : 'Missing')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:4173'] }))
app.use(express.json())

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many messages sent. Please wait 15 minutes and try again.' },
  standardHeaders: true,
  legacyHeaders: false,
})

function createTransporter() {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: { rejectUnauthorized: false },
  })
}

function buildEmailHtml({ name, email, message, intentLabel }) {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;padding:32px;border-radius:8px;">
      <h2 style="color:#111;margin-bottom:4px;">New Portfolio Message</h2>
      <p style="color:#888;font-size:13px;margin-bottom:28px;">Received via tanvir.portfolio</p>
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:13px;color:#555;width:100px;">Intent</td>
          <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px;font-weight:600;color:#008a4e;">${intentLabel}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:13px;color:#555;">Name</td>
          <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px;color:#111;">${name}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:13px;color:#555;">Email</td>
          <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px;color:#111;">
            <a href="mailto:${email}" style="color:#008a4e;">${email}</a>
          </td>
        </tr>
      </table>
      <div style="margin-top:24px;">
        <p style="font-size:13px;color:#555;margin-bottom:10px;">Message</p>
        <div style="background:#fff;border:1px solid #e0e0e0;padding:18px;border-radius:6px;font-size:14px;line-height:1.7;color:#222;white-space:pre-wrap;">${message}</div>
      </div>
      <p style="margin-top:28px;font-size:12px;color:#aaa;">Hit Reply to respond directly to ${name}.</p>
    </div>
  `
}

app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, message, intent } = req.body

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, email and message are required.' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  const intentMap = { hire: 'Hiring Inquiry', project: 'Technical Project', invest: 'Investment / Partnership' }
  const intentLabel = intentMap[intent] ?? 'General Inquiry'

  try {
    const transporter = createTransporter()
    await transporter.verify()

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: 'tanvir.tabassum.bd@gmail.com',
      replyTo: email,
      subject: `[Portfolio] ${intentLabel} from ${name}`,
      html: buildEmailHtml({ name, email, message, intentLabel }),
    })

    res.json({ success: true })
  } catch (err) {
    console.error('Email error:', err.message)
    res.status(500).json({ error: 'Failed to send message. Please try again.' })
  }
})

app.get('/api/health', (_req, res) => res.json({ status: 'ok', user: !!process.env.EMAIL_USER }))

app.listen(PORT, () => console.log(`Contact server → http://localhost:${PORT}`))
