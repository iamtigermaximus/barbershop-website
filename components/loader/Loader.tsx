'use client';

import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import LogoImage from '../assets/LogoCopper.png';

// const spin = keyframes`
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// `;

// const LoaderContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: #0a0a0a;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 9999;
//   opacity: 1;
//   transition: opacity 0.5s ease-out;

//   &.fade-out {
//     opacity: 0;
//     pointer-events: none;
//   }
// `;

// const LoaderSpinner = styled.div`
//   width: 50px;
//   height: 50px;
//   border: 5px solid rgba(161, 106, 56, 0.3);
//   border-top: 5px solid #a16a38;
//   border-radius: 50%;
//   animation: ${spin} 1s linear infinite;
// `;

const fadeBounce = keyframes`
  0%, 100% {
    opacity: 0.7;
    transform: scale(0.95);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0a0a0a;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease-out;

  &.fade-out {
    opacity: 0;
    pointer-events: none;
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  animation: ${fadeBounce} 2s ease-in-out infinite;
`;

export const Loader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    /* <LoaderContainer className={isLoading ? '' : 'fade-out'}>
      <LoaderSpinner />
    </LoaderContainer> */
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
