import Sidebar from '@/components/admin/global/sidebar'
import { PrismaClient } from '@prisma/client'


const globalPage = async ({ params: { global } }: { params: { global: string } }) => {
    const prisma = new PrismaClient()

    const [globals] = await Promise.all([
        prisma.global.findMany()
    ]);

    return (
        <section className='flex'>
            <div className='w-1/5'>
                <Sidebar globals={globals}/>
            </div>
            <div className='w-4/5'>
                <h1>{global}</h1>
            </div>
        </section>
        
    )
}
export default globalPage