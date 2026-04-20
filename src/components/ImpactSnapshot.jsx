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
                            I build production-grade AI systems at the intersection of computer vision,
                            geospatial engineering, and high-performance architecture. My career spans
                            aerospace engineering at <strong>Airbus</strong> and <strong>Continental Automotive</strong> in Germany,
                            to founding Bangladesh&apos;s first AI startup &mdash; whose technology was acquired
                            by the Government of Bangladesh for national infrastructure.
                        </p>
                        <p className="impact-tagline">
                            Engineered in Germany. Won in Seoul. Built for the world.
                        </p>
                    </div>

                    <div className="impact-right metrics-grid-refined">
                        <div className="metric-card">
                            <h3 className="metric-value">$300K+</h3>
                            <p className="metric-label">Capital Raised</p>
                            <span className="metric-sub">$100K Seed &middot; $200K Gov Grants</span>
                        </div>
                        <div className="metric-card">
                            <h3 className="metric-value">3</h3>
                            <p className="metric-label">Ventures Founded</p>
                            <span className="metric-sub">Sigmind &middot; Lynkeus &middot; Zipto</span>
                        </div>
                        <div className="metric-card">
                            <h3 className="metric-value">2016</h3>
                            <p className="metric-label">First AI Startup</p>
                            <span className="metric-sub">10+ years building AI systems</span>
                        </div>
                    </div>
                </div>

                <div className="recognition-strip">
                    <span className="recognition-item">Airbus &middot; Continental Automotive</span>
                    <span className="separator">&bull;</span>
                    <span className="recognition-item">APICTA Award &mdash; Best AI Startup</span>
                    <span className="separator">&bull;</span>
                    <span className="recognition-item">K-Startup Grand Challenge &mdash; Seoul</span>
                    <span className="separator">&bull;</span>
                    <span className="recognition-item">Entrepreneurship World Cup &mdash; Riyadh</span>
                    <span className="separator">&bull;</span>
                    <span className="recognition-item">BASIS ICT National Award</span>
                </div>
            </div>
        </section>
    )
}

export default ImpactSnapshot
