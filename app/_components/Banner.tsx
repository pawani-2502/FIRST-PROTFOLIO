'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">FULL-STACK</span>
                        <br /> <span className="ml-4">DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">Pawani</span>
                        . A B.Tech CS student at SRM University building
                        high-performance, scalable full-stack and AI-powered web
                        applications.
                    </p>
                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(GENERAL_INFO.emailSubject)}`}
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        Let&apos;s Talk
                    </Button>

                    <div className="flex items-center gap-2 mt-3">
                        <span className="size-3 rounded-full bg-primary"></span>
                        <span className="text-sm text-muted-foreground">
                            Available for software development internships
                        </span>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-8">
                    <div className="slide-up-and-fade hidden md:block">
                        <Image
                            src="/profile.png"
                            alt="Pawani Sharma"
                            width={220}
                            height={220}
                            className="rounded-2xl border border-border bg-background-light p-4"
                            priority
                        />
                    </div>
                    <div className="flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                        <div className="slide-up-and-fade">
                            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                                9.42
                            </h5>
                            <p className="text-muted-foreground">CGPA at SRM</p>
                        </div>
                        <div className="slide-up-and-fade">
                            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                                7+
                            </h5>
                            <p className="text-muted-foreground">Completed Projects</p>
                        </div>
                        <div className="slide-up-and-fade">
                            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                                2
                            </h5>
                            <p className="text-muted-foreground">Microsoft Certifications</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
