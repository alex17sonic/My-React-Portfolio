import {ReavealOnScroll} from '../ReavealOnScroll'

export const About = () => {

    const frontEndSkills = ["Vue",
        "React",
        "HTML",
        "TailwindCss",
        "TypeScript",
        "JavaScript"
    ];

    const backEndSkills = ["MongoDB",
        "Node.js",
        "AWS",
        "Python"
    ];

    return <section
        id="about" className="min-h-screen flex items-center justify-center py-20"
    >
        <ReavealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 
            bg-gradient-to-r from-sky-900 to-cyan-600 bg-clip-text text-transparent text-center"
            >
                About Me</h2>
            <div className="rounded-xl p-8 border-white/10  border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I am a passionate web developer with a solid foundation in <span className="text-xl bg-gradient-to-r from-sky-500 to-cyan-600 bg-clip-text text-transparent">HTML, CSS, JavaScript</span>. I enjoy building modern, responsive web applications with clean code and user-friendly interfaces. I'm constantly learning and improving my skills to stay updated with the latest technologies.
                    My goal is to create functional, efficient, and visually appealing digital experiences that meet both client and user needs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontEndSkills.map((tech, key) => (
                                <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition
                                      ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">BackEnd</h3>
                        <div className="flex flex-wrap gap-2">
                            {backEndSkills.map((tech, key) => (
                                <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,2246, 0.2)] transition
                                      ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 🏫 Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2" >
                                <li>
                                    <strong>B.S. Sciente</strong> -Technical University of Moldova (2012-2016)
                                </li>
                                <li>
                                    <strong>Geprüfter Web Entwikler</strong> -ILS Hamburg
                                </li>
                            </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 👨🏼‍💻 Work Experience</h3>
                            <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">FrontEnd Developper at Chamber of Comerce and Industry (2016-2020)</h4>
                                <p>Developed and maintained microservices  for cloud based apps and webapges</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Ramp Agent at Amazon Air Leipzig/Halle (2020-2024)</h4>
                            </div>
                            <div>
                                <h4 className="font-semibold">Line Coordinator at MyTheresa (2024-)</h4>
                            </div>
                            </div>
                </div>

            </div>
        </div>
        </ReavealOnScroll>
    </section>
};