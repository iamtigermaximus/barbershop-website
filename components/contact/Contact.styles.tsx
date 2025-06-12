'use client';
import styled from 'styled-components';
import { breakpoints as bp } from '../styles/theme';

export const ContactContainer = styled.section`
  padding: 4rem 1rem;
  background: black;
  scroll-margin-top: 80px;
  color: #e7e7e6;

  @media (min-width: ${bp.md}) {
    padding: 6rem 2rem;
  }
`;

// const ContactContainer = styled.section`
//   position: relative;
//   padding: 4rem 1rem;
//   background: black;
//   scroll-margin-top: 80px;
//   color: #e7e7e6;
//   overflow: hidden;
//   z-index: 1;

//   /* Background image */
//   background-image: url('/images/GreenLogo.png'); // update path if needed
//   background-size: contain;
//   background-position: center;
//   background-repeat: no-repeat;

//   /* Dark overlay */
//   &::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     background: rgba(0, 0, 0, 0.88); // adjust to 0.98 or 1 for more darkness
//     z-index: -1;
//   }

//   @media (min-width: ${bp.md}) {
//     padding: 6rem 2rem;
//   }
// `;

// const SectionTitle = styled.h2`
//   font-size: 2rem;
//   color: var(--primary);
//   text-align: center;
//   margin-bottom: 3rem;
//   font-family: 'Playfair Display', serif;
//   position: relative;

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
//   }
// `;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: ${bp.lg}) {
    flex-direction: row;
  }
`;

export const BarberCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 4rem;
`;

export const BarberImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1/1;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1em;
  border: 3px solid var(--primary);
`;

export const BarberName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0;
  font-family: var(--font-sortsMillGoudy);
  color: #e7e7e6;
`;

export const BarberTitle = styled.p`
  font-size: 1.2rem;
  font-family: var(--font-sortsMillGoudy);
  color: #e7e7e6;
  margin-bottom: 0;
`;

export const ContactInfo = styled.div`
  flex: 1;
  padding: 2rem 4rem;

  @media (min-width: ${bp.md}) {
    padding: 2rem 4rem;
  }

  @media (min-width: ${bp.lg}) {
    padding: 2rem 4rem;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  svg {
    flex-shrink: 0;
    color: var(--primary);
  }

  font-size: 1rem;
  font-family: var(--font-sortsMillGoudy);
  color: #e7e7e6;

  @media (min-width: ${bp.sm}) {
    font-size: 18px;
    line-height: 28px;
  }

  @media (min-width: ${bp.md}) {
    font-size: 1.5rem;
    max-width: 800px;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 1.5rem;
    max-width: 800px;
  }
`;

export const MapContainer = styled.div`
  iframe {
    width: 100%;
    height: 400px;
    border: none;
    border-radius: 8px;
    margin-top: 3rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

// const ContactForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
//   margin-top: 2rem;

//   input,
//   textarea {
//     padding: 0.8rem;
//     background: rgba(255, 255, 255, 0.1);
//     border: 1px solid var(--primary);
//     border-radius: 4px;
//     color: var(--white);
//     font-family: inherit;
//     font-size: 1rem;

//     &::placeholder {
//       color: var(--text-light);
//     }

//     &:focus {
//       outline: none;
//       border-color: var(--white);
//     }
//   }

//   textarea {
//     min-height: 150px;
//     resize: vertical;
//   }

//   button {
//     padding: 0.8rem 2rem;
//     background: var(--primary);
//     color: var(--secondary);
//     border: none;
//     font-size: 1rem;
//     font-weight: 600;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     border-radius: 4px;
//     align-self: flex-start;

//     &:hover {
//       background: var(--white);
//     }
//   }
// `;

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

export const OpeningHoursContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 1rem;
  font-weight: 700;
  gap: 1rem;

  font-family: var(--font-sortsMillGoudy);
  color: #e7e7e6;

  @media (min-width: ${bp.sm}) {
    font-size: 18px;
    line-height: 28px;
  }

  @media (min-width: ${bp.md}) {
    font-size: 1.5rem;
    max-width: 800px;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 1.5rem;
    max-width: 800px;
  }
`;

export const OpeningHoursInfoItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-sortsMillGoudy);
  color: #e7e7e6;

  svg {
    flex-shrink: 0;
    color: var(--primary);
  }
`;
