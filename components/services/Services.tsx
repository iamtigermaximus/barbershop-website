'use client';

import React from 'react';
import Image from 'next/image';
import { TextDivider } from '../common/common.styles';
import {
  ServicesContainer,
  ServicesGrid,
  services,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  ServiceMeta,
} from './Services.styles';

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <TextDivider>
          <span>Services</span>
        </TextDivider>
        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <ServiceIcon>
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceMeta>
                <span>{service.price}</span>
              </ServiceMeta>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </>
  );
};

export default Services;
