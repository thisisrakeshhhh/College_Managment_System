// TestimonialsSection.jsx
import React from 'react';

const testimonialsData = [
    {
        id: 1,
        content: "St. Xavier's transformed my academic journey completely. The personalized attention from faculty and state-of-the-art labs helped me excel in my B.Tech CSE program. Now working at Google as a Software Engineer.",
        author: "Rahul Patel",
        role: "B.Tech CSE, 2022",
        avatar: "/assets/images/image3.jpg"
    },
    {
        id: 2,
        content: "The industry-focused curriculum at St. Xavier's gave me a competitive edge. Within months of graduation, I landed a role at Microsoft. The placement support team was instrumental in my success.",
        author: "Ananya Reddy",
        role: "B.Tech ECE, 2021",
        avatar: "/assets/images/images.jpeg"
    },
    {
        id: 3,
        content: "From day one, I felt supported in my entrepreneurial journey. The BBA program equipped me with practical business skills, and now I'm running my own startup while pursuing my MBA part-time.",
        author: "Vikram Singh",
        role: "BBA, 2022",
        avatar: "/assets/images/image2.jpeg"
    },
];

const TestimonialsSection = () => (
    <section className="testimonials-section">
        <div className="container">
            <div className="section-header">
                <h2>What Our Students Say</h2>
                <p>Hear from our alumni and current students</p>
            </div>

            <div className="testimonials-grid">
                {testimonialsData.map(testimonial => (
                    <div className="testimonial-card" key={testimonial.id}>
                        <div className="testimonial-content">
                            <p>"{testimonial.content}"</p>
                        </div>
                        <div className="testimonial-author">
                            <img src={testimonial.avatar} alt={testimonial.author} className="author-avatar" />
                            <div className="author-info">
                                <strong>{testimonial.author}</strong>
                                <span>{testimonial.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default TestimonialsSection;