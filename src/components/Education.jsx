import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "Chaitanya Bharathi Institute of Technology (CBIT)",
      location: "Hyderabad, Telangana",
      duration: "2023 - 2027",
      gpa: "8.6",
      status: "Current",
      description: "Specializing in software development, data structures, algorithms, and emerging technologies.",
      highlights: [
        "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management",
        "Active member of coding club and technical societies",
        "Participated in multiple hackathons and technical competitions"
      ]
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Narayana Junior College",
      location: "Hyderabad, Telangana",
      duration: "2021 - 2023",
      gpa: "9.5",
      status: "Completed",
      description: "Mathematics, Physics, Chemistry (MPC) stream with excellent academic performance.",
      highlights: [
        "Top 5% of the class with consistent academic excellence",
        "Strong foundation in Mathematics and Physics",
        "Participated in science exhibitions and competitions"
      ]
    },
    {
      degree: "Secondary School (10th Grade)",
      institution: "Kendriya Vidyalaya",
      location: "India",
      duration: "2020 - 2021",
      gpa: "8.3",
      status: "Completed",
      description: "CBSE curriculum with well-rounded education and participation in co-curricular activities.",
      highlights: [
        "CBSE Board with strong academic performance",
        "Active participation in science and mathematics olympiads",
        "Leadership roles in school activities"
      ]
    }
  ];

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic journey and achievements that shaped my technical foundation
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="card group"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-300">
                    <GraduationCap size={24} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                
                {edu.status === 'Current' && (
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                    {edu.status}
                  </span>
                )}
              </div>

              {/* Meta Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{edu.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award size={16} />
                  <span className="font-semibold">{edu.gpa} GPA</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {edu.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                {edu.highlights.map((highlight, highlightIndex) => (
                  <div
                    key={highlightIndex}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
