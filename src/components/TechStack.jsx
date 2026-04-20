import React, { useEffect, useRef } from 'react'

const categories = [
    {
        name: 'AI & Computer Vision',
        accent: 'var(--accent-color)',
        skills: ['YOLOv8', 'SAHI', 'TensorRT', 'ONNX', 'PyTorch', 'OpenCV', 'BiLSTM', 'ConvNeXt-Tiny', 'Temporal CV']
    },
    {
        name: 'GPU & Performance',
        accent: '#ce93d8',
        skills: ['CUDA', 'NVIDIA NVDEC', 'C++', 'FFmpeg', 'RTSP Streaming', 'CMake', 'Multi-threaded Frame Processing', 'Hardware Decoding']
    },
    {
        name: 'Frontend Engineering',
        accent: '#4fc3f7',
        skills: ['React', 'Next.js 14', 'TypeScript', 'GSAP', 'HTML5 Canvas', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Lenis']
    },
    {
        name: 'Backend & Infrastructure',
        accent: '#ffd54f',
        skills: ['Python', 'FastAPI', 'Node.js', 'Docker', 'REST APIs', 'WebSockets']
    },
    {
        name: 'Geospatial & Mapping',
        accent: '#80cbc4',
        skills: ['Mapbox', 'Leaflet', 'GPS Projection', 'Homographic Transform', 'Drone Telemetry', 'Pixel-to-GPS Mapping']
    }
]

const TechStack = () => {
    const rowsRef = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('ts-visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1 }
        )

        rowsRef.current.forEach((el) => {
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <section className="section tech-section" id="tech">
            <div className="section-container">
                <header className="section-header">
                    <h2 className="section-title">
                        Tech <span className="highlight-red">Stack</span>
                    </h2>
                    <p className="section-subline">
                        From CUDA kernels to React animations &mdash; full-spectrum technical depth.
                    </p>
                </header>

                <div className="ts-grid">
                    {categories.map((cat, i) => (
                        <div
                            key={i}
                            className="ts-row"
                            ref={(el) => (rowsRef.current[i] = el)}
                            style={{ '--ts-delay': `${i * 80}ms` }}
                        >
                            <div className="ts-category">
                                <span className="ts-cat-dot" style={{ background: cat.accent }}></span>
                                <span className="ts-cat-name">{cat.name}</span>
                            </div>
                            <div className="ts-skills">
                                {cat.skills.map((skill, j) => (
                                    <span
                                        key={j}
                                        className="ts-skill"
                                        style={{ '--skill-accent': cat.accent }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechStack
