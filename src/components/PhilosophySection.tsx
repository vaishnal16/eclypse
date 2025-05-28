import { ArrowRight } from "lucide-react";

export const PhilosophySection: React.FC = () => {
  return (
    <section data-aos="fade-up" className="bg-black text-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Philosophy Text */}
        <div className="max-w-5xl mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] mb-8 sm:mb-12 lg:mb-16 tracking-tight">
            Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
          </h2>
          
          <div className="inline-block">
            <a
              href="#learn-more"
              className="inline-flex items-center text-base sm:text-lg border-b border-white pb-1 hover:border-gray-400 transition-colors duration-300 group"
            >
              Learn more about Eclypse
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Media Grid */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Video - Takes full width on mobile, 2 columns on desktop */}
          <div className="md:col-span-2 lg:col-span-2 overflow-hidden rounded-lg bg-gray-900 h-64 sm:h-80 md:h-96 lg:h-[450px]">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/philosophy-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* First Image - Full width on mobile, 1 column on desktop */}
          <div className="md:col-span-1 lg:col-span-1 overflow-hidden rounded-lg relative group h-64 sm:h-80 md:h-96 lg:h-[450px]">
            <img
              src="/philosophy-image-1.jpg"
              alt="Red fabric texture detail"
              className="w-full h-full object-cover group-hover:brightness-50 transition-all duration-300"
            />
            {/* Image Overlay Text */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center px-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  Premium wool blend in signature vermillion
                </h3>
              </div>
            </div>
          </div>

          {/* Second Image - Half width on mobile (2 cols), 1 column on desktop */}
          <div className="col-span-1 overflow-hidden rounded-lg relative group h-64 sm:h-80 md:h-64 lg:h-[280px]">
            <img
              src="/philosophy-image-2.jpg"
              alt="Red garment detail"
              className="w-full h-full object-cover group-hover:brightness-50 transition-all duration-300"
            />
            {/* Image Overlay Text */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center px-4">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                  Discreet size pockets with clean finish 
                </h3>
              </div>
            </div>
          </div>
          
          {/* Third Image - Half width on mobile, 1 column on desktop */}
          <div className="col-span-1 overflow-hidden rounded-lg relative group h-64 sm:h-80 md:h-64 lg:h-[280px]">
            <img
              src="/philosophy-image-3.jpg"
              alt="Hands working on garment"
              className="w-full h-full object-cover group-hover:brightness-50 transition-all duration-300"
            />
            {/* Image Overlay Text */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center px-4">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                  Hand cut and assemble in small batches 
                </h3>
              </div>
            </div>
          </div>

          {/* Fourth Image - Full width on mobile, 1 column on desktop */}
          <div className="md:col-span-2 lg:col-span-1 overflow-hidden rounded-lg relative group h-64 sm:h-80 md:h-64 lg:h-[280px]">
            <img
              src="/logo-1.jpg"
              alt="Brand element"
              className="w-full h-full object-cover group-hover:brightness-50 transition-all duration-300"
            />
            {/* Image Overlay Text */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center px-4">
                <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                  Eclypse
                  <sup className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl align-super ml-1">®</sup>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo/Brand Element */}
        <div className="flex justify-center md:justify-end mt-8 sm:mt-10 lg:mt-12">
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center">
            <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-black rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};