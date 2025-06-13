'use client';

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #0a0a0a;
  padding: 2rem 1rem;
  border-top: 1px solid rgba(161, 106, 56, 0.3);
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 0 auto;
  max-width: 300px;
`;

export const SocialLink = styled.a`
  color: #a16a38;
  background: rgba(161, 106, 56, 0.1);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(161, 106, 56, 0.3);

  &:hover {
    background: rgba(161, 106, 56, 0.2);
    transform: translateY(-3px);
    border-color: #a16a38;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Copyright = styled.p`
  text-align: center;
  font-family: var(--font-sortsMillGoudy);
  color: #e5e4e2;
  font-size: 0.8rem;
  margin-top: 1.5rem;
`;
