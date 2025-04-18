import bloomAcademia from '../../assets/images/bloom_academia_cover.svg';
import weatherly from '../../assets/images/weatherly.png';
import momentum from '../../assets/images/momentum.png'
import arcadiaLibrary from '../../assets/images/arcadiaLibrary.png';

import github from '../../assets/icons/github.svg';
import northeast from '../../assets/icons/northeast.svg';


export default function Projects() {
    type Project = {
        name: string,
        description: string,
        repo: string,
        site: string | null,
        cover: string,
        coverAlt: string,
        techStack: string[],
    };

    const projects: Project[] = [
        {
            name: 'Bloom Academia',
            description: 'Bloom Academia is an innovative educational website where students can independently explore and acquire new skills through self-paced courses created by their peers. Developed as part of a collaborative project with some classmates, I took on the back-end developer role, working closely with the database developer to ensure smooth integration. I also helped complete the front end, assisting in delivering a polished and user-friendly platform.',
            repo: 'https://github.com/DylanBk/bloom-academia',
            site: null,
            cover: bloomAcademia,
            coverAlt: 'A screenshot taken of a page from the website',
            techStack: ['SQLite', 'Flask', 'Jinja', 'HTML', 'CSS', 'TailwindCSS', 'JavaScript']
        },
        {
            name: 'Weatherly',
            description: 'Weatherly is a website that fetches real time weather data and provides an AI Overview of the weather forecast.\n\nIf the user does not wish to allow the website to access their location, they can optionally enter their location or any other location in the searchbar and get weather data for the entered area.',
            repo: 'https://github.com/DylanBk/weatherly',
            site: null,
            cover: weatherly,
            coverAlt: 'A screenshot of Weatherly showing basic info like temperature and wind speed with an AI overview',
            techStack: ['JavaScript', 'React', 'TailwindCSS', 'Weather API', 'Mistral AI']
        },
        {
            name: 'Momentum',
            description: 'Momentum is a productivity web app designed with the intent to allow people to track tasks they need to do and mark them as done when completed, this lets people see a visual indicator of how much stuff they have achieved and what needs to be done.',
            repo: 'https://github.com/DylanBk/Momentum',
            site: null,
            cover: momentum,
            coverAlt: 'A screenshot of some ToDos',
            techStack: ['SQLAlchemy', 'Flask', 'TypeScript', 'React', 'TailwindCSS', 'CSS']
        },
        {
            name: 'Arcadia Library',
            description: 'Arcadia Library is a web application similar to an e-commerce platform, users are able to search for books by name or ISBN and check their availability. It offers advanced features like filtering and sorting to simplify finding specific books. Administrators can manage user accounts and inventory, ensuring smooth operations and resource management.',
            repo: 'https://github.com/DylanBk/arcadia-library',
            site: null,
            cover: arcadiaLibrary,
            coverAlt: 'Some books and a lamp on a wooden desk',
            techStack: ['SQLAlchemy', 'Flask', 'JavaScript', 'React', 'TailwindCSS', 'CSS']
        }
    ];

    const Projects = () => {
        return (
            projects.map((project: Project, i: number) => {
                return (
                    <section key={i} className='w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 relative flex flex-col gap-4 p-8 rounded-[6px] mx-auto bg-midnightSteel hover:bg-oceanBlue focus:bg-oceanBlue active:bg-oceanBlue'>
                        <div className="h-full w-full absolute inset-0 -z-10 bg-midnightSteel"></div>

                        <div className='flex flex-col sm:flex-row gap-4 items-center'>
                            <img
                                className="h-full w-full sm:w-1/3 object-cover rounded-sm select-none"
                                src={project.cover}
                                alt={project.coverAlt}
                            />

                            <div className="flex flex-col">
                                <div className="flex flex-row items-center justify-between">
                                    <h3 className="text-2xl text-electricBlue">{project.name}</h3>

                                    <div className="flex flex-row gap-3 items-center">
                                        <a href={project.repo} target='_blank' aria-label="View Github repo">
                                            <img
                                                className="w-5 hover:scale-105 transition-all duration-200 select-none"
                                                src={github}
                                                aria-hidden="true"
                                            />
                                        </a>
                                        {project.site && (
                                            <a href={project.site} target='_blank' aria-label="View live site">
                                                <img
                                                    className="w-6 hover:scale-105 transition-all duration-200 select-none"
                                                    src={northeast}
                                                    aria-hidden="true"
                                                />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <hr className="border-t border-plasmaGrey" />

                                <p className="mt-2 leading-4.5">{project.description}</p>
                            </div>
                        </div>
                        <ul className="flex flex-row flex-wrap gap-4 justify-center select-none">
                            {project.techStack.map((tech, i) => (
                                <li
                                    key={i}
                                    className='px-2 py-1 border border-violetGlow rounded-[6px] text-xs text-violetGlow cursor-default'>{tech}</li>
                            ))}
                        </ul>
                    </section>
                )
            })
        );
    };

    return (
        <div
            id='projects'
            className="h-max z-10 flex flex-col text-white">
            <h2 className="w-fit pb-1 gradient-underline mx-auto text-3xl sm:text-4xl">Projects</h2>

            <div className="flex flex-col">
                <Projects />
            </div>
        </div>
    );
};