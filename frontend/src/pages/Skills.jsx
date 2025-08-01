import AnimatedCard from '../components/AnimatedCard';
import SkillBar from '../components/SkillBar';
import { skills } from '../constants/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedCard>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Technical Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              A comprehensive overview of my technical capabilities
            </p>
          </div>
        </AnimatedCard>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <AnimatedCard key={category} delay={categoryIndex * 200}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                  {category}
                </h3>
                <div className="space-y-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name}
                      skill={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 200 + skillIndex * 100}
                    />
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;