import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-4">Srujan Nayak</h3>
            <p className="text-gray-400 leading-relaxed">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/srujannayak32"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/srujannayak"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:srujannayak32@gmail.com"
              whileHover={{ scale: 1.2, y: -2 }}
              className="p-3 bg-gray-800 rounded-full hover:bg-green-600 transition-colors duration-300"
            >
              <Mail size={20} />
            </motion.a>
          </div>

          {/* Right - Back to Top */}
          <div className="text-center md:text-right">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-300"
            >
              <ArrowUp size={16} />
              Back to Top
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gray-800"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-center items-center text-sm text-gray-400">
          <div className="flex items-center gap-1 mb-2 md:mb-0">
            <span>© {currentYear} Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>by Srujan Nayak</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
