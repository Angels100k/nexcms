import { PrismaClient } from '@prisma/client'
import Sidebar from '@/components/admin/global/sidebar'

const Global = async () => {
    const prisma = new PrismaClient()

    const [globals] = await Promise.all([
        prisma.global.findMany()
    ]);
    prisma.$disconnect()

    return (
        <section className='w-full'>
            <h1>Globals</h1>
            <div className='w-1/5'>
                <Sidebar globals={globals}/>
            </div>
            
        </section>
    )
}
export default Global