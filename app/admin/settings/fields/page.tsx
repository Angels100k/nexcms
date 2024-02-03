import { PrismaClient } from '@prisma/client'
import { getFields } from '@/components/admin/server/get/themefields'
import {FieldData} from '@/components/admin/client/fieldgroup/fielddata'
const prisma = new PrismaClient();
const Fields = async () => {
    // get actie theme
    const theme = await prisma.theme.findMany({
        where: {
            active: 1
        }
    })
    const [groups] = await Promise.all([
        prisma.field_groups.findMany({
            where: {
                theme_ID: theme[0].ID
            }
        })
    ])

    const fields:any = await getFields(theme[0].ID)
    
    return (
        <div className="flex flex-wrap">
            <div className="w-full flex mt-3 justify-between">
                <h1 className="text-3xl ml-5">Fields</h1>
                <a className="px-4 py-2 bg-slate-900 text-white mr-5 mb-3 rounded-md" href="/admin/settings/fields/new">New Fields</a>
            </div>
            <FieldData groups={groups} fields={fields} themeID={theme[0].ID} />
        </div>
    )
}

export default Fields