import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const getFields = async (themeID:number) => {
    return await prisma.$queryRaw`SELECT field_groups.ID AS groupID, field.name FROM field_groups 
    INNER JOIN field ON field_groups.ID = field.group_ID
    WHERE field_groups.theme_ID = ${themeID}`
}