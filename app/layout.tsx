import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';
import { SITE_URL } from '@/lib/data';

const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: 'Portfolio - Pawani Sharma',
    description:
        'Personal portfolio of Pawani Sharma — Full-stack developer, Microsoft Azure certified, B.Tech CS @ SRM University.',
    openGraph: {
        title: 'Pawani Sharma | Portfolio',
        description:
            'Full-stack developer, Microsoft Azure certified, B.Tech CS @ SRM University.',
        url: SITE_URL,
        siteName: 'Pawani Sharma',
        images: [{ url: '/profile.png', width: 512, height: 512, alt: 'Pawani Sharma' }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Pawani Sharma | Portfolio',
        description:
            'Full-stack developer, Microsoft Azure certified, B.Tech CS @ SRM University.',
        images: ['/profile.png'],
    },
    alternates: {
        canonical: SITE_URL,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
            >
                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.4,
                    }}
                >
                    <Navbar />
                    <main>{children}</main>
                    <Footer />

                    <CustomCursor />
                    <Preloader />
                    <ScrollProgressIndicator />
                    <ParticleBackground />
                    <StickyEmail />
                </ReactLenis>
            </body>
        </html>
    );
}
