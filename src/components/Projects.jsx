import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Play, Code } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "SkillSphere",
      description: "Live skill exchange platform using Next.js, Firebase, WebRTC, Socket.io. Real-time rooms with whiteboards, video/audio calling for seamless learning experiences.",
      technologies: ["Next.js", "Firebase", "WebRTC", "Socket.io", "React", "Node.js"],
      github: "https://github.com/srujannayak32",
      demo: "#",
      features: [
        "Real-time video/audio communication",
        "Interactive whiteboard functionality",
        "User authentication & profiles",
        "Skill matching algorithm"
      ],
      status: "completed"
    },
    {
      title: "Ease of Event Attendance",
      description: "Event attendance portal built with HTML, JDBC-Servlets, and SQL. Users can upload certificates to gain event attendance credits and track their participation.",
      technologies: ["HTML", "CSS", "Java", "JDBC", "Servlets", "MySQL"],
      github: "https://github.com/srujannayak32",
      demo: "#",
      features: [
        "Certificate upload system",
        "Attendance tracking",
        "Event management",
        "User dashboard"
      ],
      status: "completed"
    },
    {
      title: "TutorFinder",
      description: "MERN stack application that connects tutors with students. Features include user profiles, real-time chat, video calls, and scheduling system.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "WebRTC"],
      github: "https://github.com/srujannayak32",
      demo: "#",
      features: [
        "Tutor-student matching",
        "Real-time chat system",
        "Video calling integration",
        "Scheduling & booking"
      ],
      status: "completed"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest work and contributions to innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="card overflow-hidden h-full flex flex-col">
                {/* Project Image Placeholder */}
                <div className="relative overflow-hidden rounded-lg mb-6 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800">
                  <div className="h-48 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary-600 dark:text-primary-400 opacity-30">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-primary-600 rounded-full text-white hover:bg-primary-700 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 btn-secondary text-center inline-flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 btn-primary text-center inline-flex items-center justify-center gap-2"
                    >
                      <Play size={16} />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
