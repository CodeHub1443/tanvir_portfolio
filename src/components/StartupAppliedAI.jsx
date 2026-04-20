import React from 'react'

const StartupAppliedAI = () => {
    return (
        <section className="section applied-section">
            <div className="section-container">
                <header className="section-header">
                    <h2 className="section-title">Applied AI &amp; Startup <span className="highlight-red">Execution</span></h2>
                    <p className="section-subline">
                        From venture-backed computer vision startups to GPU-optimized deployment systems.
                    </p>
                </header>

                <div className="applied-grid">
                    <div className="applied-card compact">
                        <div className="applied-card-header">
                            <h3>Sigmind AI</h3>
                            <span className="applied-badge">Bangladesh&apos;s First AI SaaS</span>
                        </div>
                        <p>
                            Founded Bangladesh&apos;s first computer vision SaaS. Raised $100K seed.
                            Achieved <strong>3.2&times; ROAS</strong> through end-to-end AI pipeline
                            optimization across client ad systems. Won APICTA Best AI Startup (Asia-Pacific).
                        </p>
                        <button className="secondary-button">
                            <span>Learn More</span>
                        </button>
                    </div>

                    <div className="applied-card compact">
                        <div className="applied-card-header">
                            <h3>Lynkeus AI</h3>
                            <span className="applied-badge">Seoul &middot; $200K Grants</span>
                        </div>
                        <p>
                            South Korea&ndash;based maritime AI venture. Secured $200K+ in government
                            grants via K-Startup Grand Challenge. Reduced inference latency <strong>40%</strong> by
                            optimizing GPU utilization on NVIDIA hardware for live vessel detection.
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
                            with deterministic frame delivery and minimal buffering overhead.
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
                            custom CUDA pipeline. Not a fix. A design decision.
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
