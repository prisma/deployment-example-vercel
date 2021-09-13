import { PrismaClient } from '@prisma/client'

// Avoid instantiating too many instances of Prisma in development
// https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices#problem
let prisma

const opts = {
  log: ['error', 'info', 'query', 'warn']
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient(opts)
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient(opts)
  }
  prisma = global.prisma
}

export default prisma
