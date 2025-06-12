'use client';

import styled from 'styled-components';
import { breakpoints as bp } from '../styles/theme';

// const HeroContainer = styled.section`
//   scroll-snap-align: start;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   color: #e7e7e6;
//   padding: 12rem 2rem 6rem;
//   background: black;
//   margin: 0;
//   /* height: 100vh; */

//   @media (min-width: ${bp.xs}) {
//     /* padding: 6rem 2rem 6rem; */
//   }

//   @media (min-width: ${bp.sm}) {
//     /* padding: 1rem 2rem 6rem; */
//   }

//   @media (min-width: ${bp.md}) {
//     padding: 14rem 2rem 6rem;
//   }

//   @media (min-width: ${bp.lg}) {
//     padding: 16rem 2rem 6rem;
//   }
// `;

export const HeroContainer = styled.section`
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #e7e7e6;
  padding: 12rem 2rem 6rem;
  background: black;

  position: relative;
  z-index: 1;
  overflow: hidden;

  /* Background image */
  background-image: url('/images/GreenLogo.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  /* Overlay for readability */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: -1;
  }

  @media (min-width: ${bp.md}) {
    padding: 14rem 2rem 6rem;
  }

  @media (min-width: ${bp.lg}) {
    padding: 16rem 2rem 6rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 20px;
  letter-spacing: 10px;
  color: #719274;
  font-family: 'Playfair Display', serif;
  margin: 0;

  @media (min-width: ${bp.xs}) {
    font-size: 30px;
    letter-spacing: 10px;
  }

  @media (min-width: ${bp.sm}) {
    font-size: 44px;
    letter-spacing: 10px;
  }

  @media (min-width: ${bp.md}) {
    font-size: 50px;
    letter-spacing: 14px;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 68px;
    letter-spacing: 17px;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 14px;
  margin: 0;
  color: #a16a38;
  font-family: var(--font-praise);
  letter-spacing: 4px;

  @media (min-width: ${bp.xs}) {
    font-size: 16px;
    letter-spacing: 6px;
  }

  @media (min-width: ${bp.sm}) {
    font-size: 30px;
    letter-spacing: 5px;
  }

  @media (min-width: ${bp.md}) {
    font-size: 30px;
    letter-spacing: 5px;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 50px;
    letter-spacing: 8px;
  }
`;

export const HeroSubtexts = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  font-family: var(--font-sortsMillGoudy);
  color: #e7e7e6;
  padding: 2rem;

  @media (min-width: ${bp.sm}) {
    font-size: 18px;
    line-height: 28px;
    padding: 2rem 2rem 1rem;
  }

  @media (min-width: ${bp.md}) {
    font-size: 1.5rem;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 1.5rem;
    line-height: 40px;
    padding: 4rem 12rem;
  }
`;

export const HeroButton = styled.button`
  padding: 0.8rem 2rem;
  background: var(--primary);
  color: var(--secondary);
  border: 1px solid #a16a38;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
  font-family: 'Playfair Display', serif;
  color: #e7e7e6;
  letter-spacing: 2px;

  &:hover {
    background: var(--white);
    transform: translateY(-3px);
  }

  @media (min-width: ${bp.lg}) {
    font-size: 1.1rem;
  }
`;
