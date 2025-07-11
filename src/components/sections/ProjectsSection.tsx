import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../Icon';
import { portfolioData } from '../../data/portfolioData';
import type { Project } from '../../types/portfolio';

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

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      case 'In Progress': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300';
      case 'Planned': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
      default: return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300';
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200 dark:border-gray-700"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            <Icon name="Star" size={14} className="inline mr-1" />
            Featured
          </div>
        )}
        
        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
          {project.status}
        </div>

        {/* Overlay Links */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-100 text-gray-900 dark:text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors flex items-center"
              >
                <Icon name="ExternalLink" size={16} className="mr-2" />
                Live Demo
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 dark:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors flex items-center"
              >
                <Icon name="Github" size={16} className="mr-2" />
                Source
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.name}
          </h3>
          {project.teamSize && (
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <Icon name="Users" size={14} className="mr-1" />
              {project.teamSize} {project.teamSize === 1 ? 'person' : 'people'}
            </div>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span key={index} className="skill-badge">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-sm">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Project Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <Icon name="Calendar" size={14} className="mr-1" />
            {new Date(project.startDate).getFullYear()}
          </div>
          {project.role && (
            <div className="flex items-center">
              <Icon name="User" size={14} className="mr-1" />
              {project.role}
            </div>
          )}
        </div>

        {/* Features Preview */}
        {project.features.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Key Features:</h4>
            <ul className="space-y-1">
              {project.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                  <Icon name="Check" size={12} className="mr-2 mt-1 text-green-600 dark:text-green-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
              {project.features.length > 3 && (
                <li className="text-sm text-gray-500 dark:text-gray-400">
                  +{project.features.length - 3} more features...
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};



export const ProjectsSection: FC = () => {
  const { projects } = portfolioData;
  const activeCategory = 'all';

  const allProjects = projects.flatMap(category => category.projects);
  const featuredProjects = allProjects.filter(project => project.featured);
  
  const filteredProjects = allProjects;

  const activeProjectCategory = projects.find(cat => cat.id === activeCategory);

  const getProjectStats = () => {
    const totalProjects = allProjects.length;
    const completedProjects = allProjects.filter(p => p.status === 'Completed').length;
    const technologies = [...new Set(allProjects.flatMap(p => p.technologies))].length;
    
    return {
      totalProjects,
      completedProjects,
      technologies,
      categories: projects.length
    };
  };

  const stats = getProjectStats();

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-width section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating various technologies, problem-solving approaches, and creative solutions
            </p>
          </motion.div>

          {/* Project Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">{stats.totalProjects}</div>
              <div className="text-gray-600 dark:text-gray-400">Total Projects</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{stats.completedProjects}</div>
              <div className="text-gray-600 dark:text-gray-400">Completed</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stats.technologies}</div>
              <div className="text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{featuredProjects.length}</div>
              <div className="text-gray-600 dark:text-gray-400">Featured</div>
            </div>
          </motion.div>

          {/* Category Filter */}
          {/* <motion.div variants={itemVariants}>
            <CategoryFilter
              categories={projects}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </motion.div> */}

          {/* Active Category Info */}
          {activeCategory !== 'all' && activeProjectCategory && (
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {activeProjectCategory.name}
              </h3>
              {activeProjectCategory.description && (
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {activeProjectCategory.description}
                </p>
              )}
            </motion.div>
          )}

          {/* Projects Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Icon name="FolderOpen" size={48} className="mx-auto text-gray-400 dark:text-gray-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">No Projects Found</h3>
              <p className="text-gray-500 dark:text-gray-500">Try selecting a different category or check back later for new projects.</p>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and bring innovative ideas to life. Let's discuss your next project!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Start a Conversation
                </a>
                <a
                  href="https://github.com/alexjohnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-700 text-white rounded-lg font-medium hover:bg-primary-800 transition-colors border border-primary-500"
                >
                  <Icon name="Github" size={20} className="mr-2" />
                  View All on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 