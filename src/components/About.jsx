import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Users, Zap, Target, Heart } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Code,
      title: "Web Development",
      description: "Passionate about creating modern, responsive web applications using cutting-edge technologies"
    },
    {
      icon: Brain,
      title: "AI & ML",
      description: "Exploring the frontiers of artificial intelligence and machine learning to solve real-world problems"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Thrive in collaborative environments, building innovative solutions with diverse teams"
    },
    {
      icon: Zap,
      title: "Problem Solving",
      description: "Love tackling complex challenges with creative and efficient algorithmic solutions"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                Passionate Developer & 
                <span className="gradient-text"> Tech Enthusiast</span>
              </h3>
              
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm an enthusiastic undergraduate IT student at CBIT, Hyderabad, with a deep passion for 
                  <span className="font-semibold text-primary-600 dark:text-primary-400"> Web Development</span>, 
                  <span className="font-semibold text-primary-600 dark:text-primary-400"> Data Structures & Algorithms</span>, 
                  and <span className="font-semibold text-primary-600 dark:text-primary-400">Artificial Intelligence</span>.
                </p>
                
                <p>
                  My journey in technology is driven by curiosity and the desire to solve real-world problems 
                  through innovative solutions. I thrive in collaborative environments where I can contribute 
                  to building cutting-edge technology that makes a meaningful impact.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or learning about the latest developments in AI and machine learning. I believe 
                  in continuous learning and staying ahead of the technological curve.
                </p>
              </div>

              {/* Key Values */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                  <Target className="text-primary-600 dark:text-primary-400" size={20} />
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Goal-Oriented</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                  <Heart className="text-red-500" size={20} />
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Passionate</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6"
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary inline-flex items-center gap-2"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card text-center group relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent dark:from-primary-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-300 group-hover:scale-110 transform">
                      <highlight.icon size={32} className="text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                    {highlight.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "8.6", label: "Current GPA", suffix: "/10", color: "text-green-600" },
                { number: "5+", label: "Projects", suffix: "", color: "text-blue-600" },
                { number: "4", label: "Certifications", suffix: "", color: "text-purple-600" },
                { number: "2+", label: "Years Learning", suffix: "", color: "text-orange-600" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl border border-primary-200 dark:border-primary-800">
            <h3 className="text-2xl font-bold mb-4 gradient-text">My Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              To leverage technology as a force for positive change, creating innovative solutions that bridge 
              the gap between complex problems and elegant, user-friendly experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
