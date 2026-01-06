import { ReavealOnScroll } from '../ReavealOnScroll'

export const About = () => {

    const frontEndSkills = ["IT-Support (1st / 2nd Level)",
        "Windows/Linux-Betriebssysteme (Installation, Konfiguration, Fehleranalyse)",
        "HTML",
        "TailwindCss",
        "Software- und Benutzer-Support",
        "Hardware-Grundkenntnisse (PCs, Laptops, Peripheriegeräte)",
        "Netzwerk-Grundlagen (LAN, WLAN, TCP/IP)",
        "Ticket-Systeme und strukturierte Fehlerdokumentation",
        "Benutzerverwaltung und Systempflege"
    ];

    const backEndSkills = ["Lösungsorientiert und strukturiert",
        "Zuverlässig und servicebewusst",
        "Schnelle Auffassungsgabe",
        "Teamfähig und belastbar"
    ];

    return <section
        id="about" className="min-h-screen flex items-center justify-center py-20"
    >
        <ReavealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 
            bg-gradient-to-r from-sky-900 to-cyan-600 bg-clip-text text-transparent text-center"
                >
                    Über Mich</h2>
                <div className="rounded-xl p-8 border-white/10  border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">

                        Ich bin ein engagierter und lösungsorientierter IT-Support-Spezialist mit einem soliden technischen Hintergrund im Bereich<span className="text-xl bg-gradient-to-r from-sky-500 to-cyan-600 bg-clip-text text-transparent"> Informationstechnologie und Systemtechnik</span>. Ich verfüge über einen anerkannten Bachelorabschluss in Informatik (System- und Computertechnik) sowie über praktische Erfahrung im Umgang mit IT-Systemen, Software, Betriebssystemen und Anwenderproblemen im täglichen Betrieb.

                        Mein Fokus liegt auf der strukturierten Analyse von technischen Störungen, der verständlichen Kommunikation mit Anwendern sowie der zuverlässigen und nachhaltigen Lösung von IT-Problemen. Dabei arbeite ich stets serviceorientiert, effizient und mit einem hohen Qualitätsanspruch.

                        Ich bin es gewohnt, selbstständig zu arbeiten, Verantwortung zu übernehmen und mich schnell in neue Systeme, Prozesse und technische Umgebungen einzuarbeiten. Durch meine kontinuierliche Weiterbildung im IT-Bereich halte ich mein Wissen stets aktuell und bin offen für neue Technologien und Herausforderungen.

                        Dank meiner guten Deutschkenntnisse und meiner klaren, ruhigen Kommunikationsweise kann ich Anwender professionell unterstützen – sowohl telefonisch als auch schriftlich. Mein Ziel ist es, durch kompetenten IT-Support einen messbaren Beitrag zur Stabilität, Sicherheit und Effizienz der IT-Infrastruktur eines Unternehmens zu leisten.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Technische Schwerpunkte</h3>
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
                            <h3 className="text-xl font-bold mb-4">Arbeitsweise</h3>
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
                                <h4 className="font-semibold">IT Support level 2 bei IHK Moldau (2016-2020)</h4>
                                <p>Betreuung und Unterstützung von Anwendern bei Software- und Hardwareproblemen (1st/2nd Level Support)</p>
                                <p>Installation, Konfiguration und Wartung von Betriebssystemen (Windows, ggf. Linux)</p>
                                <p>Analyse und Behebung von Netzwerkproblemen (LAN, WLAN, VPN, TCP/IP)</p>
                                <p>Dokumentation von Störungen, Support-Tickets und Lösungsschritten in Ticket-Systemen</p>
                                <p>Schulung von Mitarbeitern im Umgang mit IT-Systemen und Softwareanwendungen</p>
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