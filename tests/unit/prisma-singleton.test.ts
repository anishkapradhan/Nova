import { describe, it, expect } from 'vitest';
import { prisma } from '@/lib/prisma';

describe('Prisma Client Singleton', () => {
  it('should export a defined prisma instance', () => {
    expect(prisma).toBeDefined();
  });

  it('should maintain a singleton reference across imports', async () => {
    const { prisma: prismaSecondImport } = await import('@/lib/prisma');
    expect(prisma).toBe(prismaSecondImport);
  });
});
