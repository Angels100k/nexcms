import { PrismaClient } from '@prisma/client'

import Pagebuilder from '@/components/page/pagebuilder'
interface PageProps {
    params: {
        url: string[]
    }
}
const prisma = new PrismaClient()

const webpage = async ({ params: { url } }: PageProps) => {
    const pageurl = "/"

    const [pageData, theme] = await Promise.all([
        prisma.page.findFirst({
            where: { url: pageurl },
        }),
        prisma.theme.findFirst({
            where: { active: 1 },
        }),
    ]);
    prisma.$disconnect()
    const jsonData = pageData?.pageData ? JSON.parse(pageData.pageData.toString()) : {data:["empty"]};

    return (
        <div>
            <Pagebuilder jsonData={jsonData} themeName={theme?.themeName} />
        </div>
    )
}

export default webpage