import Technologies from "./Technologies.tsx";

export default function AbilitiesSection() {
    return (
        <div
            id="abilities-sect"
            className="max-w-5/6 md:max-w-full z-10 flex flex-col md:flex-row gap-8 md:gap-16 pt-0 sm:pt-44 mx-auto md:mx-0 md:ml-7 mt-24 items-center justify-around lg:justify-center text-white">
            <section className="w-fit md:w-5/12 xl:w-1/2">
                <h2 className="w-44 sm:w-auto mx-auto sm:mx-0 text-2xl sm:text-4xl text-center md:text-left text-nowrap gradient-underline">What can I do?</h2>
                
                <p className="xl:w-5/6 mt-3 text-sm sm:text-base text-pretty">
                    As a web developer and designer, I create visually appealing websites that are dynamic and responsive. I focus on delivering seamless user experiences for elegant, efficient websites.
                    <br /><br />
                    For frontend development, I use HTML, CSS, and JavaScript, often combining React and TailwindCSS for rapid development and a dynamic experience.
                    <br /><br />
                    On the backend, I primarily use Python. Utilising Flask and SQLite or SQLAlchemy to produce applications with a secure database. I can also use Express for JavaScript-based backends.
                </p>
            </section>
            <Technologies />
        </div>
    );
};