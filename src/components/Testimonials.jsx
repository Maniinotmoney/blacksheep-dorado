import { client, urlFor } from '../sanityClient';
import '../css/Testimonials.css';
import React, { useState, useEffect } from 'react';

const defaultTestimonials = [
    {
        name: "John Doe",
        pet: "Oreo",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: "5.0",
        text: "Prompt response, even at 1am. Dorado treated him immediately at night and within a couple of days he is ok, he's now fit and fine."
    },
    {
        name: "Jane Smith",
        pet: "Jacky",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: "4.9",
        text: "I would like to thank the vet for treating my dog and explaining me how to take care of my dog. Highly recommend Dorado to all pet parents for grooming and treatment."
    },
    {
        name: "Britney",
        pet: "Rosy",
        img: "https://randomuser.me/api/portraits/men/85.jpg",
        rating: "5.0",
        text: "Our cat was diagnosed with pyometra. The clinic is well equipped, very neat and clean. The doctors are experienced. All staff are very polite and know how to handle cats."
    },
    {
        name: "Michael Brown",
        pet: "Bruno",
        img: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: "4.8",
        text: "Friendly staff and immense care for pets. Bruno loves visiting here for his grooming sessions. The vibe is very positive and welcoming."
    },
    {
        name: "Sarah Connor",
        pet: "Terminator",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: "5.0",
        text: "Best veterinary services in the city. The detail with which they diagnosed my dog's skin issue was commendable. Treatment worked like a charm."
    },
    {
        name: "David Kim",
        pet: "Mochi",
        img: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: "4.9",
        text: "Clean, professional, and very caring. Mochi usually hates the vet but seems quite comfortable here. The pricing is also very transparent."
    }
];

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState(defaultTestimonials);
    const scrollRef = React.useRef(null);

    useEffect(() => {
        client.fetch(`*[_type == "testimonial"]{
            name,
            petName,
            image,
            rating,
            reviewText
        }`)
            .then(data => {
                if (data && data.length > 0) {
                    const formattedData = data.map(item => ({
                        name: item.name,
                        pet: item.petName,
                        img: item.image ? urlFor(item.image).url() : 'https://placehold.co/100x100?text=No+Image',
                        rating: item.rating,
                        text: item.reviewText
                    }));
                    setTestimonials(formattedData);
                }
            })
            .catch(console.error);
    }, []);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 350; // Approx card width + gap
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="reviews-section">
            <div className="container">
                <div className="reviews-header" data-aos="fade-up">
                    <div>
                        <h2 className="features-title" style={{ marginBottom: 0 }}>Meet Our Happier Pet Parents</h2>
                        <div className="rating-display">
                            {/* <div className="rating-score">4.9 <i className="fa-solid fa-star star-icon"></i></div> */}
                            {/* <div className="rating-count">72K+ Ratings</div> */}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="slider-nav">
                        <button onClick={() => scroll('left')} className="nav-btn prev-btn" aria-label="Previous Review">
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button onClick={() => scroll('right')} className="nav-btn next-btn" aria-label="Next Review">
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <div className="reviews-grid" ref={scrollRef}>
                    {testimonials.map((review, index) => (
                        <div key={index} className="review-card" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="review-header">
                                <img src={review.img} className="reviewer-avatar" alt={review.name} />
                                <div>
                                    <h4 className="reviewer-name">{review.name}</h4>
                                    <p className="pet-name">{review.pet}</p>
                                </div>
                                <div className="review-badge">
                                    <i className="fa-brands fa-google" style={{ color: '#3b82f6' }}></i> {review.rating}
                                </div>
                            </div>
                            <p className="review-text">"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
