'use client';

import Footer from '../footer/Footer';
import { LoaderWrapper } from '../loader/LoaderWrapper';
import Navbar from '../navbar/Navbar';
import { useEffect, useState } from 'react';

// import { GlobalStyles } from './GlobalStyles';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;
  return (
    <div className={isHydrated ? 'show' : 'hide'}>
      <LoaderWrapper>
        <Navbar />
        {/* <GlobalStyles /> */}
        {children}
        <Footer />
      </LoaderWrapper>
    </div>
  );
};

export default Layout;
