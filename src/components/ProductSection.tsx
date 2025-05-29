import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductSection: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState('');

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const navigate = useNavigate();

  return (
    <section data-aos="fade-up" className="bg-white py-6 sm:py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Left side - Video */}
          <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[700px] overflow-hidden rounded-lg bg-gray-100 order-1 xl:order-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/philosophy-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right side - Product details */}
          <div className="w-full flex flex-col justify-between space-y-4 sm:space-y-6 order-2 xl:order-2">
            {/* Product description */}
            <div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                A tailored composition in motion. Cut from structured wool with a sculpted 
                shoulder and softened hem, this piece captures presence without force. Worn 
                here in the stillness of a city in motion.
              </p>
            </div>

            {/* Product images grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="/product-image-1.jpg"
                  alt="Vermilion blazer front"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="/product-image-2.jpg"
                  alt="Vermilion blazer side"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="/product-image-3.jpg"
                  alt="Vermilion blazer back"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Price */}
            <div>
              <div className="text-xl sm:text-2xl font-semibold text-black">₹ 7,999</div>
              <div className="text-xs sm:text-sm text-gray-500">MRP incl. of all taxes</div>
            </div>

            {/* Size selection */}
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-sm sm:text-base text-gray-700">Please select a size</span>
                <button className="text-xs sm:text-sm text-gray-500 underline hover:text-gray-700 transition-colors">
                  Size chart
                </button>
              </div>
              
              <div className="flex gap-2 flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-8 sm:w-12 sm:h-10 border rounded text-xs sm:text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto pt-4">
              <button className="flex-1 border border-gray-300 bg-white text-black py-3 px-4 sm:px-6 rounded hover:bg-gray-50 transition-colors font-medium text-sm sm:text-base">
                Add to Cart
              </button>
              <button 
                className="flex-1 bg-black text-white py-3 px-4 sm:px-6 rounded hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base"
                onClick={() => navigate("/CheckoutPage")}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};