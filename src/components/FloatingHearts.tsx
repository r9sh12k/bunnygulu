import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  duration: number;
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  const colors = ['#ff69b4', '#ff1493', '#dc143c', '#ff6b6b', '#ff8fa3', '#ffb3ba'];

  useEffect(() => {
    const createHeart = () => {
      // Adjust heart frequency and size based on screen size
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth < 1024;
      
      const heart: FloatingHeart = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: isMobile ? Math.random() * 12 + 10 : Math.random() * 20 + 15,
        duration: Math.random() * 3 + 4,
      };
      
      setHearts(prev => [...prev, heart]);
      
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== heart.id));
      }, heart.duration * 1000);
    };

    // Reduce frequency on mobile devices
    const isMobile = window.innerWidth < 768;
    const interval = setInterval(createHeart, isMobile ? 2000 : 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          initial={{ x: heart.x, y: heart.y, opacity: 1, scale: 0 }}
          animate={{ 
            y: -100, 
            opacity: 0, 
            scale: 1,
            rotate: [0, 10, -10, 0],
            x: heart.x + (Math.random() - 0.5) * 200
          }}
          transition={{ 
            duration: heart.duration,
            ease: "easeOut",
            rotate: { repeat: Infinity, duration: 2 }
          }}
          className="absolute"
          style={{ 
            color: heart.color,
            fontSize: heart.size 
          }}
        >
          <Heart fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}