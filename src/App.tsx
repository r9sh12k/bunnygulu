import { Hero } from './components/Hero';
import { FloatingHearts } from './components/FloatingHearts';
import { Timeline } from './components/Timeline';
// import { PhotoGallery } from './components/PhotoGallery';
import { LoveLetter } from './components/LoveLetter';
// import { MemoryCards } from './components/MemoryCards';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full overflow-x-hidden">
      <FloatingHearts />
      <Hero />
      <Timeline />
      {/* <PhotoGallery /> */}
      {/* <MemoryCards /> */}
      <LoveLetter />
      <Footer />
    </div>
  );
}