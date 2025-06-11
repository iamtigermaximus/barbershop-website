'use client';

import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

// import { GlobalStyles } from './GlobalStyles';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {/* <GlobalStyles /> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
