export const HeroSection: React.FC = () => {
  return (
    <section 
      data-aos="fade-up" 
      className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="w-full max-w-7xl mt-20 sm:mt-24 md:mt-32 lg:mt-40">
        {/* Title */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center lg:text-left">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            Eclypse
            <sup className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl align-super ml-1">
              ®
            </sup>
          </h1>
        </div>

        {/* Video Container */}
        <div className="relative rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-xl border border-gray-800 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover rounded-lg sm:rounded-xl lg:rounded-2xl"
            style={{ minHeight: '300px' }}
          >
            <source src="./video-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/30 rounded-lg sm:rounded-xl lg:rounded-2xl"></div>
          
          {/* Optional Content Overlay on Video */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl mx-auto px-4 sm:px-6">
              {/* Add any overlay content here if needed */}
            </div>
          </div>
        </div>

        {/* Additional Content Below Video (if needed) */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <div className="text-white/80 max-w-3xl mx-auto">
            {/* Add any additional content below the video here */}
          </div>
        </div>
      </div>
    </section>
  );
};