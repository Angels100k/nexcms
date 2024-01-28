"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import Link from 'next/link'
interface PageProps {
    allUsers: any
}
const PageComponent = ({ allUsers }: PageProps) => {
    const [search, setSearch] = useState('');
return (
    <><div className='w-full flex'>
        <h1 className='mr-5 text-3xl'>Pages</h1>
        {/* search input */}
        <div className="flex items-center w-1/2 bg-white border rounded-lg overflow-hidden">
            <input 
                type="text" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                className="bg-transparent w-full px-4 py-2 focus-visible:border-none border-none" 
                autoComplete="off" 
                placeholder="Search" 
                aria-label="Search" 
            />
            <FontAwesomeIcon icon={faGlobe} className="text-gray-400 mx-3" />
        </div>

        <div className='ml-auto'>
            <Link href='/admin/pages/new'>New Page</Link>
        </div>
    </div>
    <ul className='w-full'>
        {allUsers.map((page:any) => {
            if(page.title.toLowerCase().includes(search.toLowerCase()))
            return (
                <li key={page.ID} className='flex bg-gray-100 my-2 p-4 w-full text-black'>
                    <Link href={`/admin/pages/${page.ID}`}>{page.title}</Link>
                    <a target='_blank' href={page.url}> <FontAwesomeIcon className='ml-2' icon={faGlobe} height={20} /></a>
                </li>
            )
        })}
    </ul>
    </>
)
}

export default PageComponent