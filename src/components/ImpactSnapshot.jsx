import React from 'react'

const ImpactSnapshot = () => {
    return (
        <section className="section impact-section">
            <div className="impact-container">
                <header className="section-header impact-header">
                    <h2 className="section-title">
                        Founder. Systems Architect. <span className="highlight-red">Internationally Recognized.</span>
                    </h2>
                    <p className="section-subline">
                        Venture-backed AI founder and performance-focused engineer operating across Asia and Europe.
                    </p>
                </header>

                <div className="impact-content">
                    <div className="impact-left">
                        <p>
                            I build production-grade systems at the intersection of artificial intelligence,
                            geospatial engineering, and high-performance frontend architecture. My work spans
                            venture-backed startups, government-backed accelerators, and full-stack platforms
                            deployed in real-world environments.
                        </p>
                        <p className="impact-tagline">
                            Competed in Riyadh. Won in Seoul. Built in Dhaka.
                        </p>
                    </div>

                    <div className="impact-right metrics-grid-refined">
                        <div className="metric-card">
                            <h3 className="metric-value">$300K+</h3>
                            <p className="metric-label">Capital Raised</p>
                            <span className="metric-sub">$100K Seed &middot; $200K Gov Grants</span>
                        </div>
                        <div className="metric-card">
                            <h3 className="metric-value">2</h3>
                            <p className="metric-label">Funded Ventures</p>
                            <span className="metric-sub">Sigmind AI &middot; Lynkeus AI</span>
                        </div>
                        <div className="metric-card">
                            <h3 className="metric-value">K-Startup</h3>
                            <p className="metric-label">Grand Challenge</p>
                            <span className="metric-sub">Top 5% of 3,200+ applicants</span>
                        </div>
                    </div>
                </div>

                <div className="recognition-strip">
                    <span className="recognition-item">APICTA Award &mdash; Best AI Startup</span>
                    <span className="separator">&bull;</span>
                    <span className="recognition-item">BASIS ICT National Award</span>
                    <span className="separator">&bull;</span>
                    <span className="recognition-item">Entrepreneurship World Cup &mdash; Riyadh</span>
                    <span className="separator">&bull;</span>
                    <span className="recognition-item">Daily Star ICT Award</span>
                </div>
            </div>
        </section>
    )
}

export default ImpactSnapshot
