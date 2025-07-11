import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../Icon';
import { portfolioData } from '../../data/portfolioData';
import type { Experience } from '../../types/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const ExperienceCard: FC<{ experience: Experience }> = ({ experience }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  const isCurrentPosition = !experience.endDate;

  return (
    <motion.div
      variants={itemVariants}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-3 h-3 bg-primary-600 rounded-full transform -translate-x-1/2 border-4 border-white dark:border-gray-900 shadow-md"></div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ml-4 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
          <div className="flex items-center mb-2 lg:mb-0">
            {experience.companyLogo && (
              <img
                src={experience.companyLogo}
                alt={`${experience.company} logo`}
                className="w-12 h-12 rounded-lg mr-4 object-contain bg-gray-50 dark:bg-gray-700 p-1"
              />
            )}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.position}</h3>
              <div className="flex items-center text-primary-600 dark:text-primary-400">
                {experience.companyUrl ? (
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    {experience.company}
                  </a>
                ) : (
                  <span className="font-semibold">{experience.company}</span>
                )}
                <Icon name="ExternalLink" size={14} className="ml-1" />
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center text-gray-600 dark:text-gray-400 lg:justify-end">
              <Icon name="Calendar" size={16} className="mr-2" />
              <span className="text-sm">
                {formatDate(experience.startDate)} - {
                  isCurrentPosition ? (
                    <span className="text-green-600 dark:text-green-400 font-medium">Present</span>
                  ) : (
                    formatDate(experience.endDate!)
                  )
                }
              </span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1 lg:justify-end">
              <Icon name="MapPin" size={16} className="mr-2" />
              <span className="text-sm">{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {experience.description}
        </p>

        {/* Achievements */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
            <Icon name="Trophy" size={16} className="mr-2 text-yellow-600 dark:text-yellow-400" />
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, achIndex) => (
              <li key={achIndex} className="flex items-start">
                <Icon name="ChevronRight" size={14} className="mr-2 mt-1 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
            <Icon name="Code" size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="skill-badge"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ExperienceSection: FC = () => {
  const { experience } = portfolioData;

  const totalYears = () => {
    const currentDate = new Date();
    const firstJob = new Date(experience[experience.length - 1]?.startDate || '2018-01-01');
    const years = (currentDate.getTime() - firstJob.getTime()) / (1000 * 60 * 60 * 24 * 365);
    return Math.floor(years);
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-width section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A timeline of my professional journey, showcasing growth, achievements, and the technologies I've worked with
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">{totalYears()}+</div>
              <div className="text-gray-700 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{experience.length}</div>
              <div className="text-gray-700 dark:text-gray-300">Companies</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {experience.reduce((sum, exp) => sum + exp.achievements.length, 0)}
              </div>
              <div className="text-gray-700 dark:text-gray-300">Key Achievements</div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {experience.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Want to Know More?</h3>
              <p className="text-gray-300 dark:text-gray-100 mb-6 max-w-2xl mx-auto">
                Let's discuss how my experience can contribute to your team's success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Get In Touch
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 dark:bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors border border-gray-600 dark:border-gray-500"
                >
                  <Icon name="Download" size={20} className="mr-2" />
                  Full Resume
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 