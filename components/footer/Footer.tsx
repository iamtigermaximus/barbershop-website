'use client';

import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #0a0a0a;
  padding: 2rem 1rem;
  border-top: 1px solid rgba(161, 106, 56, 0.3);
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 0 auto;
  max-width: 300px;
`;

const SocialLink = styled.a`
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

const Copyright = styled.p`
  text-align: center;
  font-family: var(--font-sortsMillGoudy);
  color: #e7e7e6;
  font-size: 0.8rem;
  margin-top: 1.5rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="#" aria-label="Instagram">
          <FaInstagram />
        </SocialLink>

        <SocialLink href="#" aria-label="Facebook">
          <FaFacebookF />
        </SocialLink>

        <SocialLink href="#" aria-label="TikTok">
          <FaTiktok />
        </SocialLink>
      </SocialLinks>

      <Copyright>
        &copy; {new Date().getFullYear()} Jayson Parturi. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
