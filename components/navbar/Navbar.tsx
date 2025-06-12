'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '../assets/LogoCopper.png';
import Scissor1 from '../assets/scissor1.png';
import Scissor2 from '../assets/scissor2.png';
import {
  NavbarContainer,
  LeftLinks,
  ScissorContainer,
  NavLink,
  LogoContainer,
  RightLinks,
} from './Navbar.styles';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarContainer>
      <LeftLinks>
        <ScissorContainer>
          <Image
            src={Scissor2}
            alt="Classic Cuts Logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </ScissorContainer>
        <NavLink>
          <Link
            href="#story"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('story');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Story
          </Link>
        </NavLink>
        <NavLink>
          <Link
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('services');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Services
          </Link>
        </NavLink>
      </LeftLinks>
      <Link
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById('home');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <LogoContainer $scrolled={scrolled}>
          <Image
            src={LogoImage}
            alt="Classic Cuts Logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </LogoContainer>
      </Link>
      <RightLinks>
        <NavLink>
          <Link
            href="#gallery"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('gallery');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Gallery
          </Link>
        </NavLink>
        <NavLink>
          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Contact
          </Link>
        </NavLink>
        <ScissorContainer>
          <Image
            src={Scissor1}
            alt="Classic Cuts Logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </ScissorContainer>
      </RightLinks>
    </NavbarContainer>
  );
};

export default Navbar;
