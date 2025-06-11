'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import GreenLogo from '../assets/GreenLogo.png';
import { breakpoints as bp } from '../styles/theme';
import { TextDivider } from '../common/common.styles';

const StoryContainer = styled.section`
  color: var(--white);
  scroll-snap-align: start;
  background: black;
  scroll-margin-top: 210px;
`;

const StoryContent = styled.div`
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

const LogoColumn = styled.div`
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

const TextColumn = styled.div`
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

const SectionHeading = styled.h1`
  width: 100%;
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  color: #719274;
`;

const SectionSubtexts = styled.p`
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

const Story = () => {
  return (
    <>
      <StoryContainer id="story">
        <TextDivider>
          <span>Story</span>
        </TextDivider>
        <StoryContent>
          <LogoColumn>
            <Image
              src={GreenLogo}
              alt="Classic Cuts Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </LogoColumn>

          <TextColumn>
            {/* <SectionTitle>Story</SectionTitle> */}
            <SectionHeading>From Philippines to Finland</SectionHeading>
            <SectionSubtexts>
              What started with a pair of clippers and a passion for clean fades
              back in the Philippines has found its home in the heart of
              Finland. In 2024, a Filipino barber with a deep love for the craft
              — brought his skills, culture, and community spirit to a new
              place.
            </SectionSubtexts>
            <SectionSubtexts>
              Every cut here tells a story: one of hard work, attention to
              detail, and the belief that a good haircut can lift your
              confidence and brighten your day. Inspired by the classic
              barbershops back home and refined through dedication and care,
              this space is built not just for grooming, but for connection.
            </SectionSubtexts>
            <SectionSubtexts>
              We believe a haircut is more than just a service - it&apos;s an
              experience. That&apos;s why we&apos;ve created a space where men
              can relax, unwind, and leave looking and feeling their best.Come
              for the haircut. Stay for the atmosphere. Leave feeling like
              yourself — only sharper.
            </SectionSubtexts>
          </TextColumn>
        </StoryContent>
      </StoryContainer>
    </>
  );
};

export default Story;
