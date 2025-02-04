import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaTimes, FaBars } from 'react-icons/fa';
import { RiAccountCircleFill, RiAccountCircleLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const menuRef = useRef(null);
    const linksRef = useRef([]);
    const tl = useRef(null);
    const navbarRef = useRef(null);

    const menuLinks = [
        { title: 'HOME', path: 'home' },
        { title: 'CATEGORIES', path: 'popular' },
        { title: 'SHORTS', path: 'shorts' },
        { title: 'ABOUT', path: 'about' },
        { title: 'BLOGS', path: 'blogs' },
        { title: 'CONTACT', path: 'contact' },
    ];

    const user = {
        name: "Arjun Goel",
        profilePhoto: "", // Leave empty for default photo
    };

    useEffect(() => {
        gsap.fromTo(
            navbarRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 2 }
        );

        tl.current = gsap.timeline({ paused: true });

        tl.current.to(menuRef.current, {
            y: '0%',
            duration: 0.5,
            ease: 'power3.inOut'
        });

        tl.current.fromTo(
            linksRef.current,
            { y: -50, opacity: 0, rotateX: -45 },
            { y: 0, opacity: 1, rotateX: 0, stagger: 0.1, duration: 0.6, ease: 'back.out(1.7)' },
            '-=0.3'
        );
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isMenuOpen]);

    const handleNavClick = (sectionId) => {
        tl.current.reverse().then(() => {
            setIsMenuOpen(false);
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    };

    return (
        <nav ref={navbarRef} className="w-full bg-black bg-opacity-30  backdrop-blur-xl text-white p-3 px-4 sticky top-0 left-0 z-50 opacity-0">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-md font-extrabold flex items-center hover:text-red-400 cursor-pointer transition-colors space-x-[-0.4rem]">
                    <img src="https://i.postimg.cc/mZQwpftF/logowhite.png" alt="Goateaz" className="w-12 h-10" />
                    <div className="space-y-[-0.3rem]"><h1>GOAT</h1><h1>TEAZ</h1></div>
                </div>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex space-x-6 text-lg text-red-300 font-extralight ">
                    {menuLinks.map((link) => (
                        <li key={link.title} className="hover:text-[#0fffff] transition-colors">
                            <button onClick={() => handleNavClick(link.path)}>{link.title}</button>
                        </li>
                    ))}
                </ul>

                {/* Sign In and Hamburger Menu */}
                <div className="flex items-center space-x-3 relative">
                    {/* Sign In Button */}
                    <Link to="/signin" className="bg-transparent border-2 px-3  hover:text-blue-500  hover:border-blue-500 p-1.5  rounded-2xl text-sm cursor-pointer ">
                        Sign in
                        </Link>

                    {/* Account Icon */}
                    <RiAccountCircleFill
                        className="w-9 h-9 cursor-pointer hover:text-red-400"
                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                    />

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 top-14 backdrop-blur-lg bg-black bg-opacity-70 text-white w-72 p-4 rounded-lg shadow-lg z-50">
                            <div className="flex items-center space-x-3 mb-4">
                                {user.profilePhoto ? (
                                    <img
                                        src={user.profilePhoto}
                                        alt="Profile"
                                        className="w-16 h-16 border-2 rounded-full"
                                    />
                                ) : (
                                    <div className="w-16 h-16 bg-gray-300  rounded-full flex items-center justify-center text-gray-500">
                                        <RiAccountCircleLine className="text-4xl" />
                                    </div>
                                )}
                                <span className="font-bold text-xl">{user.name}</span>
                            </div>
                            <button
                                className="w-full flex justify-center items-center bg-green-500 text-white py-1 rounded-md hover:bg-green-600 transition-colors my-2"
                                onClick={() => alert('Editing profile...')}
                            >
                                <FaEdit className="mr-2" /> Edit
                            </button>
                            <button
                                className="w-full flex justify-center items-center bg-red-500 text-white py-1 rounded-md hover:bg-red-600 transition-colors"
                                onClick={() => alert('Logging out...')}
                            >
                                <IoIosLogOut className="mr-2" /> Logout
                            </button>
                        </div>
                    )}

                    {/* Hamburger Menu */}
                    <button
                        className="md:hidden text-white text-4xl font-extrabold focus:outline-none active:scale-90"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <FaBars />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className="fixed top-0 left-0 w-full h-screen bg-[url('https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg')] bg-cover translate-y-[-100%] z-[9998] flex items-center justify-center"
            >
                <button
                    className="absolute top-8 right-8 text-[#e3ff5a] text-5xl focus:outline-none hover:text-red-500 transition-colors active:scale-90"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <FaTimes />
                </button>

                <ul className="text-center space-y-8">
                    {menuLinks.map((link, index) => (
                        <li
                            key={link.title}
                            ref={(el) => (linksRef.current[index] = el)}
                            className="text-3xl font-extrabold text-white text-shadow-md hover:italic ease-in-out hover:text-[#e3ff5a] transition-colors"
                        >
                            <button onClick={() => handleNavClick(link.path)}>{link.title}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
