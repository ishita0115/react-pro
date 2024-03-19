"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <img className="h-10 mt-2" src="/images/logo.png" alt="Logo" />
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

                    {setIsMenuOpen && (
                                <div className="md:hidden flex items-center justify-center" >
                                    <NavLink href="/signin">Sign In</NavLink>
                                    <NavLink href="/login">Login</NavLink>
                                </div>
                    )}

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black" onClick={toggleMenu}>
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6 fi fi-br-menu-burger" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Responsive Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <MobileNavLink href="/">Home</MobileNavLink>
                            <MobileNavLink href="/">About us</MobileNavLink>
                            <MobileNavLink href="/">Services</MobileNavLink>
                            <MobileNavLink href="/">Contact us</MobileNavLink>
                            <MobileNavLink href="/">Property</MobileNavLink>
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
            <div className="text-black uppercase hover:bg-gray-500 hover:text-black px-2 py-1 rounded-md cursor-pointer">{children}</div>
        </Link>
    );
};

const MobileNavLink = ({ href, children }) => {
    return (
        <Link href={href}>
            <div className="block text-black hover:bg-gray-500 hover:text-black px-3 py-2 rounded-md cursor-pointer">{children}</div>
        </Link>
    );
};

export default Navbar;

