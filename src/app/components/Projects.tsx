import { motion } from 'motion/react';
import { ExternalLink, Github, Gauge } from 'lucide-react';

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  stats: { performance: string; speed: string };
  gradient: string;
  accentColor: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: 'PacMan Game',
    category: 'Web Development',
    description: 'Pacman game totally developed by me using HTML, CSS and JavaScript',
    image: 'https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUydGZyMWF0ejh1azE1cGtoNDc4MzNkNWJ0aHY5ZTJvcDVlOTM0eTJxOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/d9QiBcfzg64Io/200w.gif',
  // Replace this placeholder with your actual PacMan game URL (external or relative path).
    liveUrl: 'https://pacman-bay.vercel.app/',
    tech: ['HTML', 'JS', 'CSS'],
    stats: { performance: '99.9%', speed: '2.5s' },
    gradient: 'from-blue-500/20 to-cyan-500/20',
    accentColor: 'blue',
  },
  {
    title: '3D Particle System',
    category: 'Creative Development',
    description: 'Interactive 3D particle simulation with smooth animations and real-time responsiveness.',
    image: 'https://cdn.dribbble.com/userupload/20991396/file/original-adf8cb50604d42cdc0b062da04316765.gif',
    // Set to the live URL for this project (replace placeholder)
    liveUrl: 'https://3-d-particle.vercel.app/',
    tech: ['Three.js', 'JavaScript', 'WebGL'],
    stats: { performance: '98.5%', speed: '100ms' },
    gradient: 'from-red-500/20 to-orange-500/20',
    accentColor: 'red',
  },
  {
    title: '3-D Cube',
    category: 'Creative Development',
    description: 'Immersive 3D room scene with realistic lighting, depth, and interactive camera movement.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*dCOC-CmuD9p6LvUg.gif',
    // Set to the live URL for this project (replace placeholder)
    liveUrl: 'https://window3-d-scene.vercel.app/ ',
    tech: ['Three.js', 'JavaScript', 'WebGL'],
    stats: { performance: '99.7%', speed: '50ms' },
    gradient: 'from-purple-500/20 to-pink-500/20',
    accentColor: 'purple',
  },
  {
    title: 'Security & Compliance Suite',
    category: 'Security',
    description: 'Enterprise-grade security monitoring and compliance automation',
    image: 'https://images.unsplash.com/photo-1768713533974-52785924880f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBtb3Rpb24lMjBibHVyJTIwc3BlZWR8ZW58MXx8fHwxNzY5NjA3Mjk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    // Set to the live URL for this project (replace placeholder)
    liveUrl: 'https://your-security-example.example',
    tech: ['AWS', 'Python', 'Terraform'],
    stats: { performance: '99.9%', speed: '1.2s' },
    gradient: 'from-green-500/20 to-emerald-500/20',
    accentColor: 'green',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm"
    >
      {/* Animated corner accents */}
      <motion.div
        className="absolute left-0 top-0 h-1 w-12 bg-gradient-to-r from-red-500 to-transparent"
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      />
      <motion.div
        className="absolute left-0 top-0 h-12 w-1 bg-gradient-to-b from-red-500 to-transparent"
        initial={{ height: 0 }}
        whileInView={{ height: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      />

      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        {/* Overlay Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80`} />
        
        {/* Scan line effect on hover */}
        <motion.div
          className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100"
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Category Badge */}
        <div className="absolute right-2 top-2 sm:right-4 sm:top-4 bg-black/80 px-2 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="mb-2 text-lg sm:text-xl md:text-2xl font-bold text-white transition-colors group-hover:text-red-500">
          {project.title}
        </h3>
        <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-gray-400">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-3 sm:mb-4 flex flex-wrap gap-1.5 sm:gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="border border-white/20 bg-white/5 px-1.5 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-xs font-medium text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Stats (Car Spec Style) */}
        <div className="mb-3 sm:mb-4 grid grid-cols-2 gap-3 sm:gap-4 border-t border-white/10 pt-3 sm:pt-4">
          <div>
            <div className="mb-1 flex items-center gap-1">
              <Gauge className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-gray-500" />
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500">Uptime</span>
            </div>
            <div className={`text-sm sm:text-base md:text-lg font-bold text-${project.accentColor}-500`}>
              {project.stats.performance}
            </div>
          </div>
          <div>
            <div className="mb-1 flex items-center gap-1">
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500">Response</span>
            </div>
            <div className={`text-sm sm:text-base md:text-lg font-bold text-${project.accentColor}-500`}>
              {project.stats.speed}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2 border border-white/20 bg-white/5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/10"
            >
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              View Live
            </a>
          ) : (
            <button className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2 border border-white/20 bg-white/5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/10">
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              View Live
            </button>
          )}

          <button className="flex items-center justify-center border border-white/20 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 text-white transition-all hover:border-white/40 hover:bg-white/10">
            <Github className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${project.gradient.replace('/20', '')} transition-all duration-500 group-hover:w-full`} />
    </motion.div>
  );
}

export function Projects() {
  return (
    <section className="relative bg-gradient-to-b from-black via-zinc-950 to-black py-24 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-red-500/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-red-500 to-transparent" />
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-red-500">
              Showroom
            </span>
          </div>
          <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Featured
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              {' '}Projects
            </span>
          </h2>
          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-400">
            A curated collection of high-performance solutions. Each project engineered
            for speed, reliability, and scale.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button className="group inline-flex items-center gap-2 border border-white/30 bg-white/5 px-6 py-3 sm:px-8 sm:py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-red-500/50 hover:bg-red-500/10">
            View All Projects
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}