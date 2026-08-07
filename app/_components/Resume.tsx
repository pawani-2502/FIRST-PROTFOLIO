'use client';

import SectionTitle from '@/components/SectionTitle';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Download, ExternalLink } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Resume = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.resume-fade', {
                y: 40,
                opacity: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="pb-section" id="resume" ref={containerRef}>
            <div className="container">
                <SectionTitle title="Resume" />

                <div className="resume-fade mt-10 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
                    <div className="border border-border rounded-xl p-6 bg-background-light/40">
                        <h3 className="text-2xl font-anton mb-3">Pawani Sharma</h3>
                        <p className="text-muted-foreground mb-6">
                            B.Tech CS @ SRM University · Microsoft Azure certified ·
                            Full-stack developer seeking internships.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href={GENERAL_INFO.resumeUrl}
                                download
                                className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:brightness-110"
                            >
                                <Download size={16} />
                                Download PDF
                            </a>
                            <a
                                href={GENERAL_INFO.resumeUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm hover:border-primary/50"
                            >
                                <ExternalLink size={16} />
                                Open in new tab
                            </a>
                        </div>
                    </div>

                    <div className="resume-fade border border-border rounded-xl overflow-hidden bg-background-light/20 h-[70vh] min-h-[480px]">
                        <iframe
                            src={`${GENERAL_INFO.resumeUrl}#toolbar=0&navpanes=0`}
                            title="Pawani Sharma Resume Preview"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
