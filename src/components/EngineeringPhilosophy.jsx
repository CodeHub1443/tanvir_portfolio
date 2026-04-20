import React from 'react'

const EngineeringPhilosophy = () => {
    return (
        <section className="section philosophy-section">
            <div className="section-container">
                <header className="section-header">
                    <h2 className="section-title">Engineering <span className="highlight-red">Philosophy</span></h2>
                    <p className="section-subline">
                        Three principles that govern every system I ship.
                    </p>
                </header>

                <div className="philosophy-principles">
                    <div className="principle-card">
                        <div className="principle-number">01</div>
                        <div className="principle-body">
                            <h3>Build for the hard constraint, not the happy path.</h3>
                            <p>
                                Every system I&apos;ve shipped was designed around its worst-case load
                                &mdash; maritime streams, 4K aerial video, multi-camera pipelines.
                                The edge case is the spec.
                            </p>
                            <div className="principle-proof">
                                Proven on: Agro drone analytics &middot; NVDEC multi-stream engine
                            </div>
                        </div>
                    </div>

                    <div className="principle-card">
                        <div className="principle-number">02</div>
                        <div className="principle-body">
                            <h3>Performance is a feature, not an optimization.</h3>
                            <p>
                                I don&apos;t profile after. I architect before. Reducing CPU from
                                22.8% to 1.65% isn&apos;t a fix &mdash; it&apos;s a deliberate design
                                decision made at the architecture stage, not in post-production.
                            </p>
                            <div className="principle-proof">
                                Proven on: Advanced C++ Decoder &middot; Lynkeus AI inference stack
                            </div>
                        </div>
                    </div>

                    <div className="principle-card">
                        <div className="principle-number">03</div>
                        <div className="principle-body">
                            <h3>Ship systems that outlive the sprint.</h3>
                            <p>
                                Venture-backed or side project &mdash; same code standards. The Agro
                                platform runs unmodified on client hardware 14 months after initial
                                deployment. Clarity and control over abstraction and cleverness.
                            </p>
                            <div className="principle-proof">
                                Proven on: TDI Canvas engine &middot; Sigmind AI production pipeline
                            </div>
                        </div>
                    </div>
                </div>

                <div className="philosophy-actions">
                    <button className="primary-button">
                        <span>Download Resume</span>
                    </button>
                    <button className="secondary-button">
                        <span>Book a Call</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default EngineeringPhilosophy
