import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface Project {
  title: string;
  repo: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Wazuh_Siem",
    repo: "https://github.com/noahwilliamshaffer/Wazuh_Siem",
    description: "Built a complete SIEM environment integrating Wazuh, WireGuard VPN, Splunk, and Nessus. Aggregates and analyzes 3,000+ daily syslog events for threat detection, correlates vulnerability data with alerts, and provides dashboard visualization and VPN health monitoring. Demonstrates end-to-end log collection, threat correlation, and incident-response automation in a simulated enterprise network."
  },
  {
    title: "phishing-detection-engine",
    repo: "https://github.com/noahwilliamshaffer/phishing-detection-engine",
    description: "Developed an advanced URL scanning and reputation analysis system integrating OSINT feeds and automated threat intelligence to detect phishing, malware, and suspicious domains in real time."
  },
  {
    title: "automated-pentest-toolkit",
    repo: "https://github.com/noahwilliamshaffer/automated-pentest-toolkit",
    description: "Built a command-line penetration testing framework automating reconnaissance and exploitation via Nmap, SQLmap, and Hydra, producing structured reports for red-team and compliance assessments."
  },
  {
    title: "finance-data-pipeline",
    repo: "https://github.com/noahwilliamshaffer/finance-data-pipeline",
    description: "Implemented an event-driven AWS architecture that processes and visualizes Treasury and repo market data with Pandas dashboards and scoring models for real-time investment analytics."
  },
  {
    title: "youtube-video-generator",
    repo: "https://github.com/noahwilliamshaffer/youtube-video-generator",
    description: "Engineered an AI-driven pipeline that auto-generates, narrates, and uploads YouTube summary videos using GPT-4 scripting, ElevenLabs narration, and automated FFmpeg editing."
  },
  {
    title: "openai-chatbot",
    repo: "https://github.com/noahwilliamshaffer/openai-chatbot",
    description: "Designed a full-stack chatbot using OpenAI's API with Node.js, Docker, and CI/CD automation, implementing Jest testing and linting pipelines for scalable conversational-AI deployment."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Explore my work on{' '}
            <a
              href="https://github.com/noahwilliamshaffer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              GitHub
            </a>
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

