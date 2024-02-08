import { PrismaClient } from '@prisma/client'
import ComponentBuilder from '@/components/admin/server/componentbuilder'

interface PageProps {
    params: { id: string }
}


const prisma = new PrismaClient()

const Page = async ({ params: { id } }: PageProps) => {
    const componenet = await prisma.components.findFirst({
        where: { ID: parseInt(id) }
    })
    const pageData = await prisma.$queryRaw`SELECT component_field.ID, component_field.order, field.name as name, field_type.name as "type" FROM component_field
    left join field ON component_field.field_ID = field.ID
    left join field_type ON field.type = field_type.ID
    WHERE component_id = ${id}`

    console.log(componenet)
    return (
        <div>
            <h1 className='text-3xl'>{componenet?.name}</h1>
            <ComponentBuilder pageData={pageData} />
        </div>
    )
}

export default Page