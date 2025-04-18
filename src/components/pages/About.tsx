import pfp from '../../assets/images/d-pfp.png';

import email from '../../assets/icons/email.svg';
import github from '../../assets/icons/github.svg';
import linkedIn from '../../assets/icons/linkedin.svg';

type Profile = {
    pfp: string,
    name: string,
    age: number,
    location: string,
    education: string | null,
    learning: string | null,
    project: string | null,
    working: string | null,
};

export default function About() {
    const getAge = () => {
        const d = new Date();
        const bd = new Date(2007, 3, 14, 0, 0, 0, 0);

        let age = d.getFullYear() - bd.getFullYear()
        const m = d.getMonth() - bd.getMonth()
        
        if (m < 0 || (m === 0 && d.getDate() < bd.getDate())) {
            age--;
        };

        return age;
    };

    const profile: Profile = {
        pfp: pfp,
        name: 'Dylan Bullock',
        age: getAge(),
        location: 'Norwich, UK 🇬🇧',
        education: 'College Student',
        learning: 'TypeScript',
        project: 'Momentum',
        working: 'N/A',
    };

    return (
        <div
            id='about'
            className='z-10 p-8 text-white'>         
            <h2 className='w-44 mx-auto text-4xl gradient-underline'>About</h2>     

            <div className='flex flex-row gap-4 mt-8'>
                <div className="min-h-screen w-1/3 hidden sm:flex">
                    <div className="h-fit sticky top-0 flex flex-col gap-1 items-center mx-auto">
                        <img
                            className='w-64 rounded-full'
                            src={profile.pfp}
                            aria-label="A picture of Dylan Bullock"
                        />
                        <div className="flex flex-col">
                            <p>{profile.name}</p>
                            <p className='text-sm'>{profile.age}</p>
                            <p className='text-sm'>{profile.location}</p>

                            <div className='flex flex-row gap-1 items-center'>
                                <a href="mailto:dylanbullock.dev@gmail.com" target='_blank'>
                                    <img
                                        className='w-7'
                                        src={email}
                                        aria-hidden="true"
                                    />
                                </a>

                                <a href="https://www.linkedin.com/in/dylanbkdev/" target='_blank'>
                                    <img
                                        className='w-6'
                                        src={linkedIn}
                                        aria-hidden="true" />
                                </a>

                                <a href="https://github.com/dylanbk" target='_blank'>
                                    <img
                                        className='w-6'
                                        src={github}
                                        aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-5/6 sm:w-1/2 flex flex-col gap-6 mx-auto sm:mx-0">
                    <section className="flex flex-col gap-4">
                        <h3 className='text-2xl'>👤 - My Introduction</h3>

                        <p className='leading-4.5'>
                            I'm Dylan, a 17-year-old college student studying Digital Production, Design, and Development.
                            <br /><br />I love designing sleek, modern UIs and bringing them to life as functional products.
                            <br /><br />As someone who enjoys writing code for both the backend and frontend sections of websites, I am going down the full stack development route, and loving every step of the journey.
                            <br /><br />Beyond web development, I have discovered a new joy in working with data; I like to write scripts that process data and convert it into a human-friendly, visual format, ie creating dashboards for user behaviour.
                            <br /><br />Aside from coding, I'm often working out at the gym, reading, or playing games. I also like to cook meals and enjoy eating them even more.
                        </p>
                    </section>

                    <section className="flex flex-col gap-4">
                        <h3 className='text-2xl'>🎯 - My Goals</h3>

                        <p className='leading-4.5'>
                        I have been working to master React and TypeScript and integrate them with Next.js, this brings about new challenges such as learning server-side rendering which I look forward to as I am interested in making more performance-friendly, scalable websites for larger projects.
                        <br /><br />I also aim to master Pandas and SQL as I enjoy working with data and building data-driven projects like dashboards, analytics tools, etc. I find it rewarding to transform raw data into something that people can understand and use.
                        </p>
                    </section>

                    <section className="flex flex-col gap-4">
                        <h3 className="text-2xl">⚡ - My Future</h3>

                        <p className="leading-4.5">
                        In my future, I see myself building digital solutions to improve people's lives. As someone who finds joy in helping others and making their lives easier, I aim to be in a web development role, likely front end initially but I plan to transition into full stack development as I enjoy working on both the front and back end.
                        <br /><br />I hope to create tools that empower people, whether that be in work, personal life, or wherever they need some support.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};