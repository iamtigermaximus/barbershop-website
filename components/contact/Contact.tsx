'use client';

import React from 'react';
import LogoImage from '../assets/LogoCopper.png';
import { TextDivider } from '../common/common.styles';
import Image from 'next/image';
import {
  BarberCard,
  BarberImage,
  BarberName,
  BarberTitle,
  ContactContainer,
  ContactContent,
  ContactInfo,
  InfoItem,
  MapContainer,
  OpeningHoursContainer,
  OpeningHoursInfoItem,
} from './Contact.styles';

const Contact = () => {
  return (
    <ContactContainer id="contact">
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
          <BarberName>John Doe Parturi</BarberName>
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
            <span>Mannerheimintie 250B, 00250 Helsinki</span>
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
            <span>040 1234567</span>
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
            <span>bookings@johndoeparturi.com</span>
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
              <span>Saturday: 10am - 4pm</span>
              <span>Sunday: CLOSED</span>
            </OpeningHoursContainer>
          </OpeningHoursInfoItem>
        </ContactInfo>
      </ContactContent>

      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1359.5510495058081!2d24.962544755187675!3d60.18714866526504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692097eb9e31b73%3A0x95a8e1774f2a4243!2sKatri%20Valan%20puisto!5e0!3m2!1sen!2sfi!4v1753121769768!5m2!1sen!2sfi"
          loading="lazy"
          title="Barbershop Location"
        ></iframe>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.7382597927885!2d24.920283577198415!3d60.18506447503996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920b00299c9b9f%3A0x7fc1cd540eac6330!2sJayson%20Parturi!5e0!3m2!1sen!2sfi!4v1749613334766!5m2!1sen!2sfi"
          allowFullScreen
          loading="lazy"
          title="Barbershop Location"
        ></iframe> */}
      </MapContainer>
    </ContactContainer>
  );
};

export default Contact;
