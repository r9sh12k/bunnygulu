import { motion } from 'motion/react';
import { useState } from 'react';
import { Heart, Star, Coffee, Music, Camera, Plane } from 'lucide-react';

const memories = [
  {
    title: "First Kiss",
    description: "Under the stars on our second date",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    emoji: "💋"
  },
  {
    title: "Movie Marathons",
    description: "Cozy nights with popcorn and cuddles",
    icon: Star,
    color: "from-purple-500 to-indigo-500",
    emoji: "🍿"
  },
  {
    title: "Morning Coffee",
    description: "Starting every day together with love",
    icon: Coffee,
    color: "from-amber-500 to-orange-500",
    emoji: "☕"
  },
  {
    title: "Dancing",
    description: "Late night kitchen dance parties",
    icon: Music,
    color: "from-green-500 to-emerald-500",
    emoji: "💃"
  },
  {
    title: "Adventures",
    description: "Exploring the world hand in hand",
    icon: Plane,
    color: "from-blue-500 to-cyan-500",
    emoji: "✈️"
  },
  {
    title: "Silly Moments",
    description: "Laughing until our stomachs hurt",
    icon: Camera,
    color: "from-yellow-500 to-red-500",
    emoji: "😂"
  }
];

export function MemoryCards() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent px-4">
          Our Favorite Memories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {memories.map((memory, index) => {
            const Icon = memory.icon;
            const isFlipped = flippedCards.includes(index);

            return (
              <motion.div
                key={index}
                className="perspective-1000 h-56 sm:h-64"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative w-full h-full cursor-pointer transform-style-preserve-3d"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  onClick={() => toggleCard(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Front of card */}
                  <motion.div
                    className={`absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl bg-gradient-to-br ${memory.color} backface-hidden shadow-xl flex flex-col items-center justify-center text-white p-4 md:p-6`}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="text-4xl sm:text-5xl md:text-6xl mb-3 md:mb-4"
                    >
                      {memory.emoji}
                    </motion.div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center">{memory.title}</h3>
                    <Icon size={24} className="sm:hidden" />
                    <Icon size={32} className="hidden sm:block" />
                  </motion.div>

                  {/* Back of card */}
                  <motion.div
                    className="absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl bg-white backface-hidden shadow-xl flex flex-col items-center justify-center text-gray-800 p-4 md:p-6 border-3 md:border-4 border-gray-100"
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="text-3xl sm:text-4xl mb-3 md:mb-4"
                    >
                      {memory.emoji}
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 text-center">{memory.title}</h3>
                    <p className="text-center text-gray-600 leading-relaxed text-sm sm:text-base">{memory.description}</p>
                    <motion.div
                      className="mt-3 md:mt-4"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Heart size={20} fill="currentColor" className="text-pink-500 sm:hidden" />
                      <Heart size={24} fill="currentColor" className="text-pink-500 hidden sm:block" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12 text-base md:text-lg text-gray-600 px-4"
        >
          <span className="hidden sm:inline">Click on each card to reveal our special memories! 💕</span>
          <span className="sm:hidden">Tap each card to reveal our special memories! 💕</span>
        </motion.p>
      </motion.div>
    </section>
  );
}