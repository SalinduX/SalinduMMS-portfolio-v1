import { Code, Heart, Target, Zap, Coffee } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedCard>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              Get to know the professional behind the code
            </p>
          </div>
        </AnimatedCard>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedCard delay={200}>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a dedicated Information Technology undergraduate at SLIIT with strong skills in 
                software development, problem-solving, and teamwork. My passion lies in creating 
                innovative solutions that bridge the gap between complex technical challenges and 
                user-friendly experiences.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                With hands-on experience in Java and modern web development technologies, I'm eager 
                to apply my knowledge in real-world settings. I believe in continuous learning and 
                staying updated with the latest industry trends and technologies.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl shadow-sm">
                  <Code className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl shadow-sm">
                  <Coffee className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Hours of Coding</div>
                </div>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={400}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Professional Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Target className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Problem-Solving</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Analytical mindset with a focus on efficient solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Innovation</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Creative approach to technical challenges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Collaboration</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Team-oriented with strong communication skills</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Core Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  {['Full-Stack Development', 'System Architecture', 'Agile Methodologies', 'Code Optimization', 'Technical Documentation'].map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default About;