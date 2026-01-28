import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const skills = [
  { name: 'AWS / Cloud Infrastructure', level: 95, color: 'from-orange-500 to-red-500' },
  { name: 'Kubernetes & Docker', level: 90, color: 'from-blue-500 to-cyan-500' },
  { name: 'React / TypeScript', level: 92, color: 'from-purple-500 to-pink-500' },
  { name: 'Python / Node.js', level: 88, color: 'from-green-500 to-emerald-500' },
  { name: 'CI/CD & DevOps', level: 93, color: 'from-red-500 to-orange-500' },
  { name: 'System Design', level: 87, color: 'from-cyan-500 to-blue-500' },
];

function SkillMeter({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onViewportEnter={() => setIsVisible(true)}
      className="group"
    >
      {/* Skill Name and Level */}
      <div className="mb-3 flex items-end justify-between">
        <h3 className="font-semibold text-white">{skill.name}</h3>
        <div className="flex items-baseline gap-1">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            className={`bg-gradient-to-r ${skill.color} bg-clip-text text-2xl font-bold text-transparent`}
          >
            {isVisible ? skill.level : 0}
          </motion.span>
          <span className="text-xs text-gray-500">/ 100</span>
        </div>
      </div>

      {/* RPM Meter Style Bar */}
      <div className="relative h-2 overflow-hidden rounded-full bg-white/5">
        {/* Background Track */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10" />
        
        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
          className={`relative h-full bg-gradient-to-r ${skill.color}`}
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" 
               style={{
                 animation: 'shimmer 2s infinite',
               }}
          />
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.5 } : {}}
          transition={{ duration: 1.5, delay: index * 0.1 + 0.3 }}
          className={`absolute top-0 h-full bg-gradient-to-r ${skill.color} blur-md`}
          style={{ width: `${skill.level}%` }}
        />
      </div>

      {/* Tick Marks (RPM Style) */}
      <div className="mt-1 flex justify-between px-1">
        {[0, 25, 50, 75, 100].map((mark) => (
          <div key={mark} className="flex flex-col items-center">
            <div className="h-1 w-px bg-white/20" />
            <span className="mt-1 text-[10px] text-gray-600">{mark}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section className="relative bg-black py-24 lg:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-red-500 to-transparent" />
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-red-500">
                Technical Specs
              </span>
            </div>
            <h2 className="mb-6 text-5xl font-bold leading-tight text-white lg:text-6xl">
              Performance
              <br />
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h2>
            <p className="text-lg text-gray-400">
              Like a finely-tuned engine, every skill is optimized for maximum performance.
              Each technology mastered, each tool refined to precision.
            </p>

            {/* Decorative Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="border-l-2 border-red-500 pl-4">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-xs uppercase tracking-wider text-gray-500">Projects</div>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-xs uppercase tracking-wider text-gray-500">Technologies</div>
              </div>
              <div className="border-l-2 border-orange-500 pl-4">
                <div className="text-3xl font-bold text-white">5+</div>
                <div className="text-xs uppercase tracking-wider text-gray-500">Years</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills Dashboard */}
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <SkillMeter key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
