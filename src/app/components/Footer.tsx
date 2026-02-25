import { motion } from 'motion/react';
import { Heart, Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black py-12">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`,
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-20 bottom-0 h-40 w-40 rounded-full bg-red-500/10 blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-20 bottom-0 h-40 w-40 rounded-full bg-blue-500/10 blur-[80px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top Border with Animation */}
        <motion.div
          className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />

        <div className="flex flex-col items-center justify-between gap-6 sm:gap-8 md:flex-row">
          {/* Left: Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-xs sm:text-sm text-gray-500 md:text-left"
          >
            <p className="font-rajdhani">
              © 2026 Dev Portfolio. All rights reserved.
            </p>
            <p className="mt-1 text-[10px] sm:text-xs text-gray-600">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </motion.div>

          {/* Center: Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <motion.div
              className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center bg-gradient-to-br from-red-500 to-orange-500 shadow-lg shadow-red-500/30"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </motion.div>
            <div>
              <div className="text-sm sm:text-base font-black text-white">Dev Portfolio</div>
              <div className="font-rajdhani text-[8px] sm:text-[10px] uppercase tracking-widest text-gray-600">
                Performance Driven
              </div>
            </div>
          </motion.div>

          {/* Right: Made with love */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500"
          >
            <span>Crafted with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 fill-red-500 text-red-500" />
            </motion.div>
            <span>and precision</span>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 border-t border-white/5 pt-6 text-center"
        >
          <p className="font-rajdhani text-[10px] sm:text-xs uppercase tracking-wider text-gray-600">
            Engineered for Excellence • Designed for Speed
          </p>
        </motion.div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-red-500/30 to-transparent blur-sm" />
    </footer>
  );
}
