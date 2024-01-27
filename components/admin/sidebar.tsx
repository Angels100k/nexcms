import Link from 'next/link'
import { SidebarProps } from  '@/interfaces/component/item'

const Sidebar = () => {
    const { navs } = {
        navs: [
            {
                text: 'Dashboard',
                url: '/admin/dashboard'
            },
            {
                text: 'Pages',
                url: '/admin/pages'
            },
            {
                text: 'Globals',
                url: '/admin/globals'
            },
            {
                text: 'Settings',
                url: '/admin/settings'
            }
        ]
    } as SidebarProps
    return (
        <nav className="w-1/6 p-8 h-screen bg-gray-200 text-black">
            <h1>Sidebar</h1>
            <ul>
                {navs.map((nav) => {
                    return (
                        <li key={nav.url}>
                            <Link href={nav.url}>{nav.text}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Sidebar