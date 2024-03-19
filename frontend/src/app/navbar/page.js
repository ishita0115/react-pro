"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    return (
        <nav className="bg-white-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-base sm:text-sm md:text-sm">
                <div className="flex items-center justify-between h-16 ">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <img className="h-10 mt-5" src="/images/logo.png" alt="Logo" />
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center justify-center flex-1 space-x-4">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/">About us</NavLink>
                        <NavLink href="/">Services</NavLink>
                        <NavLink href="/">Contact us</NavLink>
                        <NavLink href="/">Property</NavLink>
                    </div>

                    {/* Signin and Login */}
                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink href="/signin">Sign In</NavLink>
                        <NavLink href="/login">Login</NavLink>
                    </div>

                    {setIsClick && (
                    <div className="flex items-center space-x-4 mt-4">
                                <NavLink href="/signin">Sign In</NavLink>
                                <NavLink href="/login">Login</NavLink>
                    </div>
                     )}
               
                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black" onClick={toggleNavbar}>
                            {isClick ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6H16m4 12h6" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                 {/* Responsive Mobile Menu */}
                 {isClick && (
                    <div className="md:hidden block ">
                        <div className="block px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/">About us</NavLink>
                            <NavLink href="/">Services</NavLink>
                            <NavLink href="/">Contact us</NavLink>
                            <NavLink href="/">Property</NavLink>
                            
                        </div>
                    </div>
                )}
                
            </div>
        </nav>
    );
};

const NavLink = ({ href, children }) => {
    return (
        <Link href={href}>
            <span className="text-black uppercase hover:bg-gray-500 hover:text-black px-2 py-1 rounded-md cursor-pointer">{children}</span>
        </Link>
    );
};

export default Navbar;
