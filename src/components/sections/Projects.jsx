import {ReavealOnScroll} from '../ReavealOnScroll'

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
       <ReavealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 
            bg-gradient-to-r from-sky-900 to-cyan-600 bg-clip-text text-transparent text-center">Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.1)]">
                    <h3 className="text-xl font-bold mb-2"> ILS EndProject</h3>
                    <p className="text-gray-400 mb-4"> Project Description with features and -------</p>
                    <div>
                        {["Vue.js", "BootStrap","Javascript"].map((tech,key) =>(
                            <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,246, 0.1)] transition-all
                                      ">
                                    {tech}
                                </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <a href="https://github.com/alex17sonic/Final_Version_Vue" className="text-blue-400 hover:text-blue-300 transition-colors">View Project</a>
                    </div>
                    
                </div>
                      <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.1)]">
                    <h3 className="text-xl font-bold mb-2"> ILS EndProject</h3>
                    <p className="text-gray-400 mb-4"> Project Description with features and -------</p>
                    <div>
                        {["Vue.js", "BootStrap","Javascript"].map((tech,key) =>(
                            <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,246, 0.1)] transition-all
                                      ">
                                    {tech}
                                </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <a href="https://github.com/alex17sonic/Final_Version_Vue" className="text-blue-400 hover:text-blue-300 transition-colors">View Project</a>
                    </div>
                    
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.1)]">
                    <h3 className="text-xl font-bold mb-2"> ILS EndProject</h3>
                    <p className="text-gray-400 mb-4"> Project Description with features and -------</p>
                    <div>
                        {["Vue.js", "BootStrap","Javascript"].map((tech,key) =>(
                            <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,246, 0.1)] transition-all
                                      ">
                                    {tech}
                                </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <a href="https://github.com/alex17sonic/Final_Version_Vue" className="text-blue-400 hover:text-blue-300 transition-colors">View Project</a>
                    </div>
                    
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.1)]">
                    <h3 className="text-xl font-bold mb-2"> ILS EndProject</h3>
                    <p className="text-gray-400 mb-4"> Project Description with features and -------</p>
                    <div>
                        {["Vue.js", "BootStrap","Javascript"].map((tech,key) =>(
                            <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,246, 0.1)] transition-all
                                      ">
                                    {tech}
                                </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <a href="https://github.com/alex17sonic/Final_Version_Vue" className="text-blue-400 hover:text-blue-300 transition-colors">View Project</a>
                    </div>
                    
                </div>   
            </div>

        </div>
        </ReavealOnScroll>
    </section>
}