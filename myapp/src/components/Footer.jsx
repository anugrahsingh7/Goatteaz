import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
    const footerRef = useRef(null);
    const socialIconsRef = useRef(null);
    const newsletterRef = useRef(null);

    useEffect(() => {
        // Fade in animation when footer comes into view
        gsap.fromTo(footerRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top bottom",
                    end: "bottom bottom",
                }
            }
        );

        // Floating animation for social icons
        const icons = socialIconsRef.current.children;
        gsap.to(icons, {
            y: -10,
            duration: 1.5,
            stagger: 0.2,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1
        });
    }, []);

    // Hover animation for links
    const handleLinkHover = (e) => {
        gsap.to(e.target, {
            scale: 1.1,
            color: "#EF4444", // Changed to red-500
            duration: 0.3,
            ease: "power2.out"
        });
    };

    const handleLinkLeave = (e) => {
        gsap.to(e.target, {
            scale: 1,
            color: "#FFFFFF",
            duration: 0.3,
            ease: "power2.in"
        });
    };

    return (
        <footer ref={footerRef} className="bg-gradient-to-b from-black to-zinc-950 text-white py-16 relative overflow-hidden">
            {/* Updated Background Animation with subtle red accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(239,68,68,0.05),rgba(34,211,238,0.1),rgba(0,0,0,0))]"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Quick Links - Added red accent to hover */}
                    <div className="backdrop-blur-sm bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50 hover:border-red-500/20 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-500 via-cyan-400 to-cyan-200 bg-clip-text text-transparent">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {['Home', 'Explore Facts','About Us', 'Blogs', 'Community' , 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link 
                                        to={`/${item.toLowerCase()}`} 
                                        className="hover:text-gray-300 transition-all duration-300 flex items-center group"
                                        onMouseEnter={handleLinkHover}
                                        onMouseLeave={handleLinkLeave}
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Signup - Added red accent to input focus */}
                    <div ref={newsletterRef} className="md:col-span-2 backdrop-blur-sm bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50 hover:border-red-500/20 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-500 via-cyan-400 to-cyan-200 bg-clip-text text-transparent">
                            Stay Updated
                        </h3>
                        <p className="mb-6 text-zinc-400">
                            Stay updated on the latest <span className="text-red-500">goated</span> facts - because who doesn't want to be the smartest (and most entertaining) person in the room?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="flex-1 p-3 rounded-lg bg-black/50 border border-zinc-800 focus:border-red-500 transition-all duration-300 outline-none text-white"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-red-500 via-cyan-400 to-cyan-500 rounded-lg font-semibold text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Social Media - Added red accent to hover */}
                    <div className="backdrop-blur-sm bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50 hover:border-red-500/20 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-500 via-cyan-400 to-cyan-200 bg-clip-text text-transparent">
                            Follow Us
                        </h3>
                        <div 
                            ref={socialIconsRef} 
                            className="flex justify-center items-center space-x-8 py-4"
                        >
                            {[
                                { Icon: FaFacebook, color: "#1877f2" },
                                { Icon: FaTwitter, color: "#1da1f2" },
                                { Icon: FaInstagram, color: "#e4405f" },
                                { Icon: FaLinkedin, color: "#0077b5" }
                            ].map(({ Icon, color }, index) => (
                                <a 
                                    key={index}
                                    href="#" 
                                    className="relative group p-2"
                                    onMouseEnter={(e) => {
                                        gsap.to(e.target, {
                                            y: -8,
                                            scale: 1.15,
                                            duration: 0.4,
                                            ease: "back.out(1.7)",
                                        });
                                        // Glow effect
                                        gsap.to(e.target.querySelector('.icon-glow'), {
                                            opacity: 0.5,
                                            scale: 1.5,
                                            duration: 0.4,
                                        });
                                        // Color transition
                                        gsap.to(e.target.querySelector('.icon'), {
                                            color: color,
                                            duration: 0.3,
                                        });
                                    }}
                                    onMouseLeave={(e) => {
                                        gsap.to(e.target, {
                                            y: 0,
                                            scale: 1,
                                            duration: 0.4,
                                            ease: "back.out(1.7)",
                                        });
                                        // Remove glow
                                        gsap.to(e.target.querySelector('.icon-glow'), {
                                            opacity: 0,
                                            scale: 1,
                                            duration: 0.4,
                                        });
                                        // Revert color
                                        gsap.to(e.target.querySelector('.icon'), {
                                            color: "white",
                                            duration: 0.3,
                                        });
                                    }}
                                >
                                    {/* Glow effect element */}
                                    <div 
                                        className="icon-glow absolute inset-0 rounded-full bg-cyan-400 opacity-0 blur-md"
                                        style={{ transform: 'scale(1)' }}
                                    ></div>
                                    
                                    {/* Icon */}
                                    <Icon 
                                        className="icon w-6 h-6 relative z-10 transition-transform duration-300"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Legal Links - Added red accent to hover */}
                <div className="mt-12 pt-8 border-t border-zinc-800 text-sm text-center">
                    {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                        <Link 
                            key={item}
                            to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                            className="hover:text-red-500 mx-4 transition-colors duration-300"
                            onMouseEnter={handleLinkHover}
                            onMouseLeave={handleLinkLeave}
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Copyright - Added subtle red accent */}
                <div className="mt-6 text-center text-sm">
                    <span className="text-zinc-500">© {new Date().getFullYear()} </span>
                    <span className="text-red-500">GoatTeaz</span>
                    <span className="text-zinc-500">. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
