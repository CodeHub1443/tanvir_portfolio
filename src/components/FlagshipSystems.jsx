import React from "react";
import "./flagship.css";

const FlagshipSystems = () => {
    return (
        <section className="flagship-section">
            <div className="section-container">
                <header className="section-header">
                    <h2 className="section-title">
                        Flagship <span className="highlight-red">Systems</span>
                    </h2>
                    <p className="section-subline">
                        Production-grade platforms engineered with deep technical control.
                    </p>
                </header>

                <div className="flagship-grid">

                    {/* CARD 1 */}
                    <div className="parent">
                        <div className="flagship-card card-agro">
                            <div className="flagship-media">
                                Media Placeholder &mdash; Replace Later
                            </div>
                            <div className="flagship-body">
                                <h3>Agro &mdash; AI Drone Analytics</h3>
                                <p>
                                    Processes 4K drone footage through YOLOv8 + SAHI tile-slicing,
                                    then maps detections to real GPS coordinates via custom homographic
                                    projection. Sub-meter crop anomaly localization on fields up to 200 hectares.
                                </p>
                                <div className="hard-callout">
                                    Why it was hard: pixel-to-GPS projection with no ground truth markers
                                </div>
                                <div className="stack-tags">
                                    <span className="stack-tag">YOLOv8</span>
                                    <span className="stack-tag">SAHI</span>
                                    <span className="stack-tag">Python</span>
                                    <span className="stack-tag">Geospatial</span>
                                </div>
                                <button className="see-more-button">
                                    <span>See More</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="parent">
                        <div className="flagship-card card-tdi">
                            <div className="flagship-media">
                                Media Placeholder &mdash; Replace Later
                            </div>
                            <div className="flagship-body">
                                <h3>TDI &mdash; The Data Island</h3>
                                <p>
                                    Zero-dependency corporate platform with a custom isometric engine
                                    written directly in HTML5 Canvas &mdash; no Three.js, no libraries.
                                    Proximity physics drive interactions; all motion is deterministically timed.
                                </p>
                                <div className="hard-callout">
                                    Why it was hard: isometric projection math from scratch, no engine
                                </div>
                                <div className="stack-tags">
                                    <span className="stack-tag">HTML5 Canvas</span>
                                    <span className="stack-tag">Vanilla JS</span>
                                    <span className="stack-tag">Physics Engine</span>
                                    <span className="stack-tag">CSS Architecture</span>
                                </div>
                                <button className="see-more-button">
                                    <span>See More</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="parent">
                        <div className="flagship-card card-kb">
                            <div className="flagship-media">
                                Media Placeholder &mdash; Replace Later
                            </div>
                            <div className="flagship-body">
                                <h3>KB Aviation &mdash; Immersive Showcase</h3>
                                <p>
                                    State-driven cinematic showcase where every transition is spatially
                                    aware. Built on circular queue logic with GSAP timeline orchestration
                                    &mdash; FLIP-inspired animations that feel native, not animated.
                                </p>
                                <div className="hard-callout">
                                    Why it was hard: FLIP transitions with GSAP state synchronization
                                </div>
                                <div className="stack-tags">
                                    <span className="stack-tag">GSAP</span>
                                    <span className="stack-tag">React</span>
                                    <span className="stack-tag">FLIP</span>
                                    <span className="stack-tag">Circular Queue</span>
                                </div>
                                <button className="see-more-button">
                                    <span>See More</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FlagshipSystems;
