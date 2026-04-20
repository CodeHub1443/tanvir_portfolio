import React from 'react'

const StartupAppliedAI = () => {
    return (
        <section className="section applied-section">
            <div className="section-container">
                <header className="section-header">
                    <h2 className="section-title">Applied AI &amp; Startup <span className="highlight-red">Execution</span></h2>
                    <p className="section-subline">
                        From aerospace engineering at Airbus to founding AI ventures across three continents.
                    </p>
                </header>

                <div className="applied-grid">
                    <div className="applied-card compact">
                        <div className="applied-card-header">
                            <h3>Sigmind AI</h3>
                            <span className="applied-badge">Founded 2016 &middot; Gov&apos;t Acquired</span>
                        </div>
                        <p>
                            Founded Bangladesh&apos;s first AI startup in computer vision. Raised $100K seed
                            from SBK Tech Ventures &amp; Robi Axiata. Achieved <strong>3.2&times; ROAS</strong> through
                            end-to-end pipeline optimization. Technology acquired by the Government of
                            Bangladesh for national AI infrastructure. Won APICTA Best AI Startup (Asia-Pacific).
                        </p>
                        <button className="secondary-button">
                            <span>Learn More</span>
                        </button>
                    </div>

                    <div className="applied-card compact">
                        <div className="applied-card-header">
                            <h3>Lynkeus AI</h3>
                            <span className="applied-badge">Seoul &middot; Profitable 2025</span>
                        </div>
                        <p>
                            South Korea&ndash;based AI venture specializing in GPU-optimized maritime vision.
                            Secured $200K+ in government grants via K-Startup Grand Challenge (top 5% of
                            3,200+ applicants). Reduced inference latency <strong>40%</strong> on NVIDIA
                            hardware. Reached profitability by 2025 with customers across multiple industries.
                        </p>
                        <button className="secondary-button">
                            <span>Learn More</span>
                        </button>
                    </div>

                    <div className="applied-card compact">
                        <div className="applied-card-header">
                            <h3>NVDEC Streaming Engine</h3>
                            <span className="applied-badge">8+ Simultaneous Streams</span>
                        </div>
                        <p>
                            Multi-stream IP camera ingestion engine using NVIDIA&apos;s NVDEC for
                            hardware-accelerated H.264/H.265 decoding. Handles 8+ simultaneous streams
                            with deterministic frame delivery. Born from the performance demands of
                            real-world surveillance deployments.
                        </p>
                        <button className="secondary-button">
                            <span>Learn More</span>
                        </button>
                    </div>

                    <div className="applied-card compact applied-card-hero">
                        <div className="applied-card-header">
                            <h3>Advanced C++ Decoder</h3>
                            <span className="applied-badge applied-badge-accent">93% CPU Reduction</span>
                        </div>
                        <p>
                            Reduced CPU decode overhead from <strong>22.8% &rarr; 1.65%</strong> &mdash; a
                            93% reduction &mdash; by offloading frame decoding entirely to GPU via a
                            custom CUDA pipeline. Precision-engineered with the same discipline learned
                            at Continental Automotive and Airbus. Not a fix &mdash; a design decision.
                        </p>
                        <button className="secondary-button">
                            <span>Learn More</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartupAppliedAI
