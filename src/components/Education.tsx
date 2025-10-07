import { motion } from 'framer-motion';
import { AcademicCapIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

interface Degree {
  degree: string;
  institution: string;
  year: string;
  gpa?: string;
  honors?: string;
  transcript: string;
}

const education: Degree[] = [
  {
    degree: "M.S. in Cybersecurity Engineering",
    institution: "University of San Diego",
    year: "Expected 2026",
    gpa: "4.0",
    honors: "NSA/CAE-accredited",
    transcript: "/Website_NoahWilliamShaffer/myeducation/USD_Transcript.pdf"
  },
  {
    degree: "B.S. in Computer Science",
    institution: "Florida State University",
    year: "2024",
    transcript: "/Website_NoahWilliamShaffer/myeducation/FSU_Transcript.pdf"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Education
          </h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    <AcademicCapIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {edu.year}
                    </p>
                    
                    {edu.gpa && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                          GPA: {edu.gpa}
                        </span>
                        {edu.honors && (
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                            {edu.honors}
                          </span>
                        )}
                      </div>
                    )}

                    <a
                      href={edu.transcript}
                      download
                      className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors font-medium"
                    >
                      <DocumentTextIcon className="w-5 h-5" />
                      Download Transcript (PDF)
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

