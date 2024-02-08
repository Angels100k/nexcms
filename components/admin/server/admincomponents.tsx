import { PrismaClient } from '@prisma/client'
import Link from 'next/link'

const prisma = new PrismaClient();


const AdminComponents = async () => {
    const components = await prisma.components.findMany()
    prisma.$disconnect()
    return (
        <div>
            {components.map((item) => (
                <div key={item.ID}>
                    <Link href={`/admin/settings/components/${item.ID}`}>{item.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default AdminComponents