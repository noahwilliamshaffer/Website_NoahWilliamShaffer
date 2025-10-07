import { motion } from 'framer-motion';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <p>
              I'm a cybersecurity engineer and full-stack developer passionate about building 
              secure, scalable systems. With a strong foundation in computer science and 
              specialized training in cybersecurity, I bring both theoretical knowledge and 
              practical experience to every project.
            </p>
            
            <p>
              My work spans from implementing enterprise-grade SIEM solutions and threat 
              detection systems to developing full-stack applications with modern cloud 
              architectures. I believe in the power of automation, clean code, and 
              security-first design principles.
            </p>

            {/* Quote from Dr. Majeed */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-l-4 border-indigo-500 pl-6 py-4 bg-gray-50 dark:bg-gray-800 rounded-r-lg my-8"
            >
              <p className="italic text-gray-800 dark:text-gray-200">
                "Noah is disciplined, ethically grounded, and technically sharp—demonstrating 
                strength in secure network architecture, cloud operations, VPN design, and 
                logging/alerting workflows."
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                — Dr. Haydar Majeed, Program Director, USD Cybersecurity Engineering
              </p>
            </motion.div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <a
                href="/Website_NoahWilliamShaffer/myeducation/NoahWilliamShaffer_Resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <ArrowDownTrayIcon className="w-5 h-5" />
                Download Resume
              </a>
              <a
                href="https://github.com/noahwilliamshaffer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

