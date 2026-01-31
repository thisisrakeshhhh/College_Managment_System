// FacilitiesSection.jsx
import React from 'react';
// Assuming you import the data structure from a file
// import { facilitiesData } from './data/facilitiesData'; 

const facilitiesData = [
    { id: 1, img: "/assets/animations/1.gif", title: "Central Library", description: "50,000+ books, digital resources, e-journals, and 24/7 reading rooms with modern amenities." },
    { id: 2, img: "/assets/animations/2.gif", title: "Modern Laboratories", description: "Fully equipped labs for Computer Science, Electronics Physics Chemistry and Biology." },
    { id: 3, img: "/assets/animations/3.gif", title: "Sports Complex", description: "Indoor stadium swimming pool gym cricket ground basketball & tennis courts." },
    { id: 4, img: "/assets/animations/4.gif", title: "Hostel Accommodation", description: "Separate hostels for boys & girls with Wi-Fi mess facility and 24/7 security." },
    { id: 5, img: "/assets/animations/5.gif", title: "Cafeteria", description: "Hygienic food court serving nutritious meals snacks and beverages at affordable prices." },
    { id: 6, img: "/assets/animations/6.gif", title: "Medical Center", description: "On-campus health center with qualified doctors nurses and ambulance services." },
];

const FacilitiesSection = () => (
    <section id="facilities" className="facilities-section">
        <div className="container">
            <div className="section-header">
                <h2>Our Facilities</h2>
                <p>World-class infrastructure for holistic development</p>
            </div>

            <div className="facilities-grid">
                {facilitiesData.map((facility, index) => (
                    <div className="facility-card reveal hover-lift" key={facility.id} style={{ transitionDelay: `${index * 0.1}s` }}>
                        <div className="facility-img">
                            <img src={facility.img} alt={facility.title} loading="lazy" className="hover-scale" />
                        </div>
                        <div className="facility-content">
                            <h3>{facility.title}</h3>
                            <p>{facility.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default FacilitiesSection;