import type { MetadataRoute } from 'next';
import { GENERAL_INFO } from '@/lib/data';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${GENERAL_INFO.siteUrl}/sitemap.xml`,
    };
}
