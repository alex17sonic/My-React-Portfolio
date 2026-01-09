import { useState } from "react"
import { ReavealOnScroll } from "../ReavealOnScroll"

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ReavealOnScroll>
        <div className="px-4 w-full max-w-md">
          <h2
            className="
              text-2xl sm:text-3xl font-bold mb-8
              bg-gradient-to-r from-sky-900 to-cyan-600
              bg-clip-text text-transparent text-center
            "
          >
            Get in Touch
          </h2>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/success"
            onSubmit={() => setSubmitted(true)}
            className="space-y-6"
          >
            {/* Netlify hidden fields */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <div className="relative">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name..."
                className="
                  w-full bg-white/5 border border-white/10 rounded
                  px-4 py-3 text-white transition
                  focus:outline-none focus:border-blue-500 focus:bg-blue-500/5
                "
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                required
                placeholder="youremail@gmail.com..."
                className="
                  w-full bg-white/5 border border-white/10 rounded
                  px-4 py-3 text-white transition
                  focus:outline-none focus:border-blue-500 focus:bg-blue-500/5
                "
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Your message..."
                className="
                  w-full resize-none bg-white/5 border border-white/10 rounded
                  px-4 py-3 text-white transition
                  focus:outline-none focus:border-blue-500 focus:bg-blue-500/5
                "
              />
            </div>

            <button
              type="submit"
              className="
                w-full bg-blue-500 text-white py-3 px-6 rounded font-medium
                transition hover:-translate-y-0.5
                hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
              "
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-green-400 text-center mt-4">
                ✅ Message is being sent...
              </p>
            )}
          </form>
        </div>
      </ReavealOnScroll>
    </section>
  )
}
