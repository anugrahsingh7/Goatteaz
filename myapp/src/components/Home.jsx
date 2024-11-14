import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Navbar from './Navbar';

function Home() {
    const videoRef = useRef(null);
    const contentRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        // Create main timeline
        const mainTl = gsap.timeline();

        // 1. Initial pause before animations start
        mainTl.set({}, {}, "+=1"); // 1 second delay before anything starts

        // 2. Fade in video with longer duration
        mainTl.fromTo(videoRef.current,
            { opacity: 0 },
            { 
                opacity: 1, 
                duration: 2.5, // Increased duration
                ease: 'power2.inOut'
            }
        );

        // 3. Animate home content (after video)
        mainTl.fromTo(titleRef.current,
            { 
                y: 50,
                opacity: 0 
            },
            {
                y: 0,
                opacity: 0.9,
                duration: 1,
                ease: 'power3.out'
            },
            '+=0.3' // Slight pause after video
        )
        .fromTo(subtitleRef.current,
            {
                y: 30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 0.9,
                duration: 1,
                ease: 'power3.out'
            },
            '-=0.7'
        )
        .fromTo(buttonsRef.current,
            {
                y: 20,
                opacity: 0
            },
            {
                y: 0,
                opacity: 0.9,
                duration: 0.8,
                ease: 'power3.out'
            },
            '-=0.7'
        );
    }, []);

    return (
        <div className='w-full h-screen text-white flex flex-col'>
            <video 
                ref={videoRef}
                className='absolute top-0 left-0 w-full h-full object-cover opacity-0' 
                src='./src/assets/home.mov' 
                autoPlay 
                loop 
                muted
            />
            {/* Make Navbar fixed at the top */}
            <Navbar/>

            <div ref={contentRef} className="absolute w-screen h-screen px-28 flex flex-col items-center justify-center pt-20">
                <h1 ref={titleRef} className='text-8xl font-extrabold text-shadow-xl'>GOATEAZ</h1>
                <h2 ref={subtitleRef} className='text-3xl text-center font-normal text-shadow-xl'>
                    Welcome to GoatTeaz—where history's most goated facts come alive! 
                    Dive into a world of mind-blowing stories, jaw-dropping discoveries, 
                    and timeless trivia that's anything but ordinary.
                </h2>
                <div ref={buttonsRef} className='flex gap-5'>
                    <button className='bg-transparent border-2 border-white text-white px-10 py-2 rounded-full mt-5 shadow-2xl font-extrabold hover:bg-cyan-400  active:scale-90 transition-colors '>
                        Explore Goated Facts
                    </button>
                    <button className='bg-transparent border-2 border-white text-white px-10 py-2 rounded-full mt-5 shadow-2xl font-extrabold hover:bg-red-500  active:scale-90 transition-colors'>
                        Join Our Community
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
