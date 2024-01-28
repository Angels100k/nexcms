import { PrismaClient } from '@prisma/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'

const prisma = new PrismaClient()


const Page  = async () => {
  const allUsers = await prisma.page.findMany() 
    return (
        <>
        <section>
            <h1>Pages</h1>
            <div className="flex">
                <ul className='w-full'>
                    {allUsers.map((page) => {
                        return (
                        <li key={page.ID} className='flex bg-gray-100 my-2 p-4 w-full text-black'>
                            <Link href={`/admin/pages/${page.ID}`}>{page.title}</Link> 
                            <a target='_blank' href={page.url}> <FontAwesomeIcon className='ml-2' icon={faGlobe} height={20} /></a>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </section>
        </>
    )
}
export default Page