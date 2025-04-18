import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isScreenWide, setIsScreenWide] = useState<boolean>(window.screen.width > 640);

    const line1 = useRef<HTMLDivElement>(null);
    const line2 = useRef<HTMLDivElement>(null);
    const line3 = useRef<HTMLDivElement>(null);
    const bm = useRef<HTMLDivElement>(null);

    const header = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.style.overflowY = 'visible'; // when switching pages using burgermenu, the scroll doesn't get reset so this fixes that

        const handleResize = () => {
            setIsScreenWide(window.screen.width > 640);
        };

        const handleScroll = () => {
            if (header.current) {
                if (window.scrollY > 0) {
                    header.current.classList.remove('h-32');
                    header.current.classList.add('h-24');
                } else {
                    header.current.classList.remove('h-24');
                    header.current.classList.add('h-32');
                };
            };
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll, true); // setting capturing phase to true forces this to work

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll, true);
        };
    }, []);


    const [isBurgermenuVisible, setIsBurgermenuVisible] = useState(false);

    const handleBurgermenu = () => {
        if (line1.current && line2.current && line3.current && bm.current) {
            if (isBurgermenuVisible) {
                document.body.style.overflow = 'visible'; // resume scrolling

                line1.current.parentElement?.setAttribute('aria-label', 'open burgermenu');

                line1.current.style.transform = 'translateY(0) rotate(0)';
                line3.current.style.transform = 'translateY(0) rotate(0)';
                line2.current.style.transform = 'scale(1)';

                bm.current.style.display = 'none';

                setIsBurgermenuVisible(false);
            } else {
                document.body.style.overflow = 'hidden'; // stops user from scrolling

                line1.current.parentElement?.setAttribute('aria-label', 'close burgermenu');

                line1.current.style.transform = 'translateY(0.75rem) rotate(45deg)';
                line3.current.style.transform = 'translateY(-0.75rem) rotate(-45deg)';
                line2.current.style.transform = 'scale(0)';

                bm.current.style.display = 'flex';

                setIsBurgermenuVisible(true);
            };
        };
    };

    return (
        <header
            ref={header}
            className="h-32 w-full fixed top-0 z-20 flex flex-row items-center justify-between px-4 border-b-2 border-b-violetGlow/20 bg-midnightSteel/60 backdrop-blur-lg text-white select-none smooth-change">
                <Link
                    className="w-fit mt-0 text-2xl md:text-3xl text-center smooth-change"
                    to="/">
                    <h1>Dylan's Portfolio</h1>
                </Link>

                {isScreenWide ? ( // renders a navbar for devices wider that 640px and a burger menu for smaller devices
                    <nav className="w-fit flex flex-row gap-5 smooth-change">
                        <a
                            className="primary-link smooth-change"
                            href="#home">
                            Home
                        </a>
                        <a
                            className="primary-link smooth-change"
                            href="#about">
                            About
                        </a>
                        <a
                            className="primary-link smooth-change"
                            href="#projects">
                            Projects
                        </a>
                    </nav>
                ) : (
                    <div>
                        <button
                            className="group flex flex-col gap-2 items-center z-20"
                            aria-label="open burgermenu"
                            onClick={handleBurgermenu}>
                            <div ref={line1} className="h-1 w-8 rounded-full bg-black dark:bg-white z-20 transition-all duration-300" aria-hidden="true"></div>
                            <div ref={line2} className="h-1 w-8 rounded-full bg-black dark:bg-white z-20 transition-all duration-300" aria-hidden="true"></div>
                            <div ref={line3} className="h-1 w-8 rounded-full bg-black dark:bg-white z-20 transition-all duration-300" aria-hidden="true"></div>
                        </button>
                        <div
                            className="h-screen w-5/6 absolute top-0 right-0 hidden flex-col gap-10 pl-10 pt-28 bg-matteInk text-xl sm:text-2xl"
                            ref={bm}>
                            <a
                                className="w-fit primary-link smooth-change"
                                href="#home">
                                Home
                            </a>
                            <a
                                className="w-fit primary-link smooth-change"
                                href="#about">
                                About
                            </a>
                            <a
                                className="w-fit primary-link smooth-change"
                                href="#projects">
                                Projects
                            </a>
                        </div>
                    </div>
                )}
        </header>
    );
};