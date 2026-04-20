import React from "react";
import "./flagship.css";

const FlagshipSystems = () => {
    return (
        <section className="flagship-section" id="projects">
            <div className="section-container">
                <header className="section-header">
                    <h2 className="section-title">
                        Flagship <span className="highlight-red">Systems</span>
                    </h2>
                    <p className="section-subline">
                        Production-grade platforms engineered with deep technical control.
                    </p>
                </header>

                {/* TIER 1: Core Platforms */}
                <div className="flagship-grid">

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
                                    <span className="stack-tag">FastAPI</span>
                                    <span className="stack-tag">TensorRT</span>
                                    <span className="stack-tag">GPS Projection</span>
                                </div>
                                <button className="see-more-button"><span>See More</span></button>
                            </div>
                        </div>
                    </div>

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
                                    <span className="stack-tag">Next.js 14</span>
                                    <span className="stack-tag">TypeScript</span>
                                    <span className="stack-tag">HTML5 Canvas</span>
                                    <span className="stack-tag">GSAP</span>
                                    <span className="stack-tag">Lenis</span>
                                </div>
                                <button className="see-more-button"><span>See More</span></button>
                            </div>
                        </div>
                    </div>

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
                                <button className="see-more-button"><span>See More</span></button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* TIER 2: Research & Applied Systems */}
                <div className="research-header">
                    <h3 className="research-label">Research &amp; Applied Systems</h3>
                    <span className="research-line"></span>
                </div>

                <div className="research-grid">

                    <div className="research-card">
                        <div className="research-card-top">
                            <div className="research-media">
                                Media Placeholder
                            </div>
                        </div>
                        <div className="research-body">
                            <div className="research-body-header">
                                <h3>Ha-Meem AI Surveillance</h3>
                                <span className="research-badge">Production Deployed</span>
                            </div>
                            <p>
                                Production-grade real-time face recognition system for entry-zone CCTV
                                in a factory environment. Modular architecture across detection,
                                recognition, tracking, and quality assessment layers.
                                Deployed with TensorRT-optimized ONNX models in Docker containers.
                            </p>
                            <div className="hard-callout">
                                Why it was hard: real-time multi-person tracking in constrained entry zones
                            </div>
                            <div className="stack-tags">
                                <span className="stack-tag">Python</span>
                                <span className="stack-tag">ONNX</span>
                                <span className="stack-tag">TensorRT</span>
                                <span className="stack-tag">Docker</span>
                                <span className="stack-tag">Face Recognition</span>
                            </div>
                            <button className="see-more-button"><span>View on GitHub</span></button>
                        </div>
                    </div>

                    <div className="research-card">
                        <div className="research-card-top">
                            <div className="research-media">
                                Media Placeholder
                            </div>
                        </div>
                        <div className="research-body">
                            <div className="research-body-header">
                                <h3>Jersey Number Recognition</h3>
                                <span className="research-badge">74% Accuracy &mdash; 3-Fold CV</span>
                            </div>
                            <p>
                                Temporal computer vision model that recognizes jersey numbers (00&ndash;99)
                                from video sequences using BiLSTM + attention across frames. ConvNeXt-Tiny
                                backbone with independent digit classifiers for tens and ones places.
                                87.56% tens-digit accuracy on 3-fold cross-validation.
                            </p>
                            <div className="hard-callout">
                                Why it was hard: preventing identity leakage across temporal sequence splits
                            </div>
                            <div className="stack-tags">
                                <span className="stack-tag">PyTorch</span>
                                <span className="stack-tag">ConvNeXt</span>
                                <span className="stack-tag">BiLSTM</span>
                                <span className="stack-tag">Attention</span>
                                <span className="stack-tag">AMP Training</span>
                            </div>
                            <button className="see-more-button"><span>View on GitHub</span></button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FlagshipSystems;
