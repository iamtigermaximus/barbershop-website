import Contact from '@/components/contact/Contact';
import Gallery from '@/components/gallery/Gallery';
import Hero from '@/components/hero/Hero';
import Services from '@/components/services/Services';
// import Header from '@/components/header/Header';
// import Navbar from '@/components/navbar/Navbar';
import Story from '@/components/story/Story';

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Services />
      <Story />
      <Gallery />
      <Contact />
    </div>
  );
}
