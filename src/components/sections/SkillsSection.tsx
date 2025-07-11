import type { FC } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../Icon';
import { portfolioData } from '../../data/portfolioData';
import type { SkillCategory, Skill } from '../../types/portfolio';

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

const SkillCard: FC<{ skill: Skill }> = ({ skill }) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-green-500';
      case 'Advanced': return 'bg-blue-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Beginner': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'Expert': return 'w-full';
      case 'Advanced': return 'w-4/5';
      case 'Intermediate': return 'w-3/5';
      case 'Beginner': return 'w-2/5';
      default: return 'w-2/5';
    }
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-3">
            <Icon name={skill.icon as any || 'Code'} size={16} className="text-primary-600 dark:text-primary-400" />
          </div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
        </div>
        <span className={`px-2 py-1 text-xs font-medium rounded-full text-white ${getLevelColor(skill.level)}`}>
          {skill.level}
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className="mb-3">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div className={`h-2 rounded-full transition-all duration-300 ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)}`}></div>
        </div>
      </div>
      
      {skill.yearsOfExperience && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {skill.yearsOfExperience} year{skill.yearsOfExperience > 1 ? 's' : ''} experience
        </p>
      )}
    </div>
  );
};

const CategoryTab: FC<{
  category: SkillCategory;
  isActive: boolean;
  onClick: () => void;
}> = ({ category, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg font-medium transition-all ${
      isActive
        ? 'bg-primary-600 text-white shadow-md'
        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
    }`}
  >
    {category.name}
  </button>
);

export const SkillsSection: FC = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState(skills[0]?.id || 'frontend');

  const activeSkillCategory = skills.find(cat => cat.id === activeCategory) || skills[0];

  const getSkillStats = () => {
    const allSkills = skills.flatMap(cat => cat.skills);
    const expertSkills = allSkills.filter(skill => skill.level === 'Expert').length;
    const totalYears = Math.max(...allSkills.map(skill => skill.yearsOfExperience || 0));
    
    return {
      totalSkills: allSkills.length,
      expertSkills,
      totalYears,
      categories: skills.length
    };
  };

  const stats = getSkillStats();

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels across different technologies
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">{stats.totalSkills}</div>
              <div className="text-gray-600 dark:text-gray-400">Total Skills</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{stats.expertSkills}</div>
              <div className="text-gray-600 dark:text-gray-400">Expert Level</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stats.totalYears}+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{stats.categories}</div>
              <div className="text-gray-600 dark:text-gray-400">Categories</div>
            </div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {skills.map((category) => (
              <CategoryTab
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </motion.div>

          {/* Active Category Info */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={`category-info-${activeCategory}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {activeSkillCategory.name}
              </h3>
              {activeSkillCategory.description && (
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {activeSkillCategory.description}
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`skills-grid-${activeCategory}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            >
              {activeSkillCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Skill Level Legend */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-center">Proficiency Levels</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Expert</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">5+ years, leading projects</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Advanced</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">3+ years, independent work</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded mr-3"></div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Intermediate</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">1+ years, guided work</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-500 rounded mr-3"></div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Beginner</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Learning, basic projects</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Let's leverage these skills to create innovative solutions for your next project.
              </p>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                View My Projects
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 