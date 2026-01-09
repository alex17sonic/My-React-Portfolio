import { ReavealOnScroll } from '../ReavealOnScroll'

export const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <ReavealOnScroll>
                <div className="px-4 w-full max-w-md">
                    <h2 className="
                        text-3xl font-bold mb-8 
                        bg-gradient-to-r from-sky-900 to-cyan-600 
                        bg-clip-text text-transparent text-center
                    ">
                        Get in Touch
                    </h2>
                    <form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  className="space-y-6"
>
  {/* honeypot */}
  <input type="hidden" name="form-name" value="contact" />
  <input type="hidden" name="bot-field" />

  <div className="relative">
    <input type="text" name="name" required placeholder="Your Name..." />
  </div>

  <div className="relative">
    <input type="email" name="email" required placeholder="youremail@xmail.com..." />
  </div>

  <div className="relative">
    <textarea name="message" required rows={4} placeholder="Your message..." />
  </div>

  <button type="submit">Send Message</button>
</form>

                </div>
            </ReavealOnScroll>
        </section>
    )
}
