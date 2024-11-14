import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

function BlogsHeading() {
    const [blogs, setBlogs] = useState([]);
    const letterRefs = useRef([]);
    const lineRef = useRef(null);
    const lineContainerRef = useRef(null);

    useEffect(() => {
        // Simulating an API call to fetch blog data
        const fetchBlogs = async () => {
            const blogData = [
                {
                    id: 1,
                    title: "Did Leo Really Have to Eat Bear Flesh to Win an Oscar? Not Exactly… But It Sure Helped!",
                    description: "If you thought you needed to chow down on bear flesh to snag an Oscar, well, think again! Today’s “goated” tea is all about Leonardo DiCaprio and the extremely wild choice he made for his role in The Revenant. Spoiler: This was no ordinary method acting!",
                    photoUrl: "https://i2-prod.themirror.com/incoming/article1185.ece/ALTERNATES/s1200b/0_bear_main.jpg",
                    content:"The Scene That Made Every Viewer Cringe (Including Leo) So here’s the setup: In The Revenant, Leo’s character is struggling for survival in the frozen wilderness, and at one point, he needs to eat a bloody piece of bear meat. The prop department, ever so kind, offered him a fake, gelatin-based “bear meat” substitute. Easy, right? But Leo, being the GOAT he is, thought nah – that’s way too simple. Instead, he opted to go all-in and eat real bison flesh. Yep, actual raw bison meat. And, as you might imagine, his stomach didn’t take kindly to it. What happened next? Well, he puked. But that raw, visceral moment was so authentic that it ended up making the final cut. And That’s How He Finally Won the Oscar! After six nominations and countless meme-worthy losses, The Revenant finally did it for Leo. All the frozen lakes, insane stunts, and, yes, that bison flesh moment paid off. This wasn’t just acting—it was surviving (almost literally) to bring the character to life. The Academy had to hand over the gold! So, did eating bison flesh singlehandedly win him the Oscar? Probably not. But it sure added a whole new level of commitment that became unforgettable. Here’s to Leo, the guy who went beyond the script, turned his stomach inside out, and finally snagged that much-deserved Oscar—proving that when it comes to acting, he’s in a league of his own.",
                    
                },
                {
                    id: 2,
                    title: "The “Goated” Origin Story of Nickelodeon: How a 5-Cent Fee Became Every Kid’s Dream Channel",
                    description: "Here at GOATTEAZ, we’re all about serving up the hottest tea on your favorite shows, movies, and channels – and today, we’re spilling some seriously retro tea on Nickelodeon! Get ready to laugh, gasp, and maybe shed a nostalgic tear as we dive into how a humble 5-cent movie ticket paved the way for one of the most “goated” kids' channels in history.",
                    photoUrl: "https://i.scdn.co/image/ab6761610000e5eb48c209065ea0afd328c8d43e",
                    content:"",
                    
                },
                {
                    id: 3,
                    title: "Why Wait for a Fortune Teller When You Can Be Christopher Nolan?",
                    description: "“You think you need this guy to predict the future?” (Cue: iconic fortune-teller parrot). Well, not if you wake up as Christopher Nolan! That’s right – today’s “goated” tea from GOATTEAZ is all about the guy who doesn’t need a parrot to predict the future. In fact, he practically invented his own with some math, a camera, and mind-bending movies.",
                    photoUrl: "https://pyxis.nymag.com/v1/imgs/b97/838/9575952d6e4aaa9424ba7ce1b38485b97d-nolan-movies-ranked.1x.rsquare.w1400.jpg",
                    content:"",
                    
                },
                {
                    id: 4,
                    title: "How Discipline Turned Akshay Kumar from “Flop Actor” to Bollywood’s Ultimate Khiladi",
                    description: "Think it takes only blockbuster hits to make a Bollywood legend? Think again! Today’s “goated” tea is all about how Akshay Kumar bounced back from the brink of career disaster and proved that discipline can be the ultimate comeback weapon.",
                    photoUrl: "https://hoor72.com/_next/image?url=https%3A%2F%2Fh72.s3.ap-south-1.amazonaws.com%2Fakshay-kumar-phir-hera-pheri-pose.png&w=828&q=75",
                    content:"",
                    
                }
            ];
            setBlogs(blogData);
        };

        fetchBlogs();
    }, []);

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

        const curveHeight = 30;
        const curveDirection = offsetX < rect.width / 2 ? 1 : -1;

        const newPath = `M0 40 Q ${offsetX} ${40 + curveDirection * curveHeight} ${rect.width} 40`;
        gsap.to(lineRef.current, {
            attr: { d: newPath },
            duration: 0.3,
            ease: 'power3.out',
        });
    };

    const handleLineLeave = () => {
        const straightPath = `M0 40 Q ${lineContainerRef.current.offsetWidth / 2} 40 ${lineContainerRef.current.offsetWidth} 40`;
        gsap.to(lineRef.current, {
            attr: { d: straightPath },
            duration: 0.6,
            ease: 'elastic.out(1, 0.3)',
        });
    };

    const sliceTitle = (title) => {
        const words = title.split(' ');
        return words.slice(0, 15).join(' ') + (words.length > 15 ? '...' : '');
    };

    const sliceDescription = (description) => {
        const words = description.split(' ');
        return words.slice(0, 15).join(' ') + (words.length > 15 ? '...' : '');
    };

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
                className="w-[900px] h-[80px] flex justify-center items-center mt-0 opacity-80"
            >
                <svg width="100%" height="80" viewBox="0 0 900 80" preserveAspectRatio="none">
                    <path
                        ref={lineRef}
                        d="M0 40 Q 450 40 900 40"
                        fill="transparent"
                        stroke="white"
                        strokeWidth="1.5"
                    />
                </svg>
            </div>
            
            <div className="h-[90vh] w-screen flex justify-center items-center">
                {/* Left Section */}
                <div className='h-full w-1/2 p-3'>
                    {blogs[0] && (
                        <div className='flex flex-col h-full border-2 border-white border-opacity-20 rounded-3xl p-3'>
                             <img src={blogs[0].photoUrl} alt={blogs[0].title} className="w-full h-[75%] object-cover rounded-2xl" />
                             <div className='flex flex-col items-start h-full w-full p-1 pt-3'>
                                <h2 className="text-xl font-bold">{sliceTitle(blogs[0].title)}</h2>
                                <p className='opacity-50'>{sliceDescription(blogs[0].description)}</p>
                                <button className="bg-red-500 rounded-3xl p-2 mt-2  text-sm inline-block">See More</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Section */}
                <div className='h-full w-1/2 px-2 flex flex-col justify-center items-center gap-y-5 overflow-y-scroll'>
                    {blogs[1] && (
                        <div className='w-full h-[30%] flex flex-row justify-center items-center rounded-3xl border-2 border-white  border-opacity-20 y-70 p-3'>
                            <img src={blogs[1].photoUrl} alt={blogs[1].title} className="w-[30%] h-full object-cover rounded-2xl " />
                            <div className='flex flex-col items-start h-full w-[70%] p-0 ps-5'>
                                <h2 className="text-lg font-bold">{sliceTitle(blogs[0].title)}</h2>
                                <p className='opacity-50'>{sliceDescription(blogs[1].description)}</p>
                                <button className="bg-red-500 rounded-3xl p-2 mt-2  text-sm inline-block">See More</button>
                            </div>
                        </div>
                    )}
                    {blogs[2] && (
                         <div className='w-full h-[30%] flex flex-row justify-center items-center rounded-3xl border-2 border-white  border-opacity-20 p-3'>
                         <img src={blogs[2].photoUrl} alt={blogs[2].title} className="w-[30%] h-full object-cover rounded-2xl" />
                         <div className='flex flex-col items-start h-full w-[70%] p-0 ps-5'>
                             <h2 className="text-lg font-bold">{sliceTitle(blogs[0].title)}</h2>
                             <p className='opacity-50'>{sliceDescription(blogs[2].description)}</p>
                             <button className="bg-red-500 rounded-3xl p-2 mt-2  text-sm inline-block">See More</button>
                         </div>
                     </div>
                    )}
                    {blogs[3] && (
                         <div className='w-full h-[30%] flex flex-row justify-center items-center rounded-3xl border-2 border-white  border-opacity-20 p-3'>
                         <img src={blogs[3].photoUrl} alt={blogs[3].title} className="w-[30%] h-full object-cover rounded-2xl" />
                         <div className='flex flex-col items-start h-full w-[70%] p-0 ps-5'>
                             <h2 className="text-lg font-bold">{sliceTitle(blogs[0].title)}</h2>
                             <p className='opacity-50'>{sliceDescription(blogs[3].description)}</p>
                             <button className="bg-red-500 rounded-3xl p-2 mt-2  text-sm inline-block">See More</button>
                         </div>
                     </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BlogsHeading;
