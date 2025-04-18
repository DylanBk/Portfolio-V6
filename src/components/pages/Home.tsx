import { useEffect, useRef } from "react";

import AbilitiesSection from "../layout/Abilities.tsx";

import typingEffect from "../../utils/slowType.ts";

export default function Home() {

    const effectRan = useRef(false);
    const typingRef = useRef(null);
    const downArrowRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!effectRan.current && typingRef.current) {
            typingEffect(typingRef.current);
            effectRan.current = true;
        };

        const handleScroll = () => {
            if(downArrowRef.current) {
                downArrowRef.current.style.opacity = window.scrollY > 50 ? '0' : '1';
            };
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = () => {
        const el = document.querySelector('#abilities-sect');

        if (el) {
            el.scrollIntoView({block: 'start'});
        };
    };

    return (
        <div
            id='home'
            className="flex flex-col -mt-20">
            <div className="h-full w-fit z-10 ml-7 mt-56 sm:mt-56 md:mt-56 xl:mt-64 text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white select-none smooth-change">
                <h2 className="text-xl">Hey there, my name's <span className="text-electricBlue">Dylan.</span></h2>
                <h2>I'm a <span
                    id="slow-type-section"
                    className="bg-gradient-to-r from-electricBlue to-violetGlow bg-clip-text text-transparent"
                    ref={typingRef} />
                </h2>
                <h2>based in the <span className="text-electricBlue font-bold">United Kingdom.</span></h2>
            </div>

            <div className="w-fit flex flex-row gap-8 mx-auto sm:mx-0 sm:pl-7 mt-28 text-nowrap text-white">
                <a
                    className="px-6 sm:px-8 py-4 primary-cta"
                    href="mailto:dylanbullock.dev@gmail.com"
                    rel="noreferrer"
                    target="_blank">
                    <p>Let's Talk</p>
                    <svg className="w-7 fill-white" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
                    </svg>
                </a>

                <a
                    className="px-6 sm:px-8 py-4 secondary-cta"
                    href="#projects">
                    <p>View Projects</p>
                </a>
            </div>

            <button
                ref={downArrowRef}
                className="w-20 relative mx-auto mt-28 md:mt-12 bg-radial from-violetGlow from-0% via-violetGlow/30  via-30% to-transparent to-70% hover:scale-110 transition-all duration-500 cursor-pointer animate-slow-bounce"
                aria-label="Scroll down"
                onClick={scrollToSection}>
                <svg className="fill-white" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
                </svg>
            </button>

            <AbilitiesSection />
        </div>
    );
};
