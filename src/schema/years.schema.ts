import { z } from 'zod';

export const YearSchema = z.object({
  id: z.number(),
  year: z.string(),
});

export const YearsSchema = z.array(YearSchema);

export const YearsResponseSchema = z.object({
  years: YearsSchema,
});

export const YearResponseSchema = z.object({
  year: YearSchema,
});
