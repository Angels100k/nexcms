"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { NavProps } from  '@/theme/aeonian/interface/global/nav'

const MobileNav = ({ nav }: { nav: NavProps }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const button = {
        label: "Book Now",
        url: `https://aeonianluxurysuites.cosmicbooker.com/`,
    };
    // Function to toggle navigation menu
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            {/* Burger menu button */}
            <button onClick={toggleNav} className="md:hidden fixed block shadow-bottomLeft z-[61] top-0 right-0 left-0 bg-white p-2">
                {/* Icon for burger menu (can be replaced with an actual icon) */}
                <div className="burger-menu-icon bg-white flex justify-between ">
                    <a className="text-text font-bold text-base" href={`/`}>
                        <img alt="Logo" src={"/images/Aeonian-full-logo.webp"} width={100} className="my-4 scale-75"  />
                    </a>
                    <div className='h-full my-auto'>
                        {isNavOpen ? <FontAwesomeIcon className='text-primary mr-6' icon={faX}  /> : <FontAwesomeIcon className='text-primary mr-6' icon={faBars}  />}
                    </div>
                </div>
            </button>

            {/* Conditional rendering of navigation items */}
            {isNavOpen && (
                <nav className="md:hidden block z-[60] h-screen w-full bg-white fixed top-0 left-0 navigation-items">
                    <div className="flex flex-row flex-wrap items-center mx-4">
                            <a className="w-full text-primary mt-5 text-center text-xl font-normal" onClick={toggleNav} href={nav.hotel.url}>{nav.hotel.name}</a>
                            <a className="w-full text-primary mt-5 text-center text-xl font-normal" href={nav.room.url}>{nav.room.name}</a>
                            <a className="w-full text-primary mt-5 text-center text-xl font-normal" href={nav.location.url}>{nav.location.name}</a>
                            <a className="w-full text-primary mt-5 text-center text-xl font-normal" href={nav.galery.url}>{nav.galery.name}</a>
                            <a className="w-full text-primary mt-5 text-center text-xl font-normal" href={nav.consact.url}> {nav.contact.name}</a>
                    </div>
                    <div className="flex flex-row flex-wrap items-center mx-4">
                        <a className="primary-button mx-auto mt-5" target="_blank" rel="noopener noreferrer" href={button.url} >{button.label}</a>
                    </div>
                </nav>
            )}
        </>
    );
};

export default MobileNav;
