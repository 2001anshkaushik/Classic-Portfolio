import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Download, ExternalLink } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('2001anshkaushik@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-none mb-6">
            <span className="text-cyan-400 font-semibold text-sm tracking-wide">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            LET'S <span className="text-cyan-400">CONNECT</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, research collaborations, or data science projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/5 border border-white/10 p-6 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-400/10 border border-cyan-400/30 group-hover:bg-cyan-400 transition-all duration-300">
                  <Mail className="text-cyan-400 group-hover:text-black transition-colors" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-gray-400 mb-1">Email</h3>
                  <a
                    href="mailto:2001anshkaushik@gmail.com"
                    className="text-lg text-white hover:text-cyan-400 transition-colors font-medium"
                  >
                    2001anshkaushik@gmail.com
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2 bg-white/5 border border-white/10 hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all duration-300 text-sm font-medium"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/anshkaushik/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 p-4 bg-white/5 border border-white/10 hover:bg-cyan-400 hover:border-cyan-400 hover:text-black transition-all duration-300 group"
              >
                <Linkedin className="group-hover:scale-110 transition-transform" size={24} />
                <span className="font-semibold">LinkedIn</span>
              </a>
              <a
                href="https://github.com/2001anshkaushik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 p-4 bg-white/5 border border-white/10 hover:bg-cyan-400 hover:border-cyan-400 hover:text-black transition-all duration-300 group"
              >
                <Github className="group-hover:scale-110 transition-transform" size={24} />
                <span className="font-semibold">GitHub</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-cyan-400/20 to-transparent border border-cyan-400/30 p-8 lg:p-12">
              <img
                src="https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg"
                alt="AI Brain Concept"
                className="w-full h-64 object-cover mb-6 border-2 border-cyan-400/30"
              />
              <h3 className="text-2xl font-bold text-white mb-4">Download My Resume</h3>
              <p className="text-gray-400 mb-6">
                Get a comprehensive overview of my experience, skills, and projects in a traditional resume format.
              </p>
              <a
                href="/Ansh_Kaushik_Resume.pdf"
                download="Ansh_Kaushik_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition-all duration-300 hover:scale-105 group"
              >
                <Download className="group-hover:translate-y-1 transition-transform" size={20} />
                <span>Download Resume</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
