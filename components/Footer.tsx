import { GENERAL_INFO } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="space-y-2">
                    <p className="text-muted-foreground">
                        Portfolio content by{' '}
                        <a
                            href="https://github.com/pawani-2502"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white hover:underline"
                        >
                            Pawani Sharma
                        </a>
                    </p>
                    <a
                        href="https://github.com/Tajmirul/portfolio-2.0"
                        target="_blank"
                        rel="noreferrer"
                        className="leading-none text-muted-foreground hover:underline hover:text-white text-sm"
                    >
                        Design &amp; built by Tajmirul Islam · Revised by Pawani Sharma
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
