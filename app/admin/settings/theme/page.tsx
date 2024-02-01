
import { PrismaClient } from '@prisma/client'
import ThemeEditor from '@/components/admin/themeEditor'

const prisma = new PrismaClient()

const Theme = async () => {
    const [theme] = await Promise.all([
        prisma.theme.findMany(),
    ]);
    prisma.$disconnect()

    return (
        <ThemeEditor theme={theme} />
    )
}

export default Theme