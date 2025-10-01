import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import background from '../assets/bg/background-happy.jpg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={background}
          alt="Romantic anniversary celebration"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(255,107,107,0.7), rgba(255,142,83,0.7), rgba(255,107,157,0.7))',
            'linear-gradient(45deg, rgba(255,142,83,0.7), rgba(255,107,157,0.7), rgba(196,69,105,0.7))',
            'linear-gradient(45deg, rgba(255,107,157,0.7), rgba(196,69,105,0.7), rgba(255,107,107,0.7))',
            'linear-gradient(45deg, rgba(196,69,105,0.7), rgba(255,107,107,0.7), rgba(255,142,83,0.7))',
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating sparkles - reduced count on mobile */}
      {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-300"
          initial={{ 
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
            y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            scale: 0
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
            y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        >
          <Sparkles size={12 + Math.random() * 12} />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.5, 
            type: "spring", 
            bounce: 0.5 
          }}
          className="mb-6 md:mb-8"
        >
          <Heart size={60} fill="currentColor" className="mx-auto text-pink-200 sm:hidden" />
          <Heart size={80} fill="currentColor" className="mx-auto text-pink-200 hidden sm:block" />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
        >
          Happy 1st Anniversary
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg sm:text-xl md:text-2xl mb-8 text-pink-100 px-4"
        >
          Celebrating our incredible journey together ✨
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
          className="flex justify-center space-x-2 sm:space-x-4"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            >
              <Heart size={24} fill="currentColor" className="text-pink-200 sm:hidden" />
              <Heart size={30} fill="currentColor" className="text-pink-200 hidden sm:block" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}