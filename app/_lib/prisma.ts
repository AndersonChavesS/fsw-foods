/* eslint-disable no-unused-vars */
import { PrismaClient } from "@prisma/client";

declare global {
  let cachedPrisma: PrismaClient | undefined;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  const globalWithPrisma = global as typeof globalThis & {
    cachedPrisma?: PrismaClient;
  };
  if (!globalWithPrisma.cachedPrisma) {
    globalWithPrisma.cachedPrisma = new PrismaClient();
  }
  prisma = globalWithPrisma.cachedPrisma;
}

export const db = prisma;
