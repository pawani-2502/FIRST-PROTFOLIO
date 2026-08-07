import type { MetadataRoute } from 'next';
import { GENERAL_INFO, PROJECTS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const base = GENERAL_INFO.siteUrl;

    return [
        {
            url: base,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...PROJECTS.map((project) => ({
            url: `${base}/projects/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
    ];
}
