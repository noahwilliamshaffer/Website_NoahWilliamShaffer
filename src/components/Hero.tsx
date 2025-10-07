import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import profilePic from '../../myeducation/PROFILE.png';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Noah William Shaffer
          </h1>
          <p className="text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 mb-6">
            Cybersecurity Engineer | Full-Stack Builder | Secure Systems Advocate
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Building secure, scalable systems with expertise in cloud architecture, 
            threat detection, and full-stack development.
          </p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={profilePic}
            alt="Noah William Shaffer"
            className="rounded-full shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-indigo-500 dark:border-indigo-400"
          />
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDownIcon className="w-8 h-8 text-gray-400 dark:text-gray-500" />
      </motion.div>
    </section>
  );
}

