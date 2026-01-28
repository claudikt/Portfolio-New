import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/claudikt', color: 'hover:text-purple-500' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pranavval/', color: 'hover:text-blue-500' },
  { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-cyan-500' },
  { icon: Mail, label: 'Email', href: 'mailto:prnvvarshney@gmail.com', color: 'hover:text-red-500' },
];

export function Contact() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-red-500/20 blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Animated Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500" />
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-red-500">
                Let's Connect
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-red-500 to-transparent" />
            </div>
            <h2 className="mb-6 text-5xl font-bold text-white lg:text-6xl">
              Start Your
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                {' '}Engine
              </span>
            </h2>
            <p className="text-lg text-gray-400 lg:text-xl">
              Ready to build something exceptional? Let's accelerate your project together.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="mailto:prnvvarshney@gmail.com"
              className="group relative w-full overflow-hidden bg-gradient-to-r from-red-600 to-orange-600 px-8 py-4 font-semibold text-white transition-all hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] sm:w-auto"
              aria-label="Send email"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" />
                Send Message
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            <button className="group w-full border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10 sm:w-auto">
              <span className="flex items-center justify-center gap-2">
                Download Resume
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="mb-6 text-center">
              <span className="text-sm uppercase tracking-wider text-gray-500">
                Follow the Journey
              </span>
            </div>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`group relative flex h-14 w-14 items-center justify-center border border-white/20 bg-white/5 backdrop-blur-sm transition-all hover:border-white/40 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-white transition-colors" />
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/10 px-2 py-1 text-xs text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    {social.label}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            <div className="group relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 text-center backdrop-blur-sm">
              <div className="mb-2 text-sm uppercase tracking-wider text-gray-500">Email</div>
              <a
                href="mailto:contact@example.com"
                className="text-lg font-semibold text-white transition-colors group-hover:text-red-500"
              >
                prnvvarshney@gmail.com
              </a>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300 group-hover:w-full" />
            </div>

            <div className="group relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 text-center backdrop-blur-sm">
              <div className="mb-2 text-sm uppercase tracking-wider text-gray-500">Location</div>
              <p className="text-lg font-semibold text-white">Bengaluru, India</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
    </section>
  );
}