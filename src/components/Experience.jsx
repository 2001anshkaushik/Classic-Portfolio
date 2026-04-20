import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Software Engineer Intern (AI/ML)',
      company: 'BotStacks',
      location: 'Remote',
      period: 'March 2026 – May 2026',
      description: [
        'Architected a multi-LLM orchestration layer using Gemini 2.0 Flash-Lite with failover across GPT-4o and Claude 3.5 Sonnet, enabling low-latency, resilient agent execution.',
        'Built a multi-tenant Agentic RAG pipeline in Pinecone with namespace-based isolation to secure retrieval across customer knowledge bases.',
        'Developed an adversarial QA fuzzer for the ingestion pipeline, uncovering critical edge cases (prompt-injection, token-overflow) to eliminate backend crashes before release.'
      ]
    },
    {
      title: 'Associate Software Engineer (AI/ML)',
      company: 'Accenture',
      location: 'Delhi, India',
      period: 'August 2023 - July 2024',
      description: [
        'Built a Python-based internal knowledge assistant using Azure OpenAI and LangChain, reducing search time for internal documentation by 25% across 500+ active users.',
        'Engineered transcript-ingestion workflows for knowledge transfer videos and documentation using advanced chunking and few-shot prompting to improve retrieval quality.',
        'Implemented a GPT-powered summarization feature in Power BI, reducing report-preparation turnaround by 30 minutes per analytics request.'
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'Alphec Global',
      location: 'Remote',
      period: 'January 2023 - June 2023',
      description: [
        'Normalized structured datasets in Python using pandas, resolving 500+ missing values and outliers for predictive modeling.',
        'Built a logistic regression model in scikit-learn for customer behavior analysis, achieving 72% accuracy on a stratified test set after handling class imbalance.',
        'Optimized Snowflake SQL queries, reducing dataset processing time by 30%.'
      ]
    },
    {
      title: 'Data Analysis IT Intern',
      company: 'Lumax Industries Ltd',
      location: 'Delhi, India',
      period: 'June 2022 - August 2022',
      description: [
        'Resolved 15+ system incidents involving workflow logic errors through root-cause analysis, improving stability in a supply-chain planning environment.',
        'Supported reporting and process analysis for cross-functional Agile workflows.'
      ]
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-none mb-6">
            <span className="text-cyan-400 font-semibold text-sm tracking-wide">MY JOURNEY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            WORK <span className="text-cyan-400">EXPERIENCE</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-cyan-400/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 md:pl-24"
              >
                <div className="absolute left-0 md:left-8 top-0 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-[7px] border-4 border-[#0A0A0A]"></div>

                <div className="bg-white/5 border border-white/10 p-6 md:p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                        <Briefcase size={18} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-3">
                        <span className="text-cyan-400 mt-1.5">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
