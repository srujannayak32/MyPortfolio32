import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: "NPTEL Google Cloud",
      issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
      level: "Silver",
      date: "2024",
      description: "Comprehensive certification covering Google Cloud Platform services, architecture, and best practices for cloud computing.",
      skills: ["Google Cloud Platform", "Cloud Architecture", "Cloud Services", "DevOps"],
      icon: "🏆",
      color: "yellow"
    },
    {
      title: "CS50x: Introduction to Computer Science",
      issuer: "Harvard University",
      level: "Professional Certificate",
      date: "2024",
      description: "Harvard's comprehensive introduction to computer science and programming, covering algorithms, data structures, and software engineering.",
      skills: ["C Programming", "Python", "SQL", "HTML/CSS", "JavaScript", "Algorithms"],
      icon: "🎓",
      color: "red"
    },
    {
      title: "Python (Basic) - 4 Star",
      issuer: "HackerRank",
      level: "4 Star Rating",
      date: "2024",
      description: "Demonstrated proficiency in Python programming through comprehensive skill assessment and coding challenges.",
      skills: ["Python Programming", "Data Structures", "Algorithms", "Problem Solving"],
      icon: "⭐",
      color: "blue"
    },
    {
      title: "MongoDB Associate Developer",
      issuer: "MongoDB University",
      level: "Associate",
      date: "2024",
      description: "Comprehensive certification covering MongoDB fundamentals, data modeling, querying, and application development.",
      skills: ["MongoDB", "NoSQL", "Database Design", "Data Modeling", "Aggregation"],
      icon: "🍃",
      color: "green"
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'yellow':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400';
      case 'red':
        return 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400';
      case 'blue':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';
      case 'green':
        return 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400';
      default:
        return 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <section id="certifications" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="card h-full flex flex-col relative overflow-hidden group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 ${getColorClasses(cert.color)} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <span className="flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                    <CheckCircle size={14} />
                    Verified
                  </span>
                  <span className={`px-3 py-1 ${getColorClasses(cert.color)} text-sm font-medium rounded-full`}>
                    {cert.level}
                  </span>
                </div>
              </div>

              {/* Meta Information */}
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Skills Gained:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  View Credential
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
