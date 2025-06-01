import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        educations: defineCollection({
            type: 'data',
            source: 'educations/**.json',
            schema: z.object({
                institution: z.string(),
                degree: z.string(),
                years: z.string(),
            })
        }),
        experiences: defineCollection({
            type: 'data',
            source: 'experiences/**.json',
            schema: z.object({
                position: z.string(),
                company: z.string(),
                period: z.string(),
            })
        }),
        projects: defineCollection({
            type: 'data',
            source: 'projects/**.json',
            schema: z.object({
                name: z.string(),
                role: z.string(),
                period: z.string(),
                description: z.string(),
                url: z.string(),
            })
        })
    }
})
