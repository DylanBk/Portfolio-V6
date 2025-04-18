import { useEffect, useState, useRef } from "react";

import html5 from '../../assets/images/html5.svg';
import css3 from '../../assets/images/css3.svg';
import tailwindcss from '../../assets/images/tailwindcss.svg';
import react from '../../assets/images/react.svg';
import typescript from '../../assets/images/typescript.svg';
import javascript from '../../assets/images/javascript.svg';
import nodedotjs from '../../assets/images/nodedotjs.svg';
import jinja from '../../assets/images/jinja.svg';
import python from '../../assets/images/python.svg';
import sqlite from '../../assets/images/sqlite.svg';
import sqlAlchemy from '../../assets/images/sqlalchemy.webp';
import express from '../../assets/images/express.svg';
import flask from '../../assets/images/flask.svg';

export default function Technologies() {
    type Logo = {
        src: string,
        alt: string,
        description: string,
    };

    const [logos, setLogos] = useState<Logo[]>([]);
    const tooltipRef = useRef<(HTMLSpanElement | null)[]>([]);

    const logoArr: Logo[] = [
        {
            src: html5,
            alt: "HTML5",
            description: "HTML is the basic building blocks for creating web pages.",
        },
        {
            src: css3,
            alt: "CSS3",
            description: "CSS is used to style web pages by adding colors, fonts, and layouts.",
        },
        {
            src: tailwindcss,
            alt: "Tailwind CSS",
            description: "Tailwind CSS is a utility-first CSS framework that helps designers quickly style web pages.",
        },
        {
            src: react,
            alt: "React",
            description: "React is a JavaScript library for building user interfaces.",
        },
        {
            src: typescript,
            alt: "TypeScript",
            description: "TypeScript is a superset of JavaScript that allows static typing",
        },
        {
            src: javascript,
            alt: "JavaScript",
            description: "JavaScript is a programming language that makes websites interactive.",
        },
        {
            src: nodedotjs,
            alt: "Node.js",
            description: "Node.js is a runtime environment that allows JavaScript to run on the server.",
        },
        {
            src: jinja,
            alt: "Jinja",
            description: "Jinja is a templating engine for Python.",
        },
        {
            src: python,
            alt: "Python",
            description: "Python is a popular programming language used for building all sorts of software.",
        },
        {
            src: sqlite,
            alt: "SQLite",
            description: "SQLite is a simple database used to store and retrieve data.",
        },
        {
            src: sqlAlchemy,
            alt: "SQLAlchemy",
            description: "SQLAlchemy is a Python tool used to interact with databases.",
        },
        {
            src: express,
            alt: "Express.js",
            description: "Express.js is a web application framework for Node.js.",
        },
        {
            src: flask,
            alt: "Flask",
            description: "Flask is a web framework for Python.",
        },
    ];

        useEffect(() => {
            setLogos(logoArr);
        }, [])

    useEffect(() => {
        document.addEventListener('click', resetTooltipZIndex);

        return () => {
            document.removeEventListener('click', resetTooltipZIndex);
        };
    }, []);

    const handleTooltip = (i: number) => {
        // Reset z-index for all tooltips
        tooltipRef.current.forEach(tooltip => {
            if (tooltip && tooltip.parentElement) {
                tooltip.parentElement.style.zIndex = '0';
            }
        });

        const tooltip = tooltipRef.current[i];

        if (tooltip) {
            const rect = tooltip.getBoundingClientRect();
            const vw = window.innerWidth;

            if (tooltip.parentElement) {
                tooltip.parentElement.style.zIndex = '100'; // forces tooltip to remain at front while not focused
            };

            if (rect.right > vw) {
                tooltip.style.left = '-4rem';
            } else if (rect.left < 0) {
                tooltip.style.right = '-4rem';
            };
        };
    };

    const resetTooltipZIndex = (e: MouseEvent) => {
        if (!(e.target as HTMLElement).closest('.tech-logo')) {
            tooltipRef.current.forEach(tooltip => {
                if (tooltip && tooltip.parentElement) {
                    tooltip.parentElement.style.zIndex = '0';
                }
            });
        }
    };

    return (
        <>
            {logos.length > 1 ? (
            <div className="md:max-w-2/5 relative">                
                <div className="flex flex-wrap gap-6 sm:gap-12 xl:gap-20 !gap-y-8 justify-center md:justify-start justify-items-center">
                    {logos.map((logo:  Logo, i: number) => (
                        <div
                            key={i}
                            className="!m-0 sm:m-8 gradient-border hover:z-50 focus:z-50 active:z-50"
                            onClick={() => handleTooltip(i)}>
                            <img src={logo.src} alt={logo.alt} className="h-12 sm:h-16 w-12 sm:w-16 tech-logo" />
                            <span
                                ref={el => { tooltipRef.current[i] = el; }}
                                className=" backdrop-blur-md tech-tooltip">{logo.description}</span>
                        </div>
                    ))}
                </div>
            </div>
            ) : (
                <></>
            )}
        </>
    );
};