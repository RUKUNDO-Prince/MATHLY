import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className=" text-black py-20 md:py-32 lg:py-48">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <motion.div 
          className="w-full md:w-1/2 mb-12 md:mb-0 px-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Control your financial future easily with <span className="text-yellow-400">Binexopay</span>
          </h1>
          <p className="text-lg lg:text-xl mb-6">
            We facilitate payments for your convenience. Ensure your transactions are straightforward and secure.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-yellow-500 transition duration-300"
          >
            <span>Create Account</span>
            <FaArrowRight />
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="w-full md:w-1/2 px-4 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <img 
            src="/hero.png" 
            alt="Phone Preview" 
            className="w-80 lg:w-96 object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
