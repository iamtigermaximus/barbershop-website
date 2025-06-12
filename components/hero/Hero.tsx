'use client';

import React from 'react';
import {
  HeroContainer,
  HeroSubtitle,
  HeroTitle,
  HeroSubtexts,
  HeroButton,
} from './Hero.styles';

const Hero: React.FC = () => {
  return (
    <>
      <HeroContainer id="home">
        <HeroSubtitle>Your Neighborhood</HeroSubtitle>
        <HeroTitle>BARBERSHOP</HeroTitle>
        <HeroSubtexts>
          Step in for a sharp, clean haircut crafted with skill and care. Here,
          it’s more than just a trim — it’s about taking the time to understand
          your style, making you feel comfortable, and giving you a grooming
          experience that feels like catching up with an old friend. This is
          where familiar faces meet expert cuts, leaving you looking your best
          and feeling confident every time.
        </HeroSubtexts>
        <HeroButton>BOOK AN APPOINTMENT</HeroButton>
      </HeroContainer>
    </>
  );
};

export default Hero;
