import React, { useState } from 'react'

const faqs = [
    {
        q: "What types of AI and engineering projects do you specialize in?",
        a: "I specialize in computer vision systems (object detection, tracking, face recognition), GPU-optimized AI pipelines using CUDA and NVDEC, geospatial AI platforms that convert drone imagery to real-world coordinates, and high-performance frontend engineering with React, Next.js, and GSAP. I've shipped production systems across agriculture, maritime, industrial surveillance, and aviation sectors."
    },
    {
        q: "Are you available for freelance consulting or full-time roles?",
        a: "Yes — I'm open to both. For consulting I take on AI product development, computer vision system design, GPU performance optimization, and senior frontend architecture. For full-time roles I'm interested in positions at the intersection of AI systems engineering and product leadership. I'm based in Bangladesh and available for remote work or relocation."
    },
    {
        q: "What AI and machine learning frameworks do you work with?",
        a: "My core AI stack includes YOLOv8, SAHI, TensorRT, ONNX, PyTorch, OpenCV, and BiLSTM architectures. For GPU acceleration I work with CUDA, NVIDIA NVDEC, and FFmpeg-based hardware decoding in C++. I've deployed models via Docker containers with TensorRT-optimized inference engines for production factory and maritime environments."
    },
    {
        q: "What is your background before founding AI startups?",
        a: "Before founding Sigmind AI in 2016, I studied Electrical Engineering and IT at Ravensburg-Weingarten University of Applied Sciences in Germany, then worked as an automotive systems engineer at Continental Automotive and as an aerospace engineer at Airbus. That engineering discipline — designing for failure conditions, not just happy paths — is the foundation of how I approach every system I build."
    },
    {
        q: "What happened to Sigmind AI — Bangladesh's first AI startup?",
        a: "Sigmind AI was founded in 2016 as Bangladesh's first computer vision SaaS. We raised $100K seed funding from SBK Tech Ventures and Robi Axiata, built face detection, person tracking, and license plate recognition systems, and achieved 3.2× ROAS for clients. The technology was eventually acquired by the Government of Bangladesh and integrated into national AI infrastructure."
    },
    {
        q: "What geographies have you worked across?",
        a: "I studied and worked in Germany (Continental Automotive, Airbus), founded my first startup in Bangladesh, then relocated to Seoul in 2021 to found Lynkeus AI — securing $200K+ in Korean government grants via K-Startup Grand Challenge. I've competed at the Entrepreneurship World Cup in Riyadh, won the APICTA Award in Vietnam, and built systems deployed across Asia and Europe."
    },
    {
        q: "What is Zipto?",
        a: "Zipto is an AI-powered digital marketing automation SaaS I'm currently building. It automates campaign creation, audience targeting, performance optimization, and reporting — giving brands the output of a full marketing team at a fraction of the cost. I'm open to early adopters and strategic partners."
    }
]

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
    }

    return (
        <section className="section faq-section" id="faq">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="section-container">
                <header className="section-header">
                    <h2 className="section-title">
                        Frequently Asked <span className="highlight-red">Questions</span>
                    </h2>
                    <p className="section-subline">
                        Common questions about my work, background, and availability.
                    </p>
                </header>

                <div className="faq-list">
                    {faqs.map((item, i) => (
                        <div
                            key={i}
                            className={`faq-item ${openIndex === i ? 'faq-open' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggle(i)}
                                aria-expanded={openIndex === i}
                                aria-controls={`faq-answer-${i}`}
                            >
                                <span>{item.q}</span>
                                <span className="faq-icon" aria-hidden="true">
                                    {openIndex === i ? '−' : '+'}
                                </span>
                            </button>
                            <div
                                id={`faq-answer-${i}`}
                                className="faq-answer"
                                role="region"
                                hidden={openIndex !== i}
                            >
                                <p>{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQSection
