import { motion } from 'motion/react';
import { Code2, Cloud, Shield, Layers, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description: 'AWS, Azure, GCP - designing scalable infrastructure',
    color: 'from-blue-500 to-cyan-500',
    shadowColor: 'shadow-blue-500/50',
  },
  {
    icon: Shield,
    title: 'DevOps & Security',
    description: 'CI/CD pipelines, containerization, secure deployments',
    color: 'from-red-500 to-orange-500',
    shadowColor: 'shadow-red-500/50',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'Modern frameworks, APIs, and database design',
    color: 'from-purple-500 to-pink-500',
    shadowColor: 'shadow-purple-500/50',
  },
  {
    icon: Layers,
    title: 'System Design',
    description: 'Microservices, distributed systems, performance optimization',
    color: 'from-green-500 to-emerald-500',
    shadowColor: 'shadow-green-500/50',
  },
];

export function About() {
  return (
    <section className="relative bg-gradient-to-b from-black via-zinc-950 to-black py-24 lg:py-32">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`
          }}
          animate={{ backgroundPosition: ['0px 0px', '0px 40px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-red-500/20 blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 h-64 w-64 rounded-full bg-blue-500/20 blur-[100px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="h-6 w-6 text-red-500" />
            </motion.div>
            <div className="h-px w-16 bg-gradient-to-r from-red-500 via-orange-500 to-transparent" />
            <span className="font-rajdhani text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              About Me
            </span>
          </div>
          
          <h2 className="mb-8 text-6xl font-black leading-tight text-white lg:text-7xl">
            Built for
            <motion.span
              className="relative ml-4 inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Speed
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-red-500 to-orange-500"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.span>
            <br />
            &
            <motion.span
              className="relative ml-4 inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Scale
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.span>
          </h2>
          
          <p className="text-xl leading-relaxed text-gray-300 lg:text-2xl">
            I combine engineering excellence with a passion for performance. From cloud infrastructure
            to full-stack applications, I build systems that are as{' '}
            <span className="font-bold text-red-500">reliable</span> as they are{' '}
            <span className="font-bold text-blue-500">fast</span>.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.2 }
              }}
              className="group relative overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-sm transition-all"
            >
              {/* Animated Border Glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Corner Accent */}
              <div className="absolute right-0 top-0 h-20 w-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className={`h-full w-full bg-gradient-to-br ${feature.color} blur-2xl`} />
              </div>

              {/* Icon Container */}
              <motion.div
                className={`relative z-10 mb-6 inline-flex rounded-xl bg-gradient-to-br ${feature.color} p-4 shadow-lg ${feature.shadowColor}`}
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="relative z-10 mb-3 text-2xl font-bold text-white">
                {feature.title}
              </h3>
              <p className="relative z-10 text-sm leading-relaxed text-gray-400">
                {feature.description}
              </p>

              {/* Bottom Border Accent - Animated */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              />
              
              {/* Hover Effect - Shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-400">
            Interested in working together?{' '}
            <motion.a
              href="#contact"
              className="font-bold text-red-500 underline decoration-red-500/30 underline-offset-4 transition-colors hover:decoration-red-500"
              whileHover={{ scale: 1.05 }}
            >
              Let's build something amazing →
            </motion.a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
