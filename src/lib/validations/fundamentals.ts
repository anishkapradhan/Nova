import { z } from 'zod';
import {
  DISCIPLINE_CATEGORIES,
  RESOURCE_TYPES,
  DIFFICULTY_LEVELS,
} from '@/types/fundamentals';

export const httpsUrlSchema = z
  .string()
  .url('Must be a valid URL')
  .refine((url) => url.startsWith('https://'), {
    message: 'Resource URL must use secure HTTPS protocol',
  });

export const SubmitResourceSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, 'Title must be at least 3 characters')
    .max(255, 'Title cannot exceed 255 characters'),
  category: z.enum(DISCIPLINE_CATEGORIES, {
    errorMap: () => ({ message: 'Invalid discipline category' }),
  }),
  resourceType: z.enum(RESOURCE_TYPES, {
    errorMap: () => ({ message: 'Invalid resource type' }),
  }),
  targetUrl: httpsUrlSchema,
  difficultyLevel: z.enum(DIFFICULTY_LEVELS, {
    errorMap: () => ({ message: 'Invalid difficulty level' }),
  }),
  summary: z
    .string()
    .trim()
    .min(10, 'Summary must be at least 10 characters')
    .max(2000, 'Summary cannot exceed 2000 characters'),
  prerequisites: z.array(z.string().trim()).default([]),
  isFreeAffirmed: z.literal(true, {
    errorMap: () => ({ message: 'You must affirm that this resource is 100% free and open' }),
  }),
  contributorHandle: z.string().trim().optional(),
});

export type SubmitResourceInput = z.infer<typeof SubmitResourceSchema>;
