import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CustomerTestimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Understated, but unforgettable. It feels like it was made for me",
      author: "Random Woman",
      location: "NY, USA",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      quote: "The perfect blend of elegance and comfort. Absolutely stunning quality.",
      author: "Sarah Johnson",
      location: "LA, USA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      quote: "Every detail is thoughtfully crafted. This is luxury redefined.",
      author: "Emily Chen",
      location: "SF, USA",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section data-aos="fade-up" className="bg-black text-white py-24 px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-sm font-light tracking-[0.2em] uppercase text-gray-400 mb-4">
            OUR CUSTOMERS
          </h2>
        </div>

        <div className="flex items-center justify-between">
          {/* Main testimonial content */}
          <div className="flex-1 max-w-4xl">
            {/* Quote icon */}
            <div className="mb-8">
              <svg 
                width="48" 
                height="36" 
                viewBox="0 0 48 36" 
                fill="none" 
                className="text-white"
              >
                <path 
                  d="M0 36V20.4C0 9.12 4.8 3.6 14.4 3.6V0C6.24 0 0 6.48 0 14.4V18H10.8V36H0ZM25.2 36V20.4C25.2 9.12 30 3.6 39.6 3.6V0C31.44 0 25.2 6.48 25.2 14.4V18H36V36H25.2Z" 
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Quote text */}
            <blockquote className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-12 text-white">
              {testimonials[currentTestimonial].quote}
            </blockquote>

            {/* Author info */}
            <div className="space-y-2">
              <div className="text-xl font-medium text-white">
                {testimonials[currentTestimonial].author}
              </div>
              <div className="text-lg text-gray-400">
                {testimonials[currentTestimonial].location}
              </div>
            </div>
          </div>

          {/* Right side - Navigation */}
          <div className="flex flex-col items-center space-y-6 ml-12">
            {/* Navigation arrow up */}
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 rotate-90" />
            </button>

            {/* Customer images */}
            <div className="flex flex-col space-y-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => goToTestimonial(index)}
                  className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'border-white scale-110' 
                      : 'border-gray-600 hover:border-gray-400'
                  }`}
                >
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Navigation arrow down */}
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};