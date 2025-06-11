'use client';
import styled from 'styled-components';
import { breakpoints as bp } from '../styles/theme';

export const Title = styled.h1`
  color: red;
  font-size: 2.5rem;
  text-align: center;
  margin-top: 60px;
`;

export const Divider = styled.hr`
  width: 100%;
  max-width: 800px;
  height: 1px;
  margin: 4rem auto;
  background-color: black; /* fallback if var isn't set */
  border: none;
  opacity: 0.4; /* optional: softens it a bit */
  color: white;
`;

export const TextDivider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 3rem;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 0.1px solid #e7e7e6;
  }

  &::before {
    margin-right: 1rem;
  }

  &::after {
    margin-left: 1rem;
  }

  span {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    color: #a16a38;
    font-weight: 700;

    @media (min-width: ${bp.lg}) {
      /* padding: 0 8rem; */
      font-size: 2rem;
    }
  }
`;
