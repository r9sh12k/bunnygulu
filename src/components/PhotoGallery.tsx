import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const photos = [
  {
    url: "https://images.unsplash.com/photo-1658851866325-49fb8b7fbcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHN1bnNldHxlbnwxfHx8fDE3NTkwNTg0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Our beautiful sunset moments together"
  },
  {
    url: "https://images.unsplash.com/photo-1564636242997-77953084df48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGRhdGV8ZW58MXx8fHwxNzU5MDY0OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Our romantic dinner dates"
  },
  {
    url: "https://images.unsplash.com/photo-1615663058740-1ef358ca72a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3ZlJTIwaGVhcnQlMjBiYWxsb29uc3xlbnwxfHx8fDE3NTkxNTgyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Celebrating our love every day"
  }
];

export function PhotoGallery() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [likes, setLikes] = useState(photos.map(() => Math.floor(Math.random() * 50) + 10));

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const likePhoto = (index: number) => {
    setLikes(prev => prev.map((like, i) => i === index ? like + 1 : like));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent px-4">
          Our Precious Memories
        </h2>

        {/* Main carousel */}
        <div className="relative mb-8 md:mb-12">
          <motion.div
            className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <ImageWithFallback
              src={photos[currentPhoto].url}
              alt={photos[currentPhoto].caption}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Caption */}
            <motion.div
              key={currentPhoto}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight">{photos[currentPhoto].caption}</p>
            </motion.div>

            {/* Like button */}
            <motion.button
              className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => likePhoto(currentPhoto)}
            >
              <Heart size={20} fill="currentColor" className="sm:hidden" />
              <Heart size={24} fill="currentColor" className="hidden sm:block" />
              <span className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                {likes[currentPhoto]}
              </span>
            </motion.button>
          </motion.div>

          {/* Navigation buttons */}
          <motion.button
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg text-gray-800"
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevPhoto}
          >
            <ChevronLeft size={20} className="sm:hidden" />
            <ChevronLeft size={24} className="hidden sm:block" />
          </motion.button>

          <motion.button
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg text-gray-800"
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextPhoto}
          >
            <ChevronRight size={20} className="sm:hidden" />
            <ChevronRight size={24} className="hidden sm:block" />
          </motion.button>

          {/* Swipe indicators for mobile */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:hidden">
            {photos.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentPhoto ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail navigation - hidden on mobile, visible on larger screens */}
        <div className="hidden sm:flex justify-center space-x-3 md:space-x-4">
          {photos.map((photo, index) => (
            <motion.button
              key={index}
              className={`w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl overflow-hidden border-3 md:border-4 ${
                index === currentPhoto ? 'border-pink-500' : 'border-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPhoto(index)}
            >
              <ImageWithFallback
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}