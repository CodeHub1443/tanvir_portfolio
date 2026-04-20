import React, { useState } from 'react'

const testimonials = [
    {
        text: "Tanvir engineered a geospatial analytics system that transformed our crop monitoring. The precision of his pixel-to-GPS projection was unlike anything we'd seen from a single engineer.",
        author: "Dr. Rafiqul Islam",
        role: "Director of Agricultural Technology, AgroTech Bangladesh"
    },
    {
        text: "His GPU optimization work cut our inference latency by 40%. Tanvir doesn't just write code — he understands the hardware constraints and designs around them from day one.",
        author: "Jiwon Park",
        role: "CTO, Lynkeus AI — Seoul, South Korea"
    },
    {
        text: "The NVDEC streaming engine Tanvir built handles 8 simultaneous camera feeds at near-zero CPU cost. We've been running it unmodified in production for over a year.",
        author: "Md. Shahriar Kabir",
        role: "Product Lead, Sigmind AI"
    }
]

const intents = [
    { id: 'hire',    label: 'I want to hire you' },
    { id: 'project', label: 'I have a technical project' },
    { id: 'invest',  label: 'I want to invest / partner' },
]

const INITIAL_FORM = { name: '', email: '', message: '' }

const ContactTestimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [selectedIntent, setSelectedIntent] = useState(null)
    const [form, setForm] = useState(INITIAL_FORM)
    const [status, setStatus] = useState('idle') // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState('')

    const nextTestimonial = () => setCurrentTestimonial(p => (p + 1) % testimonials.length)
    const prevTestimonial = () => setCurrentTestimonial(p => (p - 1 + testimonials.length) % testimonials.length)

    const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

    const handleSubmit = async e => {
        e.preventDefault()
        const { name, email, message } = form
        const intent = selectedIntent

        if (!name.trim() || !email.trim() || !message.trim()) return

        setStatus('loading')
        setErrorMsg('')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    intent,
                }),
            })

            const data = await res.json()

            if (!res.ok) {
                setErrorMsg(data.error || 'Something went wrong.')
                setStatus('error')
            } else {
                setStatus('success')
                setForm(INITIAL_FORM)
                setSelectedIntent(null)
            }
        } catch {
            setErrorMsg('Network error. Please try again.')
            setStatus('error')
        }
    }

    return (
        <section className="section contact-section" id="contact">
            <div className="section-container">

                {/* TESTIMONIALS */}
                <div className="testimonials-container">
                    <h2 className="section-title">What Collaborators <span className="highlight-red">Say</span></h2>

                    <div className="testimonial-carousel">
                        <div className="testimonial-card">
                            <p className="testimonial-text">&ldquo;{testimonials[currentTestimonial].text}&rdquo;</p>
                            <div className="testimonial-author">
                                <h4>{testimonials[currentTestimonial].author}</h4>
                                <span>{testimonials[currentTestimonial].role}</span>
                            </div>
                        </div>
                        <div className="carousel-controls">
                            <button onClick={prevTestimonial} className="control-btn" aria-label="Previous">&larr;</button>
                            <span className="carousel-count">{currentTestimonial + 1} / {testimonials.length}</span>
                            <button onClick={nextTestimonial} className="control-btn" aria-label="Next">&rarr;</button>
                        </div>
                    </div>
                </div>

                <div className="divider-line"></div>

                {/* CONTACT */}
                <div className="contact-container">
                    <header className="section-header">
                        <h2 className="section-title">Let&apos;s Build Something <span className="highlight-red">Meaningful</span></h2>
                        <p className="section-subline">
                            Open to AI product consulting, senior engineering roles, and co-founding
                            opportunities in AI&nbsp;/&nbsp;computer vision.
                        </p>
                    </header>

                    {/* INTENT SELECTOR */}
                    <div className="intent-selector">
                        {intents.map(({ id, label }) => (
                            <button
                                key={id}
                                type="button"
                                className={`intent-btn ${selectedIntent === id ? 'intent-btn-active' : ''}`}
                                onClick={() => setSelectedIntent(id === selectedIntent ? null : id)}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* FORM */}
                    {status === 'success' ? (
                        <div className="form-success">
                            <div className="form-success-icon">&#10003;</div>
                            <h3>Message sent.</h3>
                            <p>Thanks for reaching out &mdash; I&apos;ll get back to you within 48 hours.</p>
                            <button
                                className="secondary-button"
                                style={{ marginTop: '24px' }}
                                onClick={() => setStatus('idle')}
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit} noValidate>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="cf-name">Name</label>
                                    <input
                                        id="cf-name"
                                        name="name"
                                        type="text"
                                        placeholder="Your Name"
                                        value={form.name}
                                        onChange={handleChange}
                                        disabled={status === 'loading'}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cf-email">Email</label>
                                    <input
                                        id="cf-email"
                                        name="email"
                                        type="email"
                                        placeholder="email@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        disabled={status === 'loading'}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="cf-message">Message</label>
                                <textarea
                                    id="cf-message"
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    value={form.message}
                                    onChange={handleChange}
                                    disabled={status === 'loading'}
                                    required
                                ></textarea>
                            </div>

                            {status === 'error' && (
                                <p className="form-error">{errorMsg}</p>
                            )}

                            <div className="form-actions">
                                <button
                                    type="submit"
                                    className="primary-button"
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading'
                                        ? <span className="btn-loading">Sending<span className="btn-dots"></span></span>
                                        : <span>Send Message</span>
                                    }
                                </button>
                            </div>
                        </form>
                    )}

                    <p className="contact-footer-note">
                        Response within 48 hours &nbsp;&middot;&nbsp; +88 018-3434-1444 &nbsp;&middot;&nbsp; Available for remote &amp; relocation
                    </p>
                </div>

            </div>
        </section>
    )
}

export default ContactTestimonials
