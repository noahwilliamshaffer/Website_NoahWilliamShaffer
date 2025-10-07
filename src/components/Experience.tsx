import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  recommendation?: {
    url: string;
    text: string;
  };
}

const experience: Job[] = [
  {
    title: "Quantitative Analyst & Developer",
    company: "Curvature Securities",
    location: "Remote",
    period: "2023 - 2024",
    responsibilities: [
      "Developed automated trading algorithms and data pipelines for Treasury and repo market analysis",
      "Built real-time investment analytics dashboards using Python, Pandas, and AWS",
      "Implemented event-driven architectures with Lambda, S3, and EventBridge for financial data processing",
      "Created scoring models for portfolio optimization and risk assessment"
    ],
    recommendation: {
      url: "/Website_NoahWilliamShaffer/myeducation/Letter_of_Recommendation_Terry_Pigott_for_Noah_Shaffer (2).pdf",
      text: "Letter of Recommendation from Terry Pigott, Portfolio Manager at Glacier Peak Capital (Curvature Securities)"
    }
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Experience
          </h2>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    <BriefcaseIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {job.title}
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">
                      {job.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {job.location} • {job.period}
                    </p>
                    
                    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {resp}
                        </li>
                      ))}
                    </ul>

                    {job.recommendation && (
                      <motion.a
                        href={job.recommendation.url}
                        download
                        className="text-blue-600 dark:text-blue-400 hover:underline block mt-3"
                        whileHover={{ scale: 1.05 }}
                      >
                        {job.recommendation.text}
                      </motion.a>
                    )}
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

