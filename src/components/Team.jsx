import React from 'react';
import '../css/Team.css';

const teamMembers = [
    {
        name: "Dr. Emily Chen",
        role: "Chief Veterinarian",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "Dr. Chen has over 15 years of experience in small animal medicine."
    },
    {
        name: "Dr. Michael Ross",
        role: "Surgeon",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "Specializing in orthopedic surgery, Dr. Ross ensures your pets get back on their feet."
    },
    {
        name: "Sarah Johnson",
        role: "Head Vet Tech",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "Sarah leads our nursing team with compassion and expertise."
    },
    {
        name: "David Smith",
        role: "Practice Manager",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "David ensures the smooth operation of our clinic every day."
    }
];

const Team = () => {
    return (
        <section className="team-section">
            <div className="container">
                <div className="team-header" data-aos="fade-up">
                    <h2 className="team-title">Meet Our Team</h2>
                    <p className="team-desc">
                        Our dedicated team of professionals is here to provide the best care for your furry family members.
                    </p>
                </div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="team-img-wrapper">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="team-img"
                                />
                            </div>
                            <div className="team-info">
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                                <p className="team-bio">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
