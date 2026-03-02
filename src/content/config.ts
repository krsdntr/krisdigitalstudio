import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.union([z.string(), z.date()]).optional(),
        category: z.string().optional(),
        tags: z.array(z.string()).optional(),
        excerpt: z.string().optional(),
        featured: z.boolean().optional(),
        cover: image().optional(),
    }),
});

const projects = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.union([z.string(), z.date()]).optional(),
        industry: z.string().optional(),
        techStack: z.array(z.string()).optional(),
        liveUrl: z.string().optional(),
        description: z.string().optional(),
        cover: image().optional(),
    }),
});

const products = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        price: z.number().optional(),
        discountPrice: z.number().optional(),
        productType: z.string().optional(),
        description: z.string().optional(),
        features: z.array(z.string()).optional(),
        checkoutUrl: z.string().optional(),
        isFreebie: z.boolean().optional(),
        cover: image().optional(),
    }),
});

const blocks = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        name: z.string().optional(),
        componentName: z.string().optional(),
        orderId: z.number().optional(),
        title: z.string().optional(),
        subtitle: z.string().optional(),
        media: z.union([z.string(), image()]).optional(),
        ctaText: z.string().optional(),
        ctaLink: z.string().optional(),
        secondaryCtaText: z.string().optional(),
        secondaryCtaLink: z.string().optional(),
        checklists: z.string().optional(),
    }),
});

const settings = defineCollection({
    type: 'data',
    schema: z.object({
        properties: z.array(z.object({
            key: z.string(),
            value: z.string(),
            type: z.string(),
        })).optional(),
    })
});

export const collections = {
    blog,
    projects,
    products,
    blocks,
    settings,
};
