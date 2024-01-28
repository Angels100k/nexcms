import { PrismaClient } from '@prisma/client'
import PageComponent from '@/components/admin/PageComponent'

const prisma = new PrismaClient()


const Page  = async () => {
    const allUsers = await prisma.page.findMany() 
    return (
        <>
        <section>
            <div className="flex flex-wrap">
                <PageComponent allUsers={allUsers} />
            </div>
        </section>
        </>
    )
}
export default Page