import React, { useState, useEffect } from 'react';
import '../css/Blogs.css';
import { client, urlFor } from '../sanityClient';

const defaultBlogs = [
    {
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quidem nihil..",
        category: "Pet Health and Care",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        category: "Pet Health and Care",
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
        category: "Pet Health and Care",
        image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=600"
    }
];

const Blogs = () => {
    const [blogs, setBlogs] = useState(defaultBlogs);

    useEffect(() => {
        client.fetch(`*[_type == "blog"] | order(publishedAt desc)`).then(data => {
            if (data && data.length > 0) {
                setBlogs(data);
            }
        }).catch(console.error);
    }, []);

    return (
        <section className="blogs-section">
            <div className="container relative">
                <div className="blogs-header" data-aos="fade-up">
                    <h2 className="features-title" style={{ marginBottom: 0 }}>Explore Pet Parenting with Dorado Blogs</h2>
                    <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" className="star-spin opacity-50" style={{ position: 'absolute', top: '1rem', right: '1rem', width: '24px' }} alt="star" />
                </div>

                <div className="blog-carousel hide-scrollbar">
                    {blogs.map((blog, index) => (
                        <div key={index} className="blog-card group" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="blog-image-wrapper">
                                <img
                                    src={blog.mainImage ? urlFor(blog.mainImage).url() : blog.image}
                                    className="blog-image"
                                    alt={blog.title}
                                />
                                <div className="blog-tag"><i className="fa-solid fa-heart"></i> dorado</div>
                            </div>
                            <div className="blog-content">
                                <p className="blog-category">{blog.category || "Pet Health and Care"}</p>
                                <h3 className="blog-title">{blog.title}</h3>
                                <button className="blog-btn">READ MORE</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
