'use client';

import React from 'react';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import {
  FooterContainer,
  SocialLinks,
  SocialLink,
  Copyright,
} from './Footer.styles';

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
