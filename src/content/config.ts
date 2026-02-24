import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    slug: z.string().optional(),
    category: z.string(),
    publishedAt: z.string(),
    schemas: z
      .array(z.object({ type: z.string(), jsonLd: z.record(z.unknown()) }))
      .default([]),
    chunks: z.array(z.unknown()).default([]),
  }),
});

export const collections = { blog };
