import { ExternalLink, Star } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const ProjectCard = ({ project, index }) => (
  <AnimatedCard delay={index * 200} className="group">
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 transform hover:-translate-y-2 h-full flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100" />
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <ul className="space-y-2 mt-4">
          {project.highlights.map((highlight, highlightIndex) => (
            <li key={highlightIndex} className="flex items-start">
              <Star className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-600 dark:text-gray-300">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {project.link && (
        <div className="px-6 pb-6">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center"
          >
            View Project
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      )}
    </div>
  </AnimatedCard>
);

export default ProjectCard;