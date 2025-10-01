import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-16 md:py-20 px-4 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 overflow-hidden">
      {/* Animated background hearts - reduced count on mobile */}
      {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 8 : 15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
            y: Math.random() * 200,
            scale: 0,
            opacity: 0
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.2, 0],
            y: [Math.random() * 200, Math.random() * 200 - 100],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "easeInOut"
          }}
        >
          <Heart size={15 + Math.random() * 15} className="text-pink-300" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="mb-6 md:mb-8"
        >
          <Heart size={48} fill="currentColor" className="mx-auto text-pink-300 sm:hidden" />
          <Heart size={60} fill="currentColor" className="mx-auto text-pink-300 hidden sm:block" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 px-4"
        >
          Here's to Forever
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-pink-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4 leading-relaxed"
        >
          Thank you for being the most amazing girlfriend anyone could ask for. 
          I love you more than words can express, and I can't wait for all the adventures ahead! ✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 px-4"
        >
          <div className="flex items-center space-x-3 sm:space-x-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={20} className="text-yellow-300 sm:hidden" />
              <Sparkles size={24} className="text-yellow-300 hidden sm:block" />
            </motion.div>
            <span className="text-lg sm:text-xl md:text-2xl text-white font-semibold text-center">
              Happy Anniversary, My Love!
            </span>
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={20} className="text-yellow-300 sm:hidden" />
              <Sparkles size={24} className="text-yellow-300 hidden sm:block" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-8 flex justify-center space-x-1 sm:space-x-2"
        >
          {[...Array(typeof window !== 'undefined' && window.innerWidth < 640 ? 5 : 9)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 15, -15, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            >
              <Heart size={14} fill="currentColor" className="text-pink-400 sm:hidden" />
              <Heart size={16} fill="currentColor" className="text-pink-400 hidden sm:block" />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm text-pink-200 mt-6 md:mt-8 px-4"
        >
          Made with 💖 for the most special person in my life
        </motion.p>
      </div>
    </footer>
  );
}