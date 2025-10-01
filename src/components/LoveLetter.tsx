import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const loveMessage = `My Dearest Love,

One year ago, you walked into my life and everything changed. You brought color to my world, laughter to my days, and endless joy to my heart.

Every moment with you feels like a beautiful dream that I never want to wake up from. Your smile lights up even the darkest days, and your love gives me strength I never knew I had.

Thank you for being my partner, my best friend, and my greatest adventure. Here's to many more years of love, laughter, and creating beautiful memories together.

With all my love,
Forever yours ❤️`;

export function LoveLetter() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < loveMessage.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + loveMessage[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex]);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 relative overflow-hidden">
      {/* Animated background elements - reduced count on mobile */}
      {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 15 : 30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
            y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            scale: 0,
            opacity: 0
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.3, 0],
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
            y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut"
          }}
        >
          {Math.random() > 0.5 ? (
            <Heart size={8 + Math.random() * 6} className="text-pink-300" />
          ) : (
            <Sparkles size={6 + Math.random() * 8} className="text-yellow-300" />
          )}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-white px-4"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          A Letter From My Heart
        </motion.h2>

        <motion.div
          className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-pink-200"
          initial={{ rotateY: -90, opacity: 0 }}
          whileInView={{ rotateY: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Letter header decoration */}
          <motion.div
            className="flex justify-center mb-6 md:mb-8"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart size={32} fill="currentColor" className="text-rose-500 sm:hidden" />
            <Heart size={40} fill="currentColor" className="text-rose-500 hidden sm:block" />
          </motion.div>

          {/* Typewriter text */}
          <div className="relative">
            <pre className="whitespace-pre-wrap text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 font-serif">
              {displayedText}
              <motion.span
                className="inline-block w-0.5 h-5 sm:h-6 bg-pink-500 ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </pre>
          </div>

          {/* Completion animation */}
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              className="flex justify-center mt-6 md:mt-8 space-x-1 sm:space-x-2"
            >
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                >
                  <Heart size={16} fill="currentColor" className="text-rose-400 sm:hidden" />
                  <Heart size={20} fill="currentColor" className="text-rose-400 hidden sm:block" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}