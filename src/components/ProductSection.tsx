import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductSection: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState('');

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const navigate=useNavigate();

  return (
    <section data-aos="fade-up" className="bg-white py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-auto lg:h-[700px]">
          {/* Left side - Video */}
          <div className="w-full h-full overflow-hidden rounded-lg bg-gray-100">
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
          <div className="w-full h-full flex flex-col justify-between space-y-6">
            {/* Product description */}
            <div>
              <p className="text-gray-700 text-sm leading-relaxed">
                A tailored composition in motion. Cut from structured wool with a sculpted 
                shoulder and softened hem, this piece captures presence without force. Worn 
                here in the stillness of a city in motion.
              </p>
            </div>

            {/* Product images grid */}
            <div className="grid grid-cols-3 gap-3">
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
              <div className="text-2xl font-semibold text-black">₹ 7,999</div>
              <div className="text-sm text-gray-500">MRP incl. of all taxes</div>
            </div>

            {/* Size selection */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-700">Please select a size</span>
                <button className="text-sm text-gray-500 underline hover:text-gray-700">
                  Size chart
                </button>
              </div>
              
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-10 border rounded text-sm font-medium transition-colors ${
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
            <div className="flex gap-4 mt-auto">
              <button className="flex-1 border border-gray-300 bg-white text-black py-3 px-6 rounded hover:bg-gray-50 transition-colors font-medium">
                Add to Cart
              </button>
              <button className="flex-1 bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors font-medium"
               onClick={()=>navigate("/CheckoutPage")}
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