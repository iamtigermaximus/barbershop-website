'use client';

import React from 'react';
import { TextDivider } from '../common/common.styles';
import {
  GalleryContainer,
  GalleryFlex,
  GalleryImage,
  galleryImages,
  GalleryItem,
} from './Gallery.styles';

const Gallery = () => {
  return (
    <GalleryContainer id="gallery">
      <TextDivider>
        <span>Gallery</span>
      </TextDivider>
      <GalleryFlex>
        {galleryImages.map((image) => (
          <GalleryItem key={image.id}>
            <GalleryImage
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: 'contain' }}
              priority={image.id <= 4}
            />
          </GalleryItem>
        ))}
      </GalleryFlex>
    </GalleryContainer>
  );
};

export default Gallery;
