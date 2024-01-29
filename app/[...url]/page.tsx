import { PrismaClient } from '@prisma/client'

import Pagebuilder from '@/components/page/pagebuilder'
interface PageProps {
    params: {
        url: string[]
    }
}
const prisma = new PrismaClient()

const webpage = async ({ params: { url } }: PageProps) => {
    const pageurl = "/" + url.join('/')

    const [pageData, theme] = await Promise.all([
        prisma.page.findFirst({
            where: { url: pageurl },
        }),
        prisma.theme.findFirst({
            where: { active: 1 },
        }),
    ]);
    const jsonData = pageData?.pageData ? JSON.parse(pageData.pageData.toString()) : {data:["empty"]};

    // console.log("jsonData", jsonData)
    return (
        <div>
            <Pagebuilder jsonData={jsonData} themeName={theme?.themeName} url={url} />
        </div>
    )
}

export default webpage