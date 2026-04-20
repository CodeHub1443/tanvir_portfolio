import React from 'react'

const FeatureSystemCard = ({ title, description, highlights, ctaText, ctaLink = "#" }) => {
    return (
        <div className="feature-card">
            <div className="feature-media-placeholder">
                Media Placeholder – Replace Later
            </div>
            <div className="feature-content">
                <h3>{title}</h3>
                <p>{description}</p>

                <ul className="feature-highlights">
                    {highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                    ))}
                </ul>

                <button className="primary-button">
                    <span>{ctaText}</span>
                </button>
            </div>
        </div>
    )
}

export default FeatureSystemCard
