'use client'

// react
import React from 'react';

// nextjs
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// interfaces
import { SidebarProps } from  '@/interfaces/component/item'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons

library.add(fas);

export const Sidebar = () => {
    const pathname = usePathname()
    const { navs } = {
        navs: [
            {
                icon: 'gauge',
                text: 'Dashboard',
                url: '/admin/dashboard'
            },
            {
                icon: 'table-columns',
                text: 'Pages',
                url: '/admin/pages'
            },
            {
                icon: 'globe',
                text: 'Globals',
                url: '/admin/globals'
            },
            {
                icon: 'gear',
                text: 'Settings',
                url: '/admin/settings',
                sub: [
                    {
                        text: 'General',
                        url: '/admin/settings/general'
                    }, {
                        text: 'Theme',
                        url: '/admin/settings/theme'
                    }, {
                        text: 'Users',
                        url: '/admin/settings/users'
                    }, {
                        text: 'Pages',
                        url: '/admin/settings/pages'
                    }, {
                        text: 'Globals',
                        url: '/admin/settings/globals'
                    }
                ]
            }
        ]
    } as SidebarProps
    console.log(pathname)
    return (
        <nav className="w-1/6 p-8 h-screen bg-admin-primarybg text-admin-sidetext">
            <h1 className='pl-4 mb-4'>Sidebar</h1>
            <ul>
                {navs.map((nav) => {
                    return (
                        <li key={nav.url}>
                            <Link className={'py-2  hover:bg-gray-800 rounded-md flex ' + (pathname.startsWith(nav.url) ? ' bg-gray-700' : '')} href={nav.url}>{nav.icon ? <FontAwesomeIcon height={20} className='mx-2' icon={['fas', nav.icon as any]} /> : ''}{nav.text}</Link>
                            {nav.sub && pathname.startsWith(nav.url) && (
                                <ul>
                                    {nav.sub.map((sub) => (
                                        <li key={sub.url} className='ml-8'>
                                            <Link className={'py-2 pl-4  hover:bg-gray-800 rounded-md flex ' + (pathname.startsWith(sub.url) ? ' bg-gray-700' : '')} href={sub.url}>{sub.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}