import React from 'react'

const CurrentlyBuilding = () => {
    return (
        <section className="section currently-section">
            <div className="section-container">
                <div className="currently-inner">
                    <div className="currently-label">Currently Building</div>
                    <div className="currently-body">
                        <h2 className="currently-title">
                            Next-Gen Maritime <span className="highlight-red">Vision System</span>
                        </h2>
                        <p className="currently-desc">
                            Extending Lynkeus AI's GPU inference stack into a real-time multi-vessel
                            tracking platform — sub-100ms latency, NVDEC hardware decode, live chart
                            overlay on AIS data streams.
                        </p>
                        <div className="currently-meta">
                            <span className="currently-tag">Computer Vision</span>
                            <span className="currently-tag">C++ / CUDA</span>
                            <span className="currently-tag">NVIDIA NVDEC</span>
                            <span className="currently-tag">AIS Integration</span>
                        </div>
                        <div className="currently-status">
                            <span className="status-dot"></span>
                            <span>In active development &mdash; open to strategic partners</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CurrentlyBuilding
