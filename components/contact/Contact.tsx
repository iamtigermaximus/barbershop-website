'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { breakpoints as bp } from '../styles/theme';
import LogoImage from '../assets/LogoCopper.png';
import { TextDivider } from '../common/common.styles';

const ContactContainer = styled.section`
  padding: 4rem 1rem;
  background: black;
  scroll-margin-top: 80px;
  color: #e7e7e6;

  @media (min-width: ${bp.md}) {
    padding: 6rem 2rem;
  }
`;

// const ContactContainer = styled.section`
//   position: relative;
//   padding: 4rem 1rem;
//   background: black;
//   scroll-margin-top: 80px;
//   color: #e7e7e6;
//   overflow: hidden;
//   z-index: 1;

//   /* Background image */
//   background-image: url('/images/GreenLogo.png'); // update path if needed
//   background-size: contain;
//   background-position: center;
//   background-repeat: no-repeat;

//   /* Dark overlay */
//   &::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     background: rgba(0, 0, 0, 0.88); // adjust to 0.98 or 1 for more darkness
//     z-index: -1;
//   }

//   @media (min-width: ${bp.md}) {
//     padding: 6rem 2rem;
//   }
// `;

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

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: ${bp.lg}) {
    flex-direction: row;
  }
`;

const BarberCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 4rem;
`;

const BarberImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1/1;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1em;
  border: 3px solid var(--primary);
`;

const BarberName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0;
  font-family: var(--font-sortsMillGoudy);
  color: #e7e7e6;
`;

const BarberTitle = styled.p`
  font-size: 1.2rem;
  font-family: var(--font-sortsMillGoudy);
  color: #e7e7e6;
  margin-bottom: 0;
`;

const ContactInfo = styled.div`
  flex: 1;
  padding: 2rem 4rem;

  @media (min-width: ${bp.md}) {
    padding: 2rem 4rem;
  }

  @media (min-width: ${bp.lg}) {
    padding: 2rem 4rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  svg {
    flex-shrink: 0;
    color: var(--primary);
  }

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

const MapContainer = styled.div`
  iframe {
    width: 100%;
    height: 400px;
    border: none;
    border-radius: 8px;
    margin-top: 3rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

// const ContactForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
//   margin-top: 2rem;

//   input,
//   textarea {
//     padding: 0.8rem;
//     background: rgba(255, 255, 255, 0.1);
//     border: 1px solid var(--primary);
//     border-radius: 4px;
//     color: var(--white);
//     font-family: inherit;
//     font-size: 1rem;

//     &::placeholder {
//       color: var(--text-light);
//     }

//     &:focus {
//       outline: none;
//       border-color: var(--white);
//     }
//   }

//   textarea {
//     min-height: 150px;
//     resize: vertical;
//   }

//   button {
//     padding: 0.8rem 2rem;
//     background: var(--primary);
//     color: var(--secondary);
//     border: none;
//     font-size: 1rem;
//     font-weight: 600;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     border-radius: 4px;
//     align-self: flex-start;

//     &:hover {
//       background: var(--white);
//     }
//   }
// `;

// const SectionTitle = styled.h1`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   font-size: 1rem;
//   color: #a16a38;
//   font-weight: 700;

//   @media (min-width: ${bp.lg}) {
//     padding: 0 10rem;
//     font-size: 2rem;
//   }
// `;

const OpeningHoursContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 1rem;
  font-weight: 700;
  gap: 1rem;

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

const OpeningHoursInfoItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-sortsMillGoudy);
  color: #e7e7e6;

  svg {
    flex-shrink: 0;
    color: var(--primary);
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      {/* <SectionTitle>Contact</SectionTitle> */}
      <TextDivider>
        <span>Contact</span>
      </TextDivider>
      <ContactContent>
        <BarberCard>
          <BarberImage>
            <Image
              src={LogoImage}
              alt="Master Barber John Doe"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </BarberImage>
          <BarberName>Jayson Parturi</BarberName>
          <BarberTitle>Master Barber </BarberTitle>
        </BarberCard>

        <ContactInfo>
          <InfoItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Mannerheimintie 25B, 00250 Helsinki</span>
          </InfoItem>

          <InfoItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>044 9894178</span>
          </InfoItem>

          <InfoItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span>bookings@jaysonparturi.com</span>
          </InfoItem>

          <OpeningHoursInfoItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <OpeningHoursContainer>
              <span>Monday: 9am - 7pm</span>
              <span>Tuesday: 9am - 7pm</span>
              <span>Wednesday: 9am - 7pm</span>
              <span>Thursday: 9am - 7pm</span>
              <span>Friday: 9am - 7pm</span>
              <span>Saturday: CLOSED</span>
              <span>Sunday: 10am - 4pm</span>
            </OpeningHoursContainer>{' '}
          </OpeningHoursInfoItem>

          {/* <ContactForm>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </ContactForm> */}
        </ContactInfo>
      </ContactContent>

      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.7382597927885!2d24.920283577198415!3d60.18506447503996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920b00299c9b9f%3A0x7fc1cd540eac6330!2sJayson%20Parturi!5e0!3m2!1sen!2sfi!4v1749613334766!5m2!1sen!2sfi"
          allowFullScreen
          loading="lazy"
          title="Barbershop Location"
        ></iframe>
      </MapContainer>
    </ContactContainer>
  );
};

export default Contact;
