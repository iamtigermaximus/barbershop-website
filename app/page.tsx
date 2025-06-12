import Contact from '@/components/contact/Contact';
import Gallery from '@/components/gallery/Gallery';
import Hero from '@/components/hero/Hero';
import Services from '@/components/services/Services';
import Story from '@/components/story/Story';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Story />
      <Gallery />
      <Contact />
    </div>
  );
}
