import { motion } from 'motion/react';
import { Calendar, MapPin, Heart, Camera, Gift } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import sukhna from '../assets/timeline/0.jpg'
import kasuali from '../assets/timeline/1.jpg'
import zinnia from '../assets/timeline/3.jpg'
// import cove from '../assets/timeline/2.jpg'
import kasol from '../assets/timeline/4.jpg'
import bday from '../assets/timeline/6.png'

const timelineEvents = [
  {
    date: "Sukhna visit",
    title: "Selfie Champion",
    description: "The day we got one step closer ✨",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    image: sukhna
  },
  {
    date: "Kasuali",
    title: "Our first trip",
    description: "Momos, siddu and perfect view 🌅",
    icon: Calendar,
    color: "from-purple-500 to-indigo-500",
    image: kasuali
  },
  {
    date: "Zinnia",
    title: "The Restaurant We’ll Never Forget 🍽️",
    description: "The place we went right after saying 'I love you' 💖",
    icon: MapPin,
    color: "from-blue-500 to-cyan-500",
    image: zinnia
  },
  {
    date: "Kasol",
    title: "Escape 🏞️",
    description: "The most magical trip, planned by the best girlfriend ever 💕",
    icon: Gift,
    color: "from-green-500 to-emerald-500",
    image: kasol
  },
  {
    date: "23 September 2023",
    title: "Your Birthday 🎂",
    description: "Celebrating the most special day of the year🎉",
    icon: Camera,
    color: "from-orange-500 to-red-500",
    image: bday
  }
];

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent px-4">
          Our Timeline
        </h2>

        <div className="relative">
          {/* Timeline line - mobile: left aligned, desktop: center */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 to-purple-600 rounded-full" />

          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 md:mb-16 ${
                  // Mobile: always left aligned, Desktop: alternating
                  'md:' + (isLeft ? 'flex-row' : 'flex-row-reverse')
                }`}
              >
                {/* Decorative elements for empty side - desktop only */}
                <motion.div
                  className={`hidden md:block w-5/12 ${
                    isLeft ? 'pl-8' : 'pr-8'
                  }`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center space-y-4">
                    {/* Floating hearts and sparkles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [1, 1.3, 1],
                          rotate: [0, 10, -10, 0],
                          y: [0, -10, 0]
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                        className="text-pink-300"
                      >
                        {i % 2 === 0 ? (
                          <Heart size={20 + i * 4} fill="currentColor" />
                        ) : (
                          <Icon size={16 + i * 4} className="text-purple-400" />
                        )}
                      </motion.div>
                    ))}
                    
                    {/* Decorative quote or message */}
                    <motion.div
                      className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-200 max-w-xs"
                      animate={{
                        rotate: [0, 1, -1, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <p className="text-lg text-gray-700 italic">
                        {index === 0 && "✨ Love at first sight ✨"}
                        {index === 1 && "🌙 Unforgettable kasuali night 🌙"}
                        {index === 2 && "🗺️ Adventures await us 🗺️"}
                        {index === 3 && "🏠 Home is where you are 🏠"}
                        {index === 4 && "🎉 Forever and always 🎉"}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`w-full pl-20 md:w-5/12 md:pl-0 ${
                    // Mobile: always left aligned, Desktop: alternating alignment
                    isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setActiveIndex(index)}
                  onHoverEnd={() => setActiveIndex(null)}
                >
                  <motion.div
                    className={`p-4 md:p-6 rounded-2xl shadow-xl bg-white border-2 border-transparent bg-gradient-to-br ${event.color} cursor-pointer`}
                    animate={{
                      scale: activeIndex === index ? 1.05 : 1,
                      rotate: activeIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white rounded-xl p-3 md:p-4 text-gray-800">
                      {/* Event Image */}
                      <div className="mb-3 md:mb-4 rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={event.image}
                          alt={event.title}
                          className="w-full h-32 sm:h-40 md:h-48 object-cover"
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-xs md:text-sm text-gray-600 mb-2">{event.date}</p>
                      <p className="text-sm md:text-base text-gray-700">{event.description}</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Timeline dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full border-3 md:border-4 border-white shadow-lg flex items-center justify-center z-10"
                  style={{ background: `linear-gradient(135deg, ${event.color.split(' ')[1]}, ${event.color.split(' ')[3]})` }}
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon size={16} className="text-white md:hidden" />
                  <Icon size={24} className="text-white hidden md:block" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}