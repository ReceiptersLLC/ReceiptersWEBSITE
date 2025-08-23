"use client";

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

// Define a type for a single testimonial object
interface Testimonial {
  nameKey: string;
  quoteKey: string;
  rating: number;
}

export default function Testimonials() {
  const { t, ready } = useTranslation('common');
  const [isMounted, setIsMounted] = useState(false);

  // Define the testimonials data using keys from the i18n JSON
  const testimonials: Testimonial[] = [
    {
      nameKey: "Leonard Ochieng",
      quoteKey: "I love the paperless solution",
      rating: 5,
    },
    {
      nameKey: "Tracy M ",
      quoteKey: "Simple, but powerful features. ",
      rating: 5,
    },
    {
      nameKey: "Lucy Anyika",
      quoteKey: "Great experience from start to the end", 
      rating: 5,
    },
    {
      nameKey: "Hazel Linda",
      quoteKey: "A game-changer for my business",
      rating: 5,
    },
  ];

  // Duplicate the array to create a seamless infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    setIsMounted(true); // Ensure component is mounted before animation starts
  }, []);

  if (!ready || !isMounted) {
    return null; // Or render a loading spinner/skeleton
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs sm:text-sm font-medium text-center uppercase mb-3 sm:mb-4 tracking-wider">
          {t('landing.testimonials.subtitle')}
        </h2>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 leading-tight">
          {t('landing.testimonials.customerSatisfaction')}
        </h3>

        {/* The outer container hides the overflow and sets the animation */}
        <div className="overflow-hidden whitespace-nowrap">
          {/* This container will move continuously from right to left */}
          <div className="inline-block animate-marquee">
            {allTestimonials.map((testimonial, index) => (
              <div
                key={`testimonial-${index}`}
                className="inline-block w-[280px] sm:w-[320px] lg:w-[380px] bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm mx-3 flex-shrink-0"
              >
                <div className="h-4 sm:h-5 w-full mb-4 sm:mb-6 relative flex flex-row items-center gap-1">
                  {/* Star rating based on the testimonial data */}
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={`star-${index}-${i}`}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 18 17"
                      height="100%">
                      <path
                        d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                        className="fill-primary"
                      ></path>
                    </svg>
                  ))}
                </div>
                {/* Reduced font size for the quote */}
                <div className="text-base sm:text-lg lg:text-xl font-semibold leading-relaxed mb-4 sm:mb-6">
                  {t(testimonial.quoteKey).replace("It's the best paperless solution", '<br /> It\'s the best paperless solution')}
                </div>
                {/* Reduced font size for the customer name */}
                <div className="text-sm sm:text-base font-medium">
                  {t(testimonial.nameKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}