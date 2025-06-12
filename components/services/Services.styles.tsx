'use client';

import styled from 'styled-components';
import { breakpoints as bp } from '../styles/theme';
import Scissor1 from '../assets/scissor1.png';

export const services = [
  {
    id: 1,
    title: 'Service 1',
    description:
      'Precision haircut using clippers and scissors for a clean, sharp look',
    price: '$20',

    icon: Scissor1,
  },
  {
    id: 2,
    title: 'Service 2',
    description: 'Seamless fade from skin to hair with crisp detailing',
    price: '$20',
    icon: Scissor1,
  },
  {
    id: 3,
    title: 'Service 3',
    description: 'Expert shaping and detailing with hot towel treatment',
    price: '$15',
    icon: Scissor1,
  },
  // {
  //   id: 4,
  //   title: 'Service 4',
  //   description: 'Expert shaping and detailing with hot towel treatment',
  //   price: '$10',
  //   icon: Scissor1,
  // },
];

export const ServicesContainer = styled.section`
  padding: 4rem 1rem;
  background: black;
  scroll-margin-top: 80px;

  @media (min-width: ${bp.md}) {
    padding: 6rem 2rem;
  }
`;

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

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;

  @media (min-width: ${bp.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${bp.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ServiceCard = styled.div`
  background: var(--secondary);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;
  border: 1px solid #a16a38;

  &:hover {
    transform: translateY(-5px);
    border-color: #719274;
  }
`;

export const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  position: relative;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: var(--font-sortsMillGoudy);
  color: #e7e7e6;
`;

export const ServiceDescription = styled.p`
  font-family: var(--font-sortsMillGoudy);
  color: #e7e7e6;
  margin-bottom: 1.5rem;
  min-height: 60px;
`;

export const ServiceMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: var(--font-sortsMillGoudy);
  color: #e7e7e6;
  font-weight: 700;
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
//     /* padding: 0 8rem; */
//     font-size: 2rem;
//   }
// `;
