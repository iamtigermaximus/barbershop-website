'use client';

import styled from 'styled-components';
import { breakpoints as bp } from '../styles/theme';

export const StoryContainer = styled.section`
  color: var(--white);
  scroll-snap-align: start;
  background: black;
  scroll-margin-top: 210px;
`;

export const StoryContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (min-width: ${bp.md}) {
    flex-direction: column;
  }

  @media (min-width: ${bp.lg}) {
    flex-direction: row;
  }
`;

export const LogoColumn = styled.div`
  /* width: 300px;
  height: 150px; */
  display: none;

  @media (min-width: ${bp.xs}) {
  }

  @media (min-width: ${bp.sm}) {
  }

  @media (min-width: ${bp.md}) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;
    width: 350px;
    height: 300px;
  }

  @media (min-width: ${bp.lg}) {
  }
`;

// const LogoImage = styled(Image)`
//   width: 100%;
// `;

export const TextColumn = styled.div`
  font-size: 1rem;
  margin-bottom: 2rem;
  font-family: var(--font-sortsMillGoudy);
  color: #e7e7e6;
  padding: 2rem;
  text-align: left;

  @media (min-width: ${bp.md}) {
    font-size: 1.5rem;
    max-width: 800px;
    padding: 0 3rem;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 1.5rem;
    max-width: 800px;
  }
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
//     font-size: 2rem;
//   }
// `;

export const SectionHeading = styled.h1`
  width: 100%;
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  color: #719274;
`;

export const SectionSubtexts = styled.p`
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
