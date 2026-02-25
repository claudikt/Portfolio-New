import { motion } from 'motion/react';
import { ChevronDown, Zap, Gauge, Sparkles } from 'lucide-react';
import { AnimatedGrid } from './AnimatedGrid';

function ParticleBackground() {
  // Lightweight fallback particle background in case the aliased component is missing
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Simple SVG radial overlay as a lightweight particle effect fallback */}
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <radialGradient id="fallbackGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.03)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#fallbackGradient)" />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Animated Grid Background */}
      <AnimatedGrid />

      {/* Background Image with Multiple Overlays */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1764552283704-ed67e7ad6059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBoZWFkbGlnaHRzJTIwbmlnaHQlMjBkYXJrfGVufDF8fHx8MTc2OTYwNzI5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_100%)]" />
      </div>

      {/* Particle Effects */}
      <ParticleBackground />

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-red-500/30 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-500/30 blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Speed Lines Effect - Enhanced */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px"
            style={{
              top: `${15 + i * 10}%`,
              width: '100%',
              background: `linear-gradient(to right, transparent, ${i % 2 === 0 ? '#ef4444' : '#3b82f6'}, transparent)`,
            }}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ 
              x: '100%',
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl"
          >
            {/* Pre-title with Icons */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 flex items-center gap-4"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="rounded-full bg-gradient-to-br from-red-500 to-orange-500 p-2"
                >
                  <Zap className="h-5 w-5 text-white" />
                </motion.div>
                <div className="h-px w-20 bg-gradient-to-r from-red-500 via-orange-500 to-transparent" />
              </div>
              <span className="font-rajdhani text-sm font-bold uppercase tracking-[0.3em] text-red-500">
                Developer & Cloud Engineer
              </span>
            </motion.div>

            {/* Main Headline - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <h1 className="mb-4 text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.95] tracking-tighter text-white">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Engineering
                </motion.span>
                <br />
                <motion.span
                  className="relative inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                    Performance
                  </span>
                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-1 sm:-bottom-2 left-0 h-1 sm:h-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                </motion.span>
              </h1>
            </motion.div>

            {/* Tagline with Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mb-10 space-y-2"
            >
              <p className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-200">
                <Gauge className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                Designing Precision. Delivering Excellence.
              </p>
              <p className="flex items-center gap-3 pl-7 sm:pl-9 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                Where Code Meets Craftsmanship.
              </p>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full sm:w-4/5 md:w-2/3"
            >
              {[
                { value: '99.9%', label: 'Uptime' },
                { value: '<50ms', label: 'Response' },
                { value: '50+', label: 'Projects' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
                  className="relative overflow-hidden border-l-2 border-red-500 bg-gradient-to-r from-red-500/10 to-transparent pl-3 sm:pl-4 py-2 sm:py-0 backdrop-blur-sm"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="font-rajdhani text-[10px] sm:text-xs uppercase tracking-wider text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(239,68,68,0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 font-bold text-white shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Projects
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.8)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden border-2 border-white/30 bg-white/5 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 w-full sm:w-auto"
              >
                <span className="relative z-10">Get in Touch</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Enhanced */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 hidden sm:flex"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="font-rajdhani text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
            Scroll to Explore
          </span>
          <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-gray-500/50 p-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-red-500"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient - Enhanced */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent" />
      
      {/* Bottom Accent Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 2, delay: 2 }}
      />
    </section>
  );
}
