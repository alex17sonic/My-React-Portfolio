import { ReavealOnScroll } from '../ReavealOnScroll';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();
    const [statusMessage, setStatusMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_5ijrc0t',
            'template_8fh98ci',
            form.current,
            'QZwyXgoMnCMN2WVzs'
        ).then(
            () => {
                setStatusMessage('✅ Your message has been sent!');
                e.target.reset();
            },
            () => {
                setStatusMessage('❌ Oops! Something went wrong.');
            }
        );
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-gray-900">
            <ReavealOnScroll>
                <div className="px-6 w-full max-w-md bg-gray-800/80 backdrop-blur-md rounded-xl shadow-lg p-8">
                    <h2 className="
                        text-4xl font-extrabold mb-8 
                        bg-gradient-to-r from-sky-500 to-cyan-400
                        bg-clip-text text-transparent text-center
                    ">
                        Get in Touch
                    </h2>
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name..."
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="youremail@xmail.com..."
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                        />
                        <textarea
                            name="message"
                            placeholder="Your message..."
                            rows={5}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                        />
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-cyan-400 hover:to-sky-500 transition shadow-lg hover:shadow-cyan-500/50"
                        >
                            Send Message
                        </button>
                    </form>
                    {statusMessage && (
                        <p className="mt-4 text-center text-white font-medium">
                            {statusMessage}
                        </p>
                    )}
                </div>
            </ReavealOnScroll>
        </section>
    );
};
