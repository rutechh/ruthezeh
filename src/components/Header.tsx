import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Icon } from './Icon';
import { ThemeToggle } from './ThemeToggle';
import { navigation, portfolioData } from '../data/portfolioData';
import { handleResumeAction } from '../utils/resumeDownload';

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {portfolioData.personalInfo.name}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Resume Button */}
            <button
              onClick={() => handleResumeAction(portfolioData.personalInfo.resume || '', 'print')}
              className="btn-primary"
            >
              <Icon name="Download" size={16} className="mr-2" />
              Resume
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <div className="flex items-center space-x-2">
              <div className="md:hidden">
                <ThemeToggle />
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-gray-200 dark:border-gray-700">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => handleResumeAction(portfolioData.personalInfo.resume || '', 'print')}
                  className="flex items-center px-3 py-2 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-md transition-colors font-medium w-full text-left"
                >
                  <Icon name="Download" size={16} className="mr-2" />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}; 