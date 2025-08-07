import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Web Development Intern",
      company: "Vault of Codes",
      location: "Remote",
      duration: "Aug 2025 - Oct 2025",
      type: "Internship",
      description: [
        "Worked on EdTech training platform recognized by Google for Education and AICTE",
        "Developed responsive web applications using modern technologies",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Gained hands-on experience in full-stack development",
        "Contributed to platform improvements and feature implementations"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      current: true
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional journey and key contributions in the tech industry
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-primary-600 to-primary-400"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full border-4 border-white dark:border-gray-800 z-10 shadow-lg">
                {experience.current && (
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -inset-2 bg-primary-400 rounded-full"
                  />
                )}
              </div>

              {/* Experience Card */}
              <div className={`ml-20 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card group relative overflow-hidden"
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent dark:from-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-xl group-hover:shadow-lg transition-all duration-300"
                      >
                        <Briefcase size={24} className="text-primary-600 dark:text-primary-400" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {experience.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-semibold">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    
                    {experience.current && (
                      <motion.span 
                        animate={{ pulse: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="px-3 py-1 bg-gradient-to-r from-green-400 to-green-600 text-white text-sm font-medium rounded-full shadow-lg"
                      >
                        Current
                      </motion.span>
                    )}
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400 relative z-10">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-lg"
                    >
                      <Calendar size={16} className="text-primary-500" />
                      <span>{experience.duration}</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-lg"
                    >
                      <MapPin size={16} className="text-primary-500" />
                      <span>{experience.location}</span>
                    </motion.div>
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-lg text-xs font-medium">
                      {experience.type}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3 mb-6 relative z-10">
                    {experience.description.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.3 + itemIndex * 0.1 }}
                        className="text-gray-700 dark:text-gray-300 flex items-start gap-3 group/item"
                      >
                        <motion.span 
                          whileHover={{ scale: 1.5 }}
                          className="w-2 h-2 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mt-2 flex-shrink-0 group-hover/item:shadow-lg transition-shadow"
                        />
                        <span className="group-hover/item:text-gray-900 dark:group-hover/item:text-gray-100 transition-colors">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.3 + techIndex * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 text-primary-800 dark:text-primary-200 text-sm rounded-full font-medium shadow-sm hover:shadow-md transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Resume Download Section for desktop */}
              <div className={`hidden md:block md:w-5/12 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
              }`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg text-center">
                    {/* Resume Icon */}
                    <motion.div 
                      initial={{ y: -20, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : {}}
                      transition={{ delay: index * 0.3 + 0.4 }}
                      className="mx-auto w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    >
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                    
                    {/* Resume Title */}
                    <motion.h3 
                      initial={{ y: 20, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : {}}
                      transition={{ delay: index * 0.3 + 0.6 }}
                      className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4"
                    >
                      My Resume
                    </motion.h3>
                    
                    {/* Resume Description */}
                    <motion.p 
                      initial={{ y: 20, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : {}}
                      transition={{ delay: index * 0.3 + 0.8 }}
                      className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                    >
                      Download my complete resume to learn more about my professional experience, skills, and achievements.
                    </motion.p>
                    
                    {/* Download Button */}
                    <motion.a
                      href={`${import.meta.env.BASE_URL}my_resume.pdf`}
                      download="Maloth_Srujan_Nayak_Resume.pdf"
                      initial={{ y: 20, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : {}}
                      transition={{ delay: index * 0.3 + 1.0 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Download Resume
                    </motion.a>
                    
                    {/* File Info */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.3 + 1.2 }}
                      className="mt-4 text-xs text-gray-500 dark:text-gray-400"
                    >
                      PDF • Updated 2025
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
