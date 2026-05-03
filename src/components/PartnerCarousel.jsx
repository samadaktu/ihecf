import { motion } from 'framer-motion';

const PartnerCarousel = () => {
  // Array of 33 logos from public/partners/
  const logos = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '18.jpg', '19.jpg', '20.jpg',
    '21.jpg', '22.jpg', '23.jpg', '24.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg',
    '31.jpg', '32.jpg', '33.jpg', '34.jpg', '35.jpg', '36.jpg'
  ];

  // Double the logos to create a seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-10 bg-white/50 backdrop-blur-sm">
      {/* Gradient Overlays for smooth fade in/out */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-gray-50 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-gray-50 to-transparent z-10" />

      <motion.div 
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -100 * logos.length], // Slide by the width of one full set of logos
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 50, // Adjust speed here
            ease: "linear",
          },
        }}
        whileHover={{ animationPlayState: 'paused' }} // Stop on hover
        style={{ width: 'max-content' }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div 
            key={index} 
            className="inline-flex items-center justify-center mx-6 md:mx-12 w-24 md:w-32 h-16 md:h-20 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
          >
            <img 
              src={`/partners/${logo}`} 
              alt={`Partner ${index}`} 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PartnerCarousel;
