import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, Linkedin } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const Home = ({ scrollToSection }) => {
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'Full Stack Developer',
    'React Specialist', 
    'Java Developer',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];

  // Typing animation effect
  useEffect(() => {
    const role = roles[currentRole];
    let i = 0;
    const typing = setInterval(() => {
      if (i < role.length) {
        setTypedText(role.substring(0, i + 1));
        i++;
      } else {
        setTimeout(() => {
          const deleting = setInterval(() => {
            if (i > 0) {
              setTypedText(role.substring(0, i - 1));
              i--;
            } else {
              clearInterval(deleting);
              setCurrentRole((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
        clearInterval(typing);
      }
    }, 100);
    
    return () => clearInterval(typing);
  }, [currentRole]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedCard>
          <div className="mb-12">
            <div className="w-40 h-40 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-900 overflow-hidden">
                <img 
                    src="https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/492585912_2668282516695839_2300743997900877922_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGR3HLpv1pN1k5Fxtil5-18DaOgOSGbNbgNo6A5IZs1uONVKYtJxrYHTGb2jHR3EvWQB-p2_V-CqLdUJkoDlKOe&_nc_ohc=HrQkCkj5pLgQ7kNvwEQuM7I&_nc_oc=AdmBPX-kiA841B3LuulhOTh8y0HamygE7hStz9iAsEt7h_-ncF20koNxyptqSa7bmdY&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=7ADTcYlneqBDMM0CyfTrPA&oh=00_AfTmmiRZds-Z4Fv6yWCgn5D5NfxzF2xUYoxd_y-qmk21mw&oe=6892EC30" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              Salindu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sandunmeth</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-8">
              <span className="inline-block border-r-2 border-blue-600 pr-1 animate-pulse">
                {typedText}
              </span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Passionate IT undergraduate with expertise in full-stack development, creating innovative digital solutions that drive business value.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
            >
              View My Work
              <ChevronDown className="w-5 h-5 ml-2" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center justify-center"
            >
              Get In Touch
              <Mail className="w-5 h-5 ml-2" />
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/SalinduX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a>
            <a 
              href="https://www.linkedin.com/in/salindu-sandun-307800332" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a>
            <a 
              href="mailto:salindusandun57@gmail.com" 
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a>
          </div>
        </AnimatedCard>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
};

export default Home;