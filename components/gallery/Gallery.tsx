'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { breakpoints as bp } from '../styles/theme';
import GreenLogo from '../assets/GreenLogo.png';
import LogoImage from '../assets/LogoCopper.png';
import { TextDivider } from '../common/common.styles';

const galleryImages = [
  { id: 1, src: GreenLogo, alt: 'Barber working on haircut' },
  { id: 2, src: LogoImage, alt: 'Beard trimming service' },
  { id: 3, src: GreenLogo, alt: 'Client getting a shave' },
  { id: 4, src: LogoImage, alt: 'Barbershop interior' },
  { id: 5, src: GreenLogo, alt: 'Hair styling service' },
  { id: 6, src: LogoImage, alt: 'Traditional barber tools' },
  { id: 7, src: GreenLogo, alt: 'Client consultation' },
  { id: 8, src: LogoImage, alt: 'Finished haircut' },
];

const GalleryContainer = styled.section`
  padding: 2rem 1rem;
  background: black;
  scroll-margin-top: 80px;

  @media (min-width: ${bp.md}) {
    padding: 4rem 2rem;
  }

  @media (min-width: ${bp.lg}) {
    /* padding: 6rem 3rem; */
  }
`;

// const GalleryContainer = styled.section`
//   position: relative;
//   padding: 2rem 1rem;
//   background: black;
//   scroll-margin-top: 80px;
//   overflow: hidden;
//   z-index: 1;

//   /* Background image */
//   background-image: url('/images/GreenLogo.png'); // Adjust path as needed
//   background-size: contain;
//   background-position: center;
//   background-repeat: no-repeat;

//   /* Dark overlay */
//   &::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     background: rgba(0, 0, 0, 0.92); // Dark overlay level
//     z-index: -1;
//   }

//   @media (min-width: ${bp.md}) {
//     padding: 4rem 2rem;
//   }

//   @media (min-width: ${bp.lg}) {
//     padding: 6rem 3rem;
//   }
// `;

// const SectionTitle = styled.h2`
//   font-size: 2rem;
//   color: var(--primary);
//   text-align: center;
//   margin-bottom: 3rem;
//   font-family: 'Playfair Display', serif;
//   position: relative;
//   letter-spacing: 2px;

//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -10px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 80px;
//     height: 2px;
//     background: var(--primary);
//   }

//   @media (min-width: ${bp.md}) {
//     font-size: 2.5rem;
//     margin-bottom: 4rem;
//   }
// `;

const GalleryFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem 1rem;
`;

const GalleryItem = styled.div`
  flex: 1 1 calc(50% - 1rem);
  max-width: calc(50% - 1rem);
  position: relative;
  aspect-ratio: 1/1;
  overflow: hidden;
  transition: transform 0.3s ease;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.03);

    img {
      transform: scale(1.1);
    }
  }

  @media (min-width: ${bp.sm}) {
    flex: 1 1 calc(33.333% - 1rem);
    max-width: calc(33.333% - 1rem);
  }

  @media (min-width: ${bp.lg}) {
    flex: 1 1 calc(25% - 1.5rem);
    max-width: calc(25% - 1.5rem);
  }
`;

const GalleryImage = styled(Image)`
  object-fit: cover;
  transition: transform 0.5s ease;
`;

// const SectionTitle = styled.h1`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   font-size: 1rem;
//   color: #a16a38;
//   font-weight: 700;

//   @media (min-width: ${bp.lg}) {
//     padding: 0 10rem;
//     font-size: 2rem;
//   }
// `;

const Gallery = () => {
  return (
    <GalleryContainer id="gallery">
      {/* <SectionTitle>Gallery</SectionTitle> */}
      <TextDivider>
        <span>Gallery</span>
      </TextDivider>
      <GalleryFlex>
        {galleryImages.map((image) => (
          <GalleryItem key={image.id}>
            <GalleryImage
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: 'contain' }}
              priority={image.id <= 4}
            />
          </GalleryItem>
        ))}
      </GalleryFlex>
    </GalleryContainer>
  );
};

export default Gallery;
