import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  CloudIcon,
  ShieldCheckIcon,
  CircleStackIcon,
  CommandLineIcon,
  CubeIcon,
} from '@heroicons/react/24/outline';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  proficiency: number;
  category: string;
}

const skills: Skill[] = [
  { name: "Python", icon: CodeBracketIcon, proficiency: 90, category: "Languages" },
  { name: "React & Node.js", icon: CodeBracketIcon, proficiency: 85, category: "Languages" },
  { name: "TypeScript", icon: CodeBracketIcon, proficiency: 80, category: "Languages" },
  { name: "AWS (Lambda/S3/EventBridge)", icon: CloudIcon, proficiency: 85, category: "Cloud" },
  { name: "Docker & Terraform", icon: CubeIcon, proficiency: 80, category: "DevOps" },
  { name: "Linux", icon: CommandLineIcon, proficiency: 90, category: "Systems" },
  { name: "Wazuh & Splunk", icon: ShieldCheckIcon, proficiency: 85, category: "Security" },
  { name: "Nessus & WireGuard VPN", icon: ShieldCheckIcon, proficiency: 80, category: "Security" },
  { name: "Pandas & PyTorch", icon: CircleStackIcon, proficiency: 85, category: "Data" },
];

export default function Skills() {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0">
                  <skill.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {skill.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Category Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

