import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Navbar from './Navbar';

function Home() {
    const videoRef = useRef(null);
    const contentRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        // Prevent scrolling issues
        document.body.style.overflowX = "hidden";

        // Create main timeline
        const mainTl = gsap.timeline();
        mainTl.set({}, {}, "+=1");

        mainTl.fromTo(videoRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 2.5, ease: 'power2.inOut' }
        );

        mainTl.fromTo(titleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 0.9, duration: 1, ease: 'power3.out' },
            '+=0.3'
        )
        .fromTo(subtitleRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 0.9, duration: 1, ease: 'power3.out' },
            '-=0.7'
        )
        .fromTo(buttonsRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 0.9, duration: 0.8, ease: 'power3.out' },
            '-=0.7'
        );

        return () => {
            document.body.style.overflowX = "auto";
        };
    }, []);

    return (
        <div className="w-full h-screen text-white flex flex-col relative overflow-hidden"
        id="home">
            {/* Full-Screen Video Background */}
            <video 
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
                src='./src/assets/movies/home.mov' 
                autoPlay 
                loop 
                muted
            />

            {/* Fixed Navbar */}
            <Navbar/>

            {/* Content Section */}
            <div ref={contentRef} className="absolute w-full h-screen px-4 md:px-16 lg:px-28 flex flex-col items-center justify-center text-center pt-16 md:pt-20">
                
                {/* Title */}
                <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-shadow-xl">
                    <span className="text-[#4acce7]">G</span>
                    <span className="text-[#ef37a6]">O</span>
                    <span className="text-[#e3ff5a]">A</span>
                    <span className="text-[#9c5bd0]">T</span>
                    <span className="text-[#ef37a6]">T</span>
                    <span className="text-[#ea89b7]">E</span>
                    <span className="text-[#f3dc91]">A</span>
                    <span className="text-[#9c5bd0]">Z</span>
                </h1>

                {/* Subtitle */}
                <h2 ref={subtitleRef} className="text-lg md:text-2xl lg:text-3xl font-normal text-shadow-xl opacity-30 px-2 md:px-8 max-w-2xl">
                    Welcome to GoatTeaz—where history's most goated facts come alive! 
                    Dive into a world of mind-blowing stories, jaw-dropping discoveries, 
                    and timeless trivia that's anything but ordinary.
                </h2>

                {/* Buttons */}
                <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4 md:gap-5">
                    <button className="border-2 border-[#e3ff5a] bg-transparent backdrop-blur-3xl text-[#e3ff5a] px-6 md:px-10 py-2 md:py-3 rounded-full mt-5 shadow-3xl font-extrabold hover:bg-[#ef37a6] active:scale-95 transition-colors text-sm md:text-base">
                        Explore Goated Facts
                    </button>
                    <button className="border-2 border-[#e3ff5a] bg-transparent backdrop-blur-3xl text-[#e3ff5a] px-6 md:px-10 py-2 md:py-3 rounded-full mt-5 shadow-3xl font-extrabold hover:bg-[#ef37a6] active:scale-95 transition-colors text-sm md:text-base">
                        Join Our Community
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
