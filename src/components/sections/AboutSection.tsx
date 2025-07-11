import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../Icon';
import { portfolioData } from '../../data/portfolioData';
import { handleResumeAction } from '../../utils/resumeDownload';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const AboutSection: FC = () => {
  const { personalInfo, about } = portfolioData;

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-width section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get to know me better - my journey, passions, and what drives me as a developer
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
            {/* Profile Image & Stats */}
            <motion.div variants={itemVariants} className="flex justify-center order-first lg:order-first">
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Stats Cards - responsive positioning */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 sm:p-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-1.5 sm:p-2 rounded-lg">
                      <Icon name="Calendar" size={18} className="text-primary-600 dark:text-primary-400 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">5+</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 sm:p-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-1.5 sm:p-2 rounded-lg">
                      <Icon name="Code" size={18} className="text-purple-600 dark:text-purple-400 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">11+</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  My Story
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {about.summary}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {about.detailedBio}
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Info</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Mail" size={16} className="text-primary-600 dark:text-primary-400 mr-3" />
                    <span className="text-gray-600 dark:text-gray-300">{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MapPin" size={16} className="text-primary-600 dark:text-primary-400 mr-3" />
                    <span className="text-gray-600 dark:text-gray-300">{personalInfo.location}</span>
                  </div>
                  {personalInfo.website && (
                    <div className="flex items-center">
                      <Icon name="Globe" size={16} className="text-primary-600 dark:text-primary-400 mr-3" />
                      <a 
                        href={personalInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      >
                        {personalInfo.website.replace('https://', '')}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interests, Values, and Fun Facts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Interests */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Interests</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {about.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Values */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Values</h3>
              <div className="space-y-2">
                {about.values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center"
                  >
                    <Icon name="Check" size={16} className="text-green-600 dark:text-green-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Fun Facts */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} className="text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Fun Facts</h3>
              <div className="space-y-3">
                {about.funFacts?.map((fact, index) => (
                  <div
                    key={index}
                    className="text-gray-700 dark:text-gray-300 text-sm p-2 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    {fact}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and collaborate with amazing teams. 
                Let's create something extraordinary together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Get In Touch
                </a>
                <button
                  onClick={() => handleResumeAction(personalInfo.resume || '', 'print')}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-700 text-white rounded-lg font-medium hover:bg-primary-800 transition-colors border border-primary-500"
                >
                  <Icon name="Download" size={20} className="mr-2" />
                  Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 