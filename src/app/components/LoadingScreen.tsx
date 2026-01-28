import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-red-500/20 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center bg-gradient-to-br from-red-500 to-orange-500 shadow-lg shadow-red-500/50"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="text-5xl font-black text-white"
          >
            D
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-2 text-3xl font-black text-white"
        >
          Dev Portfolio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-rajdhani mb-8 text-sm uppercase tracking-[0.3em] text-gray-500"
        >
          Engineering Performance
        </motion.p>

        {/* Progress Bar */}
        <div className="mx-auto w-64">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-gray-500">Loading</span>
            <motion.span
              key={progress}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-bold text-red-500"
            >
              {progress}%
            </motion.span>
          </div>
          
          <div className="relative h-1 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-red-500 to-orange-500"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
            
            {/* Animated Shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-8 flex items-center justify-center gap-1 text-gray-500"
        >
          <span className="h-1 w-1 rounded-full bg-red-500" />
          <span className="h-1 w-1 rounded-full bg-orange-500" />
          <span className="h-1 w-1 rounded-full bg-red-500" />
        </motion.div>
      </div>
    </motion.div>
  );
}
