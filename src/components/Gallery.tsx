import React, { useState } from 'react';
import { Translation } from '../hooks/useLanguage';
import { X } from 'lucide-react';

interface GalleryProps {
  t: Translation;
}

export const Gallery: React.FC<GalleryProps> = ({ t }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: '/images/91.webp',
    },
    {
      src: '/images/82.webp',
    },
    {
      src: '/images/45.webp',
    },
    {
      src: '/images/44.webp',
    },
    {
      src: '/images/119.webp',
    },
    {
      src: '/images/127.webp',
    },
    {
      src: '/images/92.webp',
    },
    {
      src: '/images/33.webp',
    },
    {
      src: '/images/3.webp',
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-poppins">
            {t.galleryTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-soft hover:shadow-card transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium font-open-sans">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-lime hover:bg-dark-green text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-soft font-poppins">
            {t.viewMorePhotos}
          </button>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-lime transition-colors bg-black/50 rounded-full p-2"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Zdjęcie z galerii"
                className="max-w-full max-h-full object-contain rounded-2xl shadow-card"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};