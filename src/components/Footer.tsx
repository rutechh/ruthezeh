import type { FC } from 'react';
import { Icon } from './Icon';
import { portfolioData } from '../data/portfolioData';
import { handleResumeAction } from '../utils/resumeDownload';

export const Footer: FC = () => {
  const { personalInfo, socialLinks } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-width section-padding py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Personal Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-gray-300 dark:text-gray-400 mb-4">{personalInfo.tagline}</p>
            <div className="space-y-2 text-sm text-gray-400 dark:text-gray-500">
              <div className="flex items-center">
                <Icon name="MapPin" size={16} className="mr-2" />
                {personalInfo.location}
              </div>
              <div className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-white dark:hover:text-gray-200 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              {personalInfo.phone && (
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-white dark:hover:text-gray-200 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors group"
                  aria-label={`Visit ${link.name}`}
                >
                  <Icon
                    name={link.icon as any}
                    size={20}
                    className="text-gray-300 dark:text-gray-400 group-hover:text-white dark:group-hover:text-gray-200 transition-colors"
                  />
                </a>
              ))}
            </div>
            
            {/* Resume Download */}
            <div className="mt-6">
              <button
                onClick={() => handleResumeAction(personalInfo.resume || '', 'print')}
                className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
              >
                <Icon name="Download" size={16} className="mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-2 sm:mt-0">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 