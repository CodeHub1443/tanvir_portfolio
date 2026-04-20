import React, { useState } from 'react'

const ContactTestimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [selectedIntent, setSelectedIntent] = useState(null)

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
        { id: 'hire', label: 'I want to hire you' },
        { id: 'project', label: 'I have a technical project' },
        { id: 'invest', label: 'I want to invest / partner' },
    ]

    const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)

    return (
        <section className="section contact-section" id="contact">
            <div className="section-container">
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
                            <button onClick={prevTestimonial} className="control-btn">&larr;</button>
                            <span className="carousel-count">{currentTestimonial + 1} / {testimonials.length}</span>
                            <button onClick={nextTestimonial} className="control-btn">&rarr;</button>
                        </div>
                    </div>
                </div>

                <div className="divider-line"></div>

                <div className="contact-container">
                    <header className="section-header">
                        <h2 className="section-title">Let&apos;s Build Something <span className="highlight-red">Meaningful</span></h2>
                        <p className="section-subline">
                            Open to AI product consulting, senior engineering roles, and co-founding
                            opportunities in AI&nbsp;/&nbsp;computer vision.
                        </p>
                    </header>

                    <div className="intent-selector">
                        {intents.map(({ id, label }) => (
                            <button
                                key={id}
                                className={`intent-btn ${selectedIntent === id ? 'intent-btn-active' : ''}`}
                                onClick={() => setSelectedIntent(id === selectedIntent ? null : id)}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    <form className="contact-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="email@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="Tell me about your project..."></textarea>
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="primary-button">
                                <span>Send Message</span>
                            </button>
                        </div>
                    </form>

                    <p className="contact-footer-note">
                        Response within 48 hours &middot; Available for remote &amp; relocation
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ContactTestimonials
