import { motion } from 'motion/react';
import { Award, Briefcase, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    year: '2024 - Present',
    title: 'Full Stack Developer',
    company: 'Capgemini',
    description: 'Working as a fullstack developer for NBCUniversal',
    achievements: [
      'Built and maintained scalable Angular and .NET modules for global sports and Olympics platforms',
      'Optimized backend APIs and databases to support real-time, high-traffic event data',
      'Supported CI/CD pipelines and DevOps workflows for automated deployments and quality checks',
    ],
  },
  {
    year: '2023',
    title: 'Full Stack Developer',
    company: 'Bharat Intern',
    description: 'Built scalable web applications and microservices',
    achievements: [
      'Developed a real-time video conferencing app using Angular, Node.js, and WebRTC',
      'Built secure backend APIs and MySQL database for user and session management',
      'Delivered a responsive, multi-user solution within a strict six-week timeline',
    ],
  },
  {
    year: '2020 - 2023',
    title: 'Graphic Designer',
    company: 'Brij Literature Festival',
    description: 'Lead the design team for promotional materials and event branding',
    achievements: [
      'Designed end-to-end branding assets including posters, banners, and digital creatives',
      'Maintained consistent visual identity across online and offline promotional materials',
      'Collaborated with organizers to deliver high-impact designs under tight event timelines',
    ],
  },
];

const certifications = [
  'Azure Developer Associate',
  '10+ Google AI Badges',
  'DevSecOps by EC Council',
];

export function Experience() {
  return (
    <section className="relative bg-black py-24 lg:py-32">
      {/* Race Track Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
            style={{ top: `${12.5 * (i + 1)}%` }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500" />
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-red-500">
              Career Track
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-red-500 to-transparent" />
          </div>
          <h2 className="mb-6 text-5xl font-bold text-white lg:text-6xl">
            Racing
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              {' '}History
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-red-500 via-orange-500 to-transparent lg:left-0" />

              {/* Experience Items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative pl-20 lg:pl-12"
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-6 top-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-red-500 bg-black lg:left-[-10px]">
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                    </div>

                    {/* Content Card */}
                    <div className="group relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-sm transition-all hover:border-red-500/30">
                      {/* Year Badge */}
                      <div className="mb-3 inline-block bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                        {exp.year}
                      </div>

                      {/* Title & Company */}
                      <div className="mb-3 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="mb-1 text-2xl font-bold text-white">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Briefcase className="h-4 w-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                      </div>

                      <p className="mb-4 text-gray-400">{exp.description}</p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className="flex items-start gap-2 text-sm text-gray-300"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {/* Hover Accent */}
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300 group-hover:w-full" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-8"
            >
              {/* Header */}
              <div className="mb-6 flex items-center gap-3">
                <Award className="h-6 w-6 text-red-500" />
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>

              {/* Certifications List */}
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4 backdrop-blur-sm transition-all hover:border-blue-500/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-sm font-semibold text-white">{cert}</p>
                    </div>
                    {/* Hover Accent */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
                  </motion.div>
                ))}
              </div>

              {/* Stats Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 border border-white/10 bg-gradient-to-br from-red-500/10 to-orange-500/10 p-6 backdrop-blur-sm"
              >
                <div className="mb-2 text-4xl font-bold text-white">2+</div>
                <div className="text-sm uppercase tracking-wider text-gray-400">
                  Years of Experience
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
