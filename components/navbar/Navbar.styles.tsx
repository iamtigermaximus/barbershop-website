'use client';

import styled from 'styled-components';
import { breakpoints as bp } from '../styles/theme';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  color: var(--white);
  background: black;
  padding-top: 1rem;
  z-index: 999;

  @media (min-width: ${bp.lg}) {
  }
`;

// const Logo = styled.div`
//   font-family: 'Playfair Display', serif;
//   font-size: 1.8rem;
//   font-weight: 700;
//   color: var(--primary);

//   span {
//     color: var(--white);
//   }
// `;

// const NavLinks = styled.ul`
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   @media (min-width: ${bp.lg}) {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

// const NavLinksContainer = styled.div`
//   border: 1px solid gold;
//   align-items: center;
//   justify-content: space-evenly;
//   display: flex;
//   width: 100%;
// `;

export const LeftLinks = styled.div`
  @media (min-width: ${bp.md}) {
    display: flex;
    gap: 1rem;
    /* flex: 1; */
    justify-content: flex-end;
  }
  @media (min-width: ${bp.lg}) {
    gap: 2rem;
  }
`;

export const RightLinks = styled.div`
  @media (min-width: ${bp.md}) {
    display: flex;
    gap: 1rem;
    /* flex: 1; */
    justify-content: flex-start;
  }

  @media (min-width: ${bp.lg}) {
    gap: 2rem;
  }
`;

// const LogoContainer = styled.div`
//   /* display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%; */

//   @media (min-width: ${bp.lg}) {
//     /* padding: 0 2rem; */
//     /* flex-shrink: 0;
//     width: 270px;
//     height: 250px; */
//   }

//   position: relative;
//   width: 300px;
//   height: 150px;

//   @media (min-width: ${bp.xs}) {
//     width: 350px;
//     height: 200px;
//   }

//   @media (min-width: ${bp.md}) {
//     width: 350px;
//     height: 200px;
//   }

//   @media (min-width: ${bp.lg}) {
//     width: 400px;
//     height: 200px;
//   }
// `;

export const LogoContainer = styled.div<{ $scrolled: boolean }>`
  position: relative;
  transition: all 0.3s ease-in-out;
  width: ${({ $scrolled }) => ($scrolled ? '200px' : '200px')};
  height: ${({ $scrolled }) => ($scrolled ? '100px' : '150px')};

  @media (min-width: ${bp.md}) {
    width: ${({ $scrolled }) => ($scrolled ? '250px' : '350px')};
    height: ${({ $scrolled }) => ($scrolled ? '130px' : '200px')};
  }

  @media (min-width: ${bp.lg}) {
    width: ${({ $scrolled }) => ($scrolled ? '300px' : '400px')};
    height: ${({ $scrolled }) => ($scrolled ? '150px' : '200px')};
  }
`;

export const ScissorContainer = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; */
  /* padding: 0.5rem; */

  position: relative;
  width: 50px;
  height: 50px;

  @media (min-width: ${bp.xs}) {
  }

  @media (min-width: ${bp.md}) {
  }

  @media (min-width: ${bp.lg}) {
  }
`;

export const NavLink = styled.li`
  display: none;

  @media (min-width: ${bp.md}) {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 180px;

    a {
      font-weight: 700;
      transition: color 0.3s ease;
      position: relative;
      font-size: 1rem;
      text-decoration: none;
      font-family: var(--font-sortsMillGoudy);
      color: #e7e7e6;

      &:hover {
        color: #a16a38;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--primary);
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  @media (min-width: ${bp.lg}) {
    /* border: 1px solid white; */

    a {
      font-weight: 700;
      transition: color 0.3s ease;
      position: relative;
      font-size: 1.5rem;
      text-decoration: none;
      color: #e7e7e6;

      &:hover {
        color: #a16a38;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--primary);
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;

// const MobileMenuButton = styled.div`
//   display: none;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block;
//   }

//   div {
//     width: 25px;
//     height: 3px;
//     background: var(--white);
//     margin: 5px;
//     transition: all 0.3s ease;
//   }
// `;
