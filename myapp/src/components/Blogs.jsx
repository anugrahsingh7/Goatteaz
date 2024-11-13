import React, { useRef } from 'react';
import gsap from 'gsap';

function BlogsHeading() {
    const letterRefs = useRef([]);
    const lineRef = useRef(null);
    const lineContainerRef = useRef(null);

    const handleMouseEnter = (index) => {
        gsap.to(letterRefs.current[index], {
            scaleY: 1.6,
            duration: 0.15,
            ease: 'expo.out',
        });
    };

    const handleMouseLeave = (index) => {
        gsap.to(letterRefs.current[index], {
            scaleY: 1,
            duration: 0.15,
            ease: 'expo.in',
        });
    };

    const handleLineMove = (e) => {
        const rect = lineContainerRef.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;

        // Dynamically calculate the Y-control point for the curve based on mouse position
        const curveHeight = 30; // Maximum curve height (upwards and downwards)
        const curveDirection = offsetX < rect.width / 2 ? 1 : -1; // Determine curve direction

        // Adjust the control point for the curve to go both upwards and downwards
        const newPath = `M0 40 Q ${offsetX} ${40 + curveDirection * curveHeight} ${rect.width} 40`;
        gsap.to(lineRef.current, {
            attr: { d: newPath },
            duration: 0.3,
            ease: 'power3.out',
        });
    };

    const handleLineLeave = () => {
        // Return to a straight line with smooth elastic effect
        const straightPath = `M0 40 Q ${lineContainerRef.current.offsetWidth / 2} 40 ${lineContainerRef.current.offsetWidth} 40`;
        gsap.to(lineRef.current, {
            attr: { d: straightPath },
            duration: 0.6,
            ease: 'elastic.out(1, 0.3)',
        });
    };

    // Colors for each letter
    const colors = ["#ef20a1", "#e3fe59", "#4acce7", "#f3dc91", "#8c29b6"];

    return (
        <div className="bg-black h-max w-screen flex flex-col justify-center items-center py-2 px-2">
            <div className="bg-transparent pt-4">
                <h1 className="flex justify-center text-8xl font-extrabold">
                    {Array.from("BLOGS").map((letter, index) => (
                        <span
                            key={index}
                            ref={(el) => (letterRefs.current[index] = el)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            style={{ color: colors[index] }}
                            className="inline-block transform origin-center transition-transform mx-0"
                        >
                            {letter}
                        </span>
                    ))}
                </h1>
            </div>

            {/* Line Container */}
            <div
                ref={lineContainerRef}
                onMouseMove={handleLineMove}
                onMouseLeave={handleLineLeave}
                className="w-[900px] h-[80px] flex justify-center items-center mt-0 opacity-80" // Adjusted height of the container
            >
                <svg width="100%" height="80" viewBox="0 0 900 80" preserveAspectRatio="none">
                    <path
                        ref={lineRef}
                        d="M0 40 Q 450 40 900 40" // Adjusted initial path to fit within the taller div
                        fill="transparent"
                        stroke="white"
                        strokeWidth="1.5" // Increased stroke width
                    />
                </svg>
            </div>
            <div className=" h-[90vh] w-screen  flex justify-center items-center">
               <div className='h-full w-1/2 p-3'>
                <div className=' width-screen h-full border-2 border-white border-opacity-70 rounded-3xl p-3 '>1st</div>
                </div>
                <div className='other  h-full w-1/2 px-2 flex flex-col justify-center items-center gap-y-5 overflow-y-scroll'>
                 <div className='w-full h-[30%] flex  rounded-3xl border-2 border-white border-opacity-70 p-3'> 2nd</div>
                 <div className='w-full h-[30%] flex  rounded-3xl border-2 border-white border-opacity-70 p-3'> 3rd</div>
                 <div className='w-full h-[30%] flex  rounded-3xl border-2 border-white border-opacity-70 p-3'> 4th</div>
                 
                </div>
            </div>
            
        </div>
    );
}

export default BlogsHeading;
