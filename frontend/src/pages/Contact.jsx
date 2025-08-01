import { Phone, Mail, MapPin } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedCard>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Inquiry</h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
            <p className="text-lg mt-6 text-blue-100 max-w-2xl mx-auto">
              Interested in discussing potential opportunities or collaborations? I'd love to hear from you.
            </p>
          </div>
        </AnimatedCard>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <AnimatedCard delay={200}>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 h-full">
              <Phone className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-blue-100">+94 78 486 0200</p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={400}>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 h-full">
              <Mail className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-100">salindusandun57@gmail.com</p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={600}>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 h-full">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-blue-100">Colombo, Sri Lanka</p>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;