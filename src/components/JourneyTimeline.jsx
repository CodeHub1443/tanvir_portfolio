import React, { useEffect, useRef } from 'react'

const milestones = [
    {
        year: '2013',
        title: 'Electrical Engineering & IT',
        org: 'Ravensburg-Weingarten University of Applied Sciences \u2014 Germany',
        desc: 'Pursued Electrical Engineering and IT in Germany, developing the systems-thinking foundation that underpins every high-performance platform I build today.',
        tags: ['Germany', 'Electrical Engineering', 'IT'],
        type: 'education'
    },
    {
        year: '2014',
        title: 'Automotive Systems Engineer',
        org: 'Continental Automotive \u2014 Germany',
        desc: 'Worked on next-generation automotive systems at one of Europe\'s largest engineering firms. Learned how precision engineering operates under real-world production constraints and scale.',
        tags: ['Automotive', 'Systems Engineering', 'Europe'],
        type: 'work'
    },
    {
        year: '2015',
        title: 'Aerospace Engineer',
        org: 'Airbus \u2014 Germany',
        desc: 'High-tech aerospace engineering. Precision, reliability, and performance under failure conditions. The engineering discipline I carry into every AI system and infrastructure decision I make.',
        tags: ['Aerospace', 'Airbus', 'Precision Engineering'],
        type: 'work'
    },
    {
        year: '2016',
        title: 'Co-Founder & Director \u2014 Sigmind AI',
        org: 'Dhaka, Bangladesh',
        desc: 'Founded Bangladesh\'s first AI startup in computer vision. Built face detection, person tracking, and license plate recognition systems. Raised $100K seed from SBK Tech Ventures & Robi Axiata. Achieved 3.2\u00d7 ROAS. Technology subsequently acquired by the Government of Bangladesh for national AI infrastructure.',
        tags: ['Bangladesh\'s First AI Startup', '$100K Raised', 'Govt. Acquisition', 'Computer Vision'],
        type: 'venture'
    },
    {
        year: '2019',
        title: 'Triple Award Year',
        org: 'Asia-Pacific \u00b7 Saudi Arabia \u00b7 Bangladesh',
        desc: 'APICTA Best AI Startup award in Vietnam, BASIS National ICT Award, and competed at the Entrepreneurship World Cup in Riyadh \u2014 all in the same year.',
        tags: ['APICTA Best AI Startup', 'BASIS ICT Award', 'EWC Riyadh'],
        type: 'award'
    },
    {
        year: '2021',
        title: 'Founder \u2014 Lynkeus AI',
        org: 'Seoul, South Korea',
        desc: 'Relocated to Seoul and founded a GPU-optimized maritime computer vision venture. Secured $200K+ in Korean government grants through K-Startup Grand Challenge \u2014 top 5% of 3,200+ global applicants. Reduced inference latency by 40% through custom NVIDIA hardware optimization.',
        tags: ['Seoul', 'K-Startup Grand Challenge', '$200K+ Grants', 'Maritime Vision'],
        type: 'venture'
    },
    {
        year: '2025',
        title: 'Lynkeus AI \u2014 Profitable',
        org: 'South Korea \u00b7 International Customers',
        desc: 'Lynkeus AI reaches profitability with a growing international customer base across maritime and industrial computer vision sectors.',
        tags: ['Profitable', 'Scale', 'International'],
        type: 'milestone'
    },
    {
        year: 'Now',
        title: 'Founder & CEO \u2014 Zipto',
        org: 'AI Marketing Automation SaaS',
        desc: 'Building Zipto \u2014 an AI-powered digital marketing automation platform that handles campaign creation, audience targeting, performance optimization, and reporting. Giving brands the output of a full marketing team at a fraction of the cost.',
        tags: ['SaaS', 'AI Automation', 'Digital Marketing', 'Building'],
        type: 'current'
    }
]

const typeColors = {
    education: '#4fc3f7',
    work: '#ce93d8',
    venture: 'var(--accent-color)',
    award: '#ffd54f',
    milestone: '#80cbc4',
    current: 'var(--accent-color)'
}

const JourneyTimeline = () => {
    const itemsRef = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('tl-visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.15 }
        )

        itemsRef.current.forEach((el) => {
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <section className="section journey-section" id="journey">
            <div className="section-container">
                <header className="section-header">
                    <h2 className="section-title">
                        The <span className="highlight-red">Journey</span>
                    </h2>
                    <p className="section-subline">
                        From aerospace engineering in Germany to founding AI ventures across three continents.
                    </p>
                </header>

                <div className="timeline-wrap">
                    <div className="timeline-line"></div>

                    {milestones.map((m, i) => (
                        <div
                            key={i}
                            className="tl-item"
                            ref={(el) => (itemsRef.current[i] = el)}
                            style={{ '--tl-delay': `${i * 60}ms` }}
                        >
                            <div
                                className={`tl-dot ${m.type === 'current' ? 'tl-dot-pulse' : ''}`}
                                style={{ background: typeColors[m.type] }}
                            ></div>

                            <div className="tl-year" style={{ color: typeColors[m.type] }}>
                                {m.year}
                            </div>

                            <div className="tl-card">
                                <div className="tl-card-header">
                                    <h3 className="tl-title">{m.title}</h3>
                                    <span className="tl-org">{m.org}</span>
                                </div>
                                <p className="tl-desc">{m.desc}</p>
                                <div className="tl-tags">
                                    {m.tags.map((tag, j) => (
                                        <span
                                            key={j}
                                            className="tl-tag"
                                            style={m.type === 'current' ? { borderColor: 'var(--accent-color)', color: 'var(--accent-color)' } : {}}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default JourneyTimeline
