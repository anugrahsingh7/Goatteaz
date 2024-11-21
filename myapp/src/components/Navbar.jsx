import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaSearch } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        // Handle the search logic here
        console.log('Searching for:', query);
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const linksRef = useRef([]);
    const tl = useRef(null); // Use ref to persist timeline across renders
    const navbarRef = useRef(null);
    
    const menuLinks = [
        { title: 'HOME', path: '/' },
        { title: 'EXPLORE FACTS', path: '/explore' },
        { title: 'BLOGS', path: '/blogs' },
        { title: 'COMMUNITY', path: '/community' },
        { title: 'CONTACT US', path: '/contact' },
        { title: 'ABOUT US', path: '/about' },
    ];

    useEffect(() => {
        // Initial fade in animation for navbar
        gsap.fromTo(navbarRef.current,
            { 
                opacity: 0,
                y: -20 
            },
            { 
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 2 // Adjusted delay to match video animation
            }
        );

        // Menu animation timeline
        tl.current = gsap.timeline({ paused: true });

        // Animate the full-screen menu
        tl.current.to(menuRef.current, {
            y: '0%',
            duration: 0.5,
            ease: 'power3.inOut'
        });

        // Animate menu items
        tl.current.fromTo(
            linksRef.current,
            { 
                y: -50,
                opacity: 0,
                rotateX: -45
            },
            { 
                y: 0,
                opacity: 1,
                rotateX: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: 'back.out(1.7)',
            },
            '-=0.3'
        );

        // Expose the timeline to parent component
        if (window.navbarTimeline) {
            window.navbarTimeline = tl.current;
        }
    }, []);

    // Toggle the menu animation when isMenuOpen changes
    useEffect(() => {
        if (isMenuOpen) {
            tl.current.play(); // Play forward when menu opens
        } else {
            tl.current.reverse(); // Reverse animation when menu closes
        }
    }, [isMenuOpen]);

    return (
        <nav 
            ref={navbarRef}
            className="w-full bg-transparent backdrop:blur-md text-white p-4 sticky top-0 left-0 z-50 opacity-0" // Changed to sticky
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-3xl font-extrabold flex items-center hover:text-red-500 cursor-pointer transition-colors text-shadow-md">
                    <img src="./src/assets/logowhite.png" alt="Goateaz" className="w-10 h-10 " />
                    <span className='text-[#e3ff5a]'>G</span>
                    <span className='text-[#ef37a6]'>O</span>
                    <span className='text-[#56d6d6]'>A</span>
                    <span className='text-[#9c5bd0]'>T</span>
                    <span className='text-[#ea89b7]'>E</span>
                    <span className='text-[#f3dc91]'>A</span>
                    <span className='text-[#e3ff5a]'>Z</span>
                </div>

                {/* Menu Button */}
                <button 
                    className="text-white text-3xl font-extrabold focus:outline-none  active:scale-90 text-shadow-md"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <span className='text-[#f3dc91]'>M</span>
                    <span className='text-[#73d2b7]'>E</span>
                    <span className='text-[#eb7fb0]'>N</span>
                    <span className='text-[#ef20a1]'>U</span>
                </button>
            </div>

            {/* Updated Menu Links with perspective */}
            <div 
                ref={menuRef}
                className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 translate-y-[-100%] z-[9998] flex items-center justify-center perspective-[1000px]"
            >
                {/* Close Button */}
                <button 
                    className="absolute top-8 right-8 text-white text-4xl focus:outline-none hover:text-red-500 transition-colors active:scale-90"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <FaTimes />
                </button>

                {/* Menu Links */}
                <ul className="text-center space-y-8">
                    {menuLinks.map((link, index) => (
                        <li 
                            key={link.title}
                            ref={el => linksRef.current[index] = el}
                            className="text-6xl font-extrabold text-white hover:text-black transition-colors transform-style-preserve-3d"
                        >
                            <a href={link.path}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
