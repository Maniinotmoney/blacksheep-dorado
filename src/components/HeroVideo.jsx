import React from 'react';
import '../css/index.css';
import '../css/Hero.css';
import '../css/HeroVideo.css';
import doradoVid from '../assets/video/dorado-vid.mp4';

const HeroVideo = () => {
    return (
        <section className="hero" id="hero-video">

            <video
                src={doradoVid}
                autoPlay
                loop
                muted
                playsInline
                className="hero-video-element hero-video-desktop"
            />

            <video
                src={doradoVid}
                autoPlay
                loop
                muted
                playsInline
                className="hero-video-element hero-video-mobile"
            />

            <div className="hero-video-text-container hero-video-overlay">
                <h1 className="hero-video-title">

                    {"DORADO".split("").map((char, index) => (
                        <span
                            key={`d-${index}`}
                            className="letter-span"
                            style={{ animationDelay: `${0.8 + (index * 0.05)}s` }}
                        >
                            {char}
                        </span>
                    ))}
                    <br />{" "}
                    {"PETS".split("").map((char, index) => (
                        <span
                            key={`p-${index}`}
                            className="letter-span"
                            style={{ animationDelay: `${1.1 + (index * 0.05)}s` }}
                        >
                            {char}
                        </span>
                    ))}
                </h1>
            </div>

        </section>
    );
};

export default HeroVideo;
