import { GraduationCap, Heart, Calendar } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';
import { education } from '../constants/education';
import { experiences } from '../constants/experiences';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedCard>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Education & Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              My academic background and professional journey
            </p>
          </div>
        </AnimatedCard>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <AnimatedCard delay={200}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                Education
              </h3>
              <div className="space-y-8">
                {education.map((item, index) => (
                  <div key={index} className={`border-l-4 ${index === 0 ? 'border-blue-600' : 'border-gray-300 dark:border-gray-600'} pl-6 relative`}>
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-600 dark:border-blue-400 flex items-center justify-center">
                      {item.icon === 'graduation-cap' ? <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" /> : null}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{item.institution}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.date}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>

          {/* Volunteer Experience */}
          <AnimatedCard delay={400}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400 mr-3" />
                Professional Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((item, index) => (
                  <div key={index} className={`border-l-4 ${index === 0 ? 'border-pink-600' : 'border-gray-300 dark:border-gray-600'} pl-6 relative`}>
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-white dark:bg-gray-800 border-4 border-pink-600 dark:border-pink-400 flex items-center justify-center">
                      {item.icon === 'heart' ? <Heart className="w-5 h-5 text-pink-600 dark:text-pink-400" /> : null}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h4>
                    <p className="text-pink-600 dark:text-pink-400 font-medium">{item.role}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.date}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default Education;