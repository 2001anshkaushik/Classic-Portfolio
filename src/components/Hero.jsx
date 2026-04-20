import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profilePic from '../assets/profile.jpeg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-cyan-900/30 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86"
          alt="Data visualization"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-none mb-6"
            >
              <span className="text-cyan-400 font-semibold text-sm tracking-wide">AI/ML ENGINEERING • AGENTIC SYSTEMS • CLOUD INFRASTRUCTURE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              ANSH
              <br />
              <span className="text-cyan-400">KAUSHIK</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-4 font-light"
            >
              AI/ML Software Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed text-justify"
            >
              Architecting resilient, autonomous AI systems and high-precision RAG pipelines. Focused on translating cutting-edge ML research into scalable enterprise infrastructure. Bridging the gap between complex data and production-ready intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-cyan-400 text-black font-bold rounded-none hover:bg-cyan-300 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
              >
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-none hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/2001anshkaushik"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 hover:bg-cyan-400 hover:border-cyan-400 transition-all duration-300 group"
              >
                <Github className="text-white group-hover:text-black transition-colors" size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/anshkaushik/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 hover:bg-cyan-400 hover:border-cyan-400 transition-all duration-300 group"
              >
                <Linkedin className="text-white group-hover:text-black transition-colors" size={20} />
              </a>
              <a
                href="mailto:2001anshkaushik@gmail.com"
                className="p-3 bg-white/5 border border-white/10 hover:bg-cyan-400 hover:border-cyan-400 transition-all duration-300 group"
              >
                <Mail className="text-white group-hover:text-black transition-colors" size={20} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full mt-12 lg:mt-0"
          >
            <div className="relative">
              <div className="w-full h-[600px] border-4 border-cyan-400/20 overflow-hidden bg-gray-900">
                <img
                  src={profilePic}
                  alt="Ansh Kaushik"
                  className="w-full h-full object-cover object-center brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-auto bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">AI Engineer</div>
                <div className="text-sm text-gray-300">3.8 GPA • MS Computer Science (AI Specialization)</div>
                <div className="text-sm text-gray-400 mt-1">Illinois Institute of Technology</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
