import { PrismaClient } from '@prisma/client'
import Builder from '@/components/admin/builder'

interface PageProps {
    params: {
        pageID: string
    }
}

const prisma = new PrismaClient()

const Page = async ({ params: { pageID } }: PageProps) => {
  const allUsers = await prisma.page.findFirst({
    where: { ID: parseInt(pageID) },
  })
  prisma.$disconnect()

    return (
        <section className='flex flex-wrap'>
            <div className='w-1/2'>
                <h1>{allUsers?.title}</h1>
            </div>
            <div className='w-1/2'>
                <h2>{allUsers?.url}</h2>
            </div>
            <div className='w-full mt-4'>
                <Builder data={allUsers?.pageData} />
            </div>
        </section>
    )
}

export default Page