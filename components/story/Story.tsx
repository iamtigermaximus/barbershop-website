'use client';

import React from 'react';
import Image from 'next/image';
import GreenLogo from '../assets/GreenLogo.png';
import { TextDivider } from '../common/common.styles';
import {
  StoryContainer,
  StoryContent,
  LogoColumn,
  TextColumn,
  SectionHeading,
  SectionSubtexts,
} from './Story.styles';
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
            <SectionHeading>From Lorem Ipsum to Finland</SectionHeading>
            <SectionSubtexts>
              What started with a pair of clippers and a passion for clean fades
              back in the Lorem Ipsum has found its home in the heart of
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
