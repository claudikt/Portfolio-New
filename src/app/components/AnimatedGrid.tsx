import { motion } from 'motion/react';

export function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {/* Horizontal lines */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
          style={{ top: `${i * 5}%` }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.3 }}
          transition={{
            duration: 2,
            delay: i * 0.05,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 3,
          }}
        />
      ))}
      
      {/* Vertical lines */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"
          style={{ left: `${i * 5}%` }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.3 }}
          transition={{
            duration: 2,
            delay: i * 0.05,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 3,
          }}
        />
      ))}

      {/* Scanning line effect */}
      <motion.div
        className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-red-500/20 to-transparent blur-xl"
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}
