'use client';

import Image from 'next/image';
import LogoImage from '../assets/LogoCopper.png';
import { LoaderContainer, LogoWrapper } from './Loader.styles';

export const Loader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <LoaderContainer className={isLoading ? '' : 'fade-out'}>
      <LogoWrapper>
        <Image
          src={LogoImage}
          alt="Loading logo"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </LogoWrapper>
    </LoaderContainer>
  );
};
