import Link from 'next/link'
import { SidebarProps } from  '@/interfaces/component/item'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons

library.add(fas);

const Sidebar = () => {
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
                url: '/admin/settings'
            }
        ]
    } as SidebarProps
    return (
        <nav className="w-1/6 p-8 h-screen bg-primarybg text-sidetext">
            <h1 className='pl-4 mb-4'>Sidebar</h1>
            <ul>
                {navs.map((nav) => {
                    return (
                        <li key={nav.url}>
                            <Link className='py-2  hover:bg-gray-800 rounded-md flex' href={nav.url}>{nav.icon ? <FontAwesomeIcon height={20} className='mx-2' icon={['fas', nav.icon as any]} /> : ''}{nav.text}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Sidebar