import email from '../../assets/icons/email.svg';
import github from '../../assets/icons/github.svg';
import linkedIn from '../../assets/icons/linkedin.svg';

export default function Footer() {
    return (
        <footer className="min-h-44 w-full relative flex flex-col sm:flex-row gap-6 sm:gap-0 sm:justify-around px-2 mt-28 bg-midnightSteel text-white">
            <section className="flex flex-col gap-1">
                <h3 className="mb-1 text-lg text-gray-300">Pages</h3>

                <a
                    className="w-fit secondary-link"
                    href="#home">
                    Home Page
                </a>
                <a
                    className="w-fit secondary-link"
                    href="#about">
                    About Me
                </a>
                <a
                    className="w-fit secondary-link"
                    href="#projects">
                    My Projects
                </a>
            </section>

            <section className="flex flex-col gap-1">
                <h3 className="mb-1 text-lg text-gray-300">Resources</h3>

                <a
                    className="w-fit secondary-link"
                    href='/pdfs/CV-Dylan_Bullock.pdf'
                    target="_blank"
                    download={true}
                    aria-label="this will download as a PDF">
                    Download my CV
                </a>
                <a
                    className="w-fit secondary-link"
                    href="mailto:dev@dylanbullock.co.uk"
                    target='_blank'>
                    Send me an e-mail
                </a>
            </section>

            <section className="relative flex flex-col gap-1">
                <h3 className="mb-1 text-lg sm:text-center text-gray-300">Contact Me</h3>

                <div className="flex flex-row gap-2 items-center">
                    <a
                        className="sm:p-2 icon-link"
                        href="mailto:dev@dylanbullock.co.uk"
                        rel="noreferrer"
                        target="_blank"
                        aria-label="email me">
                        <img
                            className="w-7 select-none"
                            src={email}
                            aria-hidden="true"
                        />
                    </a>

                    <a
                        className="sm:p-2 icon-link"
                        href="https://github.com/DylanBk"
                        rel="noreferrer"
                        target="_blank"
                        aria-label="my github">
                        <img
                            className="w-7 select-none"
                            src={github}
                            aria-hidden="true"
                        />
                    </a>

                    <a
                        className="sm:p-2 icon-link"
                        href="https://www.linkedin.com/in/dylanbkdev/"
                        rel="noreferrer"
                        target="_blank"
                        aria-label="my linkedin">
                        <img
                            className="w-7 p-0.5 select-none"
                            src={linkedIn}
                            aria-hidden="true"
                        />
                    </a>
                </div>
            </section>
            <small className="sm:absolute sm:bottom-2 mx-auto dark:text-gray-300">&copy; Copyright 2025, Dylan Bullock</small>
        </footer>
    );
};