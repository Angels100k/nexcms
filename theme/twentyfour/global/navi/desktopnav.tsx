"use client"

import Link from "next/link";
import Button from '@/theme/aeonian/component/atom/button';
import { NavProps } from  '@/theme/aeonian/interface/global/nav'

const DesktopNav = async ({ nav }: {nav: NavProps}) => {
   

    const button = {
        label: "Book Now",
        url: `https://aeonianluxurysuites.cosmicbooker.com/`,
    };
    return (
        <nav className="w-full fixed left-0 top-0 h-24 hidden md:block z-50 bg-background opacity-80">
        <div className="container mx-auto h-full">
            <div className="flex flex-row justify-between items-center h-full">
                <div className="flex flex-row items-center">
                    <Link className="text-text font-bold text-base" href={`/`}>
                        <img alt="Logo" src={"/images/Aeonian-full-logo.webp"} width={250} height={80} className="my-4 scale-75"  />
                    </Link>
                </div>
                <div className="flex flex-row items-center">
                    <Link className="text-text font-normal text-base ml-10" href={nav.hotel.url}>{nav.hotel.name}</Link>
                    <Link className="text-text font-normal text-base ml-10" href={nav.room.url}>{nav.room.name}</Link>
                    <Link className="text-text font-normal text-base ml-10" href={nav.location.url}>{nav.location.name}</Link>
                    <Link className="text-text font-normal text-base ml-10" href={nav.galery.url}>{nav.galery.name}</Link>
                    <Link className="text-text font-normal text-base ml-10" href={nav.contact.url}> {nav.contact.name}</Link>
                </div>
                <div className="flex flex-row items-right text-right">
                    <Button button={button} />
                </div>
            </div>
        </div>
    </nav>
    )
}

export default DesktopNav