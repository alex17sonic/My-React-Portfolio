import React from 'react'
import { ReavealOnScroll } from '../ReavealOnScroll'
import bachelorPDF from '../../assets/certificates/Zeugnisbewertung.pdf';
import ILS from '../../assets/certificates/AbschlussZertifikat.pdf'
import ERP from '../../assets/certificates/AbschlusszeugnisMT.pdf'


// Array local cu certificate
const certificates = [
  {
    title: "Bachelor in Informatik 🎓",
    institution: "Technische Universität Moldau",
    date: "2016",
    tags: ["System- und Computertechnik", "IT-Support"],
    link: bachelorPDF
  },
  {
    title: "Web Entwikler 🌐",
    institution: "ILS",
    date: "2024",
    tags: ["Serverseitige Technologien"],
    link: ILS
  },
  {
    title: "EMPLOYER’S RECOMMENDATION 📄",
    institution: "MyTheresa",
    date: "2024",
    tags: ["IT systems", "ERP", "FCI", "Ups Worldship and Prologis"],
    link: ERP
  },
  {
    title: "Cisco Certified Network Professional(CCNP) 💻",
    institution: "The Knowledge Academy",
    date: "2017",
    tags: ["Routing and network design"],
    link: "/"
  }
];

export const Certificates = () => {
  return (
    <section id="certificates" className="min-h-screen flex items-center justify-center py-20">
      <ReavealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* Titlu secțiune */}
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-sky-900 to-cyan-600 bg-clip-text text-transparent text-center">
            Meine Qualifikationen
          </h2>

          {/* Grid certificate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, key) => (
              <div
                key={key}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                           hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]
                           transition-all duration-200"
              >
                <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                <p className="text-gray-400 mb-2">{cert.institution} • {cert.date}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]
                                 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link certificat */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </ReavealOnScroll>
    </section>
  );
}
