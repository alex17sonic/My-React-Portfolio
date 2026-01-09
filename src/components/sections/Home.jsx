import React from 'react'
import { ReavealOnScroll } from '../ReavealOnScroll'
export const Home = () => {
    return (
        <section id="home" className='min-h-screen flex items-center justify-center relative'>
            <ReavealOnScroll>
                <div className='text-center z-10 px-4'>
                    <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-900 to bg-cyan-500 bg-clip-text text-transparent leading-right'>
                        Hi, ich bin Alexandru Sonic
                    </h1>
                    <p className='text-gray-400 text-lg mb-8 max-w-3xl mx-auto text-justify'>
                        Ich bin ein engagierter und lösungsorientierter IT-Support-Spezialist mit einem soliden technischen Hintergrund im Bereich Informationstechnologie und Systemtechnik. Ich verfüge über einen anerkannten Bachelorabschluss in Informatik (System- und Computertechnik) sowie über praktische Erfahrung im Umgang mit IT-Systemen, Software, Betriebssystemen und Anwenderproblemen im täglichen Betrieb.
                    </p>
                    <div className='flex justify-center space-x-4'>
                        <a href='#about' className='bg-sky-800 text-shadow-indigo-50 py-3 px-6 rounded font-medium transition relative overflow-x-hidden
                        hover:-translate-y-0.5   hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>
                            Mehr Über Mich
                        </a>
                        <a href='#contact' className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200    
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10'>
                            Contact Me
                        </a>

                    </div>
                </div>
            </ReavealOnScroll>

        </section>
    )
}
