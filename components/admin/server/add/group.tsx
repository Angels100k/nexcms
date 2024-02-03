"use server"

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const Insert = async (name: string, themeID: number) => {
    const group = await prisma.field_groups.create({
        data: {
          name: name,
          theme_ID: themeID,
          order: 0
        },
      })
    return group
}