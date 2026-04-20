import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Brain, BarChart3, Cloud, GitBranch } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['Python', 'TypeScript', 'JavaScript', 'C/C++', 'Java', 'R', 'SQL', 'HTML/CSS']
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: ['PyTorch', 'TensorFlow', 'LLM Fine-tuning', 'Feature Engineering', 'Polars', 'Predictive Modeling']
    },
    {
      icon: GitBranch,
      title: 'Agentic Workflows',
      skills: ['LangChain', 'LangGraph', 'LlamaIndex', 'OpenAI', 'Gemini', 'MCP', 'Agentic RAG']
    },
    {
      icon: BarChart3,
      title: 'Web Toolkit',
      skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'FastAPI', 'Flask', 'Django']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Serverless', 'CI/CD Pipelines']
    },
    {
      icon: Database,
      title: 'Data Infrastructure',
      skills: ['PostgreSQL', 'MongoDB', 'Snowflake', 'Redis', 'Kafka', 'ChromaDB', 'Pinecone']
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-none mb-6">
            <span className="text-cyan-400 font-semibold text-sm tracking-wide">TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            SKILLS & <span className="text-cyan-400">TECHNOLOGIES</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-cyan-400/10 border border-cyan-400/30 group-hover:bg-cyan-400 transition-all duration-300">
                    <Icon className="text-cyan-400 group-hover:text-black transition-colors" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:text-cyan-400 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
