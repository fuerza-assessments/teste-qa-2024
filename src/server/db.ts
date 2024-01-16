import { PrismaClient } from '@prisma/client'

import { env } from '~/env.js'

const prismaClientSingleton = () => {
	return new PrismaClient()
}

const globalForPrisma = globalThis as unknown as {
	prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

export const db = globalForPrisma.prisma ?? prismaClientSingleton()

if (env.NODE_ENV !== 'production') {
	globalForPrisma.prisma = db
}
