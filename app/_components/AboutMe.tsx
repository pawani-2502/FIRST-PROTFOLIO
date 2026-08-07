'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    I believe in building secure, scalable, and user-centric software
                    that solves real problems for real people.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9 gap-10 items-start">
                    <div className="md:col-span-5 space-y-6">
                        <p className="text-5xl slide-up-and-fade">Hi, I&apos;m Pawani.</p>
                        <div className="slide-up-and-fade">
                            <Image
                                src="/profile.png"
                                alt="Pawani Sharma"
                                width={280}
                                height={280}
                                className="rounded-2xl border border-border bg-background-light p-4"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[520px]">
                            <p className="slide-up-and-fade">
                                I&apos;m a third-semester B.Tech Computer Science student at
                                SRM Institute of Science and Technology (CGPA: 9.42/10.00),
                                passionate about full-stack development and AI applications.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                I specialize in Java, Python, React, and Node.js — building
                                end-to-end applications with REST APIs, real-time features,
                                and database integration. Microsoft Certified in Azure AI
                                and Fabric Data Engineering.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Based in Chennai, India. Open to software development
                                internships and collaborative projects. Languages: English
                                (Professional), Hindi (Native), Japanese (Beginner).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
