import React, { useRef } from 'react';
import aboutImage from '../assets/perez-with-GR.jpeg';
import aboutImage2 from '../assets/Perez-with-black-dog.jpeg';
import AshleyImg from '../assets/team/ashley.jpeg';
import DianaImg from '../assets/team/diana.jpeg';
import DrPerezImg from '../assets/team/dr-perez.jpeg';
import IsakImg from '../assets/team/isak.jpeg';
import JordanImg from '../assets/team/jordan.jpeg';
import NatalieImg from '../assets/team/natalie.jpeg';
import Natalie2Img from '../assets/team/natalie2.jpeg';
import UbaldoImg from '../assets/team/ubaldo.jpeg';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutManifesto = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });



    const yBio = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={sectionRef} className="manifesto-section">

            <div className="manifesto-container">





                <div className="manifesto-line line-1" data-aos="fade-up">
                    <span className="manifesto-label lbl-crafted">Est. 2010</span>
                    <span className="manifesto-text">Founded To Heal</span>
                </div>


                <div className="manifesto-line line-2" data-aos="fade-up" data-aos-delay="100">
                    <span className="manifesto-text highlight">Leading</span>
                    <span className="manifesto-text">With Heart</span>
                    <span className="manifesto-label lbl-for">For</span>
                </div>


                <div className="manifesto-line line-3" data-aos="fade-up" data-aos-delay="200">
                    <span className="manifesto-text">Care, Comfort,</span>
                    <span className="manifesto-text highlight">Trust</span>
                    <span className="manifesto-label lbl-everyday">Everyday</span>

                </div>


                <div className="manifesto-line line-4" data-aos="fade-up" data-aos-delay="300">
                    <span className="manifesto-text highlight">We Nurture</span>
                    <span className="manifesto-text">Life</span>
                </div>


                <div className="manifesto-line line-5" data-aos="fade-up" data-aos-delay="400">
                    <span className="manifesto-label lbl-elegance">Service</span>
                    <span className="manifesto-text">Committed To</span>
                    <span className="manifesto-text highlight">Wellness</span>
                </div>

            </div>


            <div className="manifesto-bio-wrapper">




                <div className="bio-content-grid">


                    <div className="bio-img-col left">
                        <motion.div style={{ y: yBio, height: '110%' }}>
                            <img src={aboutImage} alt="Dr Perez interaction" style={{ marginTop: '40%', height: '60%', objectFit: 'cover' }} />
                        </motion.div>
                    </div>


                    <div className="bio-text-col">
                        <div className="bio-bg-text-leadership">LEADERSHIP</div>
                        <h3 className="bio-title-large">MEET DR. PEREZ</h3>
                        <p className="bio-text-refined">
                            Dr. Perez Martinez is a Caribbean-born veterinarian with over 10 years of experience providing compassionate, personalized care for companion animals. A graduate of Ross University School of Veterinary Medicine, he built his career in the United States, including training at Stonewall Veterinary Clinic in Virginia, where strong mentorship helped shape his approach to modern veterinary medicine. <br /><br />
                            Dr. Perez has a special interest in soft tissue surgery, client education, and small animal behavior, and he’s known for clear, empathetic communication that helps pet parents feel confident in every decision. He is proud to welcome Oceanside families to his practice and support pets’ health at every life stage.
                        </p>
                    </div>


                    <div className="bio-img-col right">
                        <motion.div style={{ y: yBio, height: '160%' }}>
                            <img src={aboutImage2} alt="Veterinary care" style={{ height: '40%', objectFit: 'cover' }} />
                        </motion.div>
                    </div>

                </div>
            </div>

            <div className="manifesto-team-section">
                <h3 className="team-section-title">Meet Our Team</h3>
                <div className="team-expanding-container">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-pill-card" style={{ backgroundImage: `url(${member.image})` }}>
                            <div className="pill-content">
                                <h4 className="pill-name">{member.name}</h4>
                                <p className="pill-role">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};
const teamMembers = [
    {
        name: "Dr. Perez",
        role: "DVM",
        image: DrPerezImg,
    },
    {
        name: "Natalie",
        role: "Receptionist",
        image: NatalieImg,
    },
    {
        name: "Ashley",
        role: "Receptionist",
        image: AshleyImg,
    },
    {
        name: "Diana",
        role: "Office Manager",
        image: DianaImg,
    },
    {
        name: "Jordan",
        role: "RVT",
        image: JordanImg,
    },
    {
        name: "Natalie Too",
        role: "Veterinary Assistant",
        image: Natalie2Img,
    },
    {
        name: "Isak",
        role: "Veterinary Assistant",
        image: IsakImg,
    },
    {
        name: "Ubaldo",
        role: "Veterinary Assistant",
        image: UbaldoImg,
    }
];

export default AboutManifesto;
