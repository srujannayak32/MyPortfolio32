import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';
import { 
  Code2, 
  Server, 
  Terminal,
  Wrench,
  Braces,
  Database,
  Globe,
  Layout,
  FileCode,
  Github,
  BarChart,
  Box
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <Code2 />, class: "frontend" },
        { name: "HTML5", icon: <Layout />, class: "frontend" },
        { name: "CSS3", icon: <FileCode />, class: "frontend" },
        { name: "JavaScript", icon: <Braces />, class: "frontend" },
        { name: "Tailwind CSS", icon: <Globe />, class: "frontend" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <Server />, class: "backend" },
        { name: "Express.js", icon: <Box />, class: "backend" },
        { name: "MongoDB", icon: <Database />, class: "backend" },
        { name: "Firebase", icon: <Server />, class: "backend" },
        { name: "SQL", icon: <Database />, class: "backend" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <Terminal />, class: "language" },
        { name: "Java", icon: <FileCode />, class: "language" },
        { name: "JavaScript", icon: <Braces />, class: "language" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "GitHub", icon: <Github />, class: "tool" },
        { name: "Pandas", icon: <BarChart />, class: "tool" },
        { name: "NumPy", icon: <Wrench />, class: "tool" },
        { name: "Matplotlib", icon: <BarChart />, class: "tool" },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical expertise and tools I excel at
          </p>
        </motion.div>

        {skillCategories.map((category, idx) => (
          <div key={category.title} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-100">
              {category.title}
            </h3>
            <div className="skills-container">
              <div className="skill-group">
                {[...category.skills, ...category.skills].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-item text-gray-800 dark:text-gray-200"
                    whileHover={{ y: -2 }}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
              <div className="skill-group" aria-hidden="true">
                {[...category.skills, ...category.skills].map((skill, index) => (
                  <motion.div
                    key={index + "clone"}
                    className="skill-item text-gray-800 dark:text-gray-200"
                    whileHover={{ y: -2 }}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
