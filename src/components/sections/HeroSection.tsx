import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../Icon';
import { portfolioData } from '../../data/portfolioData';

export const HeroSection: FC = () => {
  const { personalInfo, socialLinks } = portfolioData;

  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden pt-20 sm:pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
                👋 Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-primary-600 font-semibold mb-4 sm:mb-6"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <button
                onClick={() => handleScrollToSection('projects')}
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto justify-center"
              >
                View My Work
                <Icon name="ArrowDown" size={18} className="ml-2" />
              </button>
              
              <button
                onClick={() => handleScrollToSection('contact')}
                className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto justify-center"
              >
                Get In Touch
                <Icon name="MessageCircle" size={18} className="ml-2" />
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center lg:justify-start space-x-4"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 group"
                  aria-label={`Visit ${link.name}`}
                >
                  <Icon
                    name={link.icon as any}
                    size={24}
                    className="text-gray-600 group-hover:text-primary-600 transition-colors"
                  />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end order-first lg:order-last mb-8 lg:mb-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 sm:border-6 lg:border-8 border-white">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges - only show on larger screens */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -right-2 sm:-right-4 top-12 sm:top-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 sm:p-3 hidden md:block"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Icon name="Code" size={16} className="text-primary-600 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">5+ Years</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -left-2 sm:-left-4 bottom-12 sm:bottom-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 sm:p-3 hidden md:block"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Icon name="Award" size={16} className="text-purple-600 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">Senior Dev</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleScrollToSection('about')}
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
            <Icon name="ChevronDown" size={24} className="text-gray-400 dark:text-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 