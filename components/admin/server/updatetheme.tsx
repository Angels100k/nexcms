"use server"

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const Update = async (ID: number) => {
    await prisma.theme.updateMany({
        data: { active: 0 },
      });
      // Set the specified theme to active
      await prisma.theme.update({
        where: { ID: ID },
        data: { active: 1 },
      });
}