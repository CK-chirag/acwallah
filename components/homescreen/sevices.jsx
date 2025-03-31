import React from 'react';
import Button from '../common components/button';
import vipImage from '../../src/assets/vip_image.png';

export default function Services() {
    return (
        <div>
            <div className="service-card">
                <img
                    src={vipImage}
                    alt="AC Repair"
                    className="service-card__image"
                />
                <div className="service-card__content">
                    <div className="service-card__header">
                        <div>
                            <h2 className="service-card__title">AC Repair</h2>
                            <p className="service-card__price">Starts from ₹800</p>
                        </div>
                        <Button text="Book Now" className="default-button" />
                    </div>
                    <ul className="service-card__details">
                        <li>Pre Job Inspection: Comprehensive AC Diagnosis</li>
                        <li>Installation of both indoor and outdoor units</li>
                        <li>Post Job Inspection: Thorough checks of gas levels</li>
                        <li>30 Days ACWallah Warranty</li>
                    </ul>
                    <div className="service-card__actions">
                        <a href="#" className="service-card__link">Read More &gt;</a>
                    </div>
                </div>
            </div>
        </div>
    )
}