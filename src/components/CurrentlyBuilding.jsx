import React from 'react'

const CurrentlyBuilding = () => {
    return (
        <section className="section currently-section">
            <div className="section-container">
                <div className="currently-inner">
                    <div className="currently-label">Currently Building</div>
                    <div className="currently-body">
                        <h2 className="currently-title">
                            Zipto &mdash; <span className="highlight-red">AI Marketing Automation</span>
                        </h2>
                        <p className="currently-desc">
                            A SaaS platform that automates digital marketing through AI &mdash; from
                            campaign creation and audience targeting to performance optimization and
                            reporting. Built to give brands the output of a full marketing team
                            at a fraction of the cost.
                        </p>
                        <div className="currently-meta">
                            <span className="currently-tag">SaaS</span>
                            <span className="currently-tag">AI Automation</span>
                            <span className="currently-tag">Digital Marketing</span>
                            <span className="currently-tag">Full-Stack</span>
                        </div>
                        <div className="currently-status">
                            <span className="status-dot"></span>
                            <span>In active development &mdash; open to early adopters &amp; strategic partners</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CurrentlyBuilding
