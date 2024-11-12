import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const linksRef = useRef([]);
    const tl = useRef(null); // Use ref to persist timeline across renders
    
    const menuLinks = [
       
        { title: 'Home', path: '/' },
        { title: 'Explore Facts', path: '/explore' },
        { title: 'Blogs', path: '/blogs' },
        { title: 'Community', path: '/community' },
        { title: 'Contact Us', path: '/contact' },
        
        { title: 'About Us', path: '/about' },
        ];

    useEffect(() => {
        // Initialize GSAP timeline once when the component mounts
        tl.current = gsap.timeline({ paused: true });

        // Animate the full-screen menu drop down
        tl.current.to(menuRef.current, {
            y: '0%',
            duration: 0.5,
            
            ease: 'power3.inOut'
        });

        // Animate the menu links to fade in with staggered timing
        tl.current.fromTo(
            linksRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: 'power3.out' },
            '-=0.3'
        );
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
        <nav className="w-full bg-transparent text-white p-4 fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
               
              
                <div className="text-3xl font-extrabold flex items-center hover:text-red-500 cursor-pointer transition-colors">
                    <img src="./src/assets/logowhite.png" alt="Goateaz" className="w-10 h-10" />
                    Goateaz
                    </div>

                {/* Menu Button */}
                <button 
                    className="text-white text-3xl font-extrabold  focus:outline-none hover:text-cyan-400 transition-colors"
                    onClick={() => setIsMenuOpen(true)}
                >
                    Menu
                </button>
            </div>

            {/* Full Screen Gradient Menu */}
            <div 
                ref={menuRef}
                className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 translate-y-[-100%] z-40 flex items-center justify-center"
            >
                {/* Close Button */}
                <button 
                    className="absolute top-8 right-8 text-white text-4xl focus:outline-none hover:text-red-500 transition-colors"
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
                            className="text-6xl font-extrabold text-white hover:text-black transition-colors"
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
