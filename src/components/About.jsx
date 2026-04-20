import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Lightbulb, Rocket, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Rocket,
      title: 'LLM Orchestration',
      description: 'Architected multi-LLM failover layers using Gemini 2.0, GPT-4o, and Claude 3.5'
    },
    {
      icon: Lightbulb,
      title: 'Agentic RAG',
      description: 'Built secure, multi-tenant knowledge assistants reducing search time by 25%'
    },
    {
      icon: Target,
      title: 'Secure AI Architecture',
      description: 'Designing injection-resistant ingestion pipelines that guarantee system stability and token-overflow protection in production environments.'
    },
    {
      icon: Award,
      title: 'Industry Experience',
      description: 'Proven track record delivering scalable AI/ML engineering solutions across fast-paced startups and global MNCs.'
    }
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-none mb-6">
            <span className="text-cyan-400 font-semibold text-sm tracking-wide">WHO I AM</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            ABOUT <span className="text-cyan-400">ME</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-[500px] overflow-hidden border-4 border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1662638600476-d563fffbb072"
                  alt="Data Science Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-cyan-400 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-black">10+</div>
                  <div className="text-sm text-black font-semibold">PROJECTS</div>
                  <div className="text-xs text-black/80">Built</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed text-justify">
              I am an AI Developer and Springer Scholar currently pursuing my Master of Computer Science (AI Specialization) at the Illinois Institute of Technology. I specialize in bridging the gap between cutting-edge research and production-grade software, with a heavy focus on Agentic AI Orchestration, RAG pipelines, and Knowledge Graphs. My drive is solving complex enterprise problems and not just building standard chatbots.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed text-justify">
              My technical 'sweet spot' is architecting autonomous systems that make AI reliable, scalable, and secure. From prototyping to enterprise deployment, I've built robust infrastructures including state-of-the-art multi-LLM failover architectures, as well as conversational Text-to-SQL agents. Whether I am fine-tuning parameter-efficient transformer models or engineering resilient ingestion workflows, my goal is always to minimize hallucination and latency.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed text-justify">
              I bring this same builder's energy to every role, applying rigorous adversarial testing to uncover edge cases and prevent token-overflow crashes before they ever hit production. I am committed to architecting resilient systems, evaluating them relentlessly, and delivering measurable impact at scale.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <Icon className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={24} />
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
