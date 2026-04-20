import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'CerebroRAG',
      description: 'Built an Agentic RAG engine using Hierarchical Node Parsing and Cohere semantic re-ranking to filter context before synthesis. Achieved 92% retrieval recall on a 50-query technical ground truth dataset and reduced irrelevant context chunks by 40%.',
      tech: ['LlamaIndex', 'Python', 'Cohere', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop',
      github: '#',
      tag: 'Agentic RAG'
    },
    {
      title: 'Enterprise SQL Intelligence',
      description: 'Implemented an MCP-powered, schema-aware SQL bridge using "Reflection" to provide real-time schema context without hardcoding. Prevented injection attacks with 100% success rate across 50+ adversarial Red-Team prompts via AST-based SQL validation.',
      tech: ['MCP', 'PostgreSQL', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop',
      github: '#',
      tag: 'Security & Database'
    },
    {
      title: 'Conversational Text-to-SQL',
      description: 'Built a state-driven LangGraph agent with a self-correction loop that automatically fixes syntax errors using database error logs. Retained context across 15+ conversational turns, reducing time-to-insight for data queries from 5 minutes to ~20 seconds.',
      tech: ['LangGraph', 'ChromaDB', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      github: '#',
      tag: 'LLM Agents'
    },
    {
      title: 'Transformer Text Classification',
      description: 'Fine-tuned DistilBERT via Knowledge Distillation, transferring knowledge from a BERT-Large teacher model to a lightweight student model. Achieved 86% accuracy with an 18× parameter reduction, resulting in a 5.5× throughput increase on CPU inference.',
      tech: ['PyTorch', 'DistilBERT', 'HuggingFace'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
      github: '#',
      tag: 'Deep Learning'
    },
    {
      title: 'Hospital Resource Optimization',
      description: 'Engineered 80+ features from EHR data on Snowflake and deployed an XGBoost inference model as a real-time SageMaker endpoint. Demonstrated a 15% MAPE improvement over standard clinical heuristics for forecasting ICU length-of-stay on 8,000+ patient records.',
      tech: ['AWS SageMaker', 'Snowflake', 'XGBoost'],
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=500&fit=crop',
      tag: 'Predictive Modeling'
    },
    {
      title: 'Banking Customer Classification',
      description: 'Implemented SMOTE oversampling to correct credit-risk class imbalance and trained an XGBoost/Logistic Regression ensemble. Deployed as a Flask API on AWS EKS with HPA auto-scaling, achieving an 18% recall boost on high-risk defaults (0.88 AUC-ROC).',
      tech: ['AWS EKS', 'Docker', 'XGBoost', 'SMOTE'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tag: 'Cloud Deployment'
    },
    {
      title: 'Azure Generative AI Chatbot',
      description: 'Developed a RAG-powered assistant for 500+ Accenture users with strict citation-based document grounding against 200+ indexed legacy PDFs and internal docs. Validated a 40% reduction in documentation search time and 70% decrease in hallucinations via the RAGAS framework.',
      tech: ['Azure OpenAI', 'FastAPI', 'Cognitive Search'],
      image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=800&h=500&fit=crop',
      tag: 'Generative AI'
    },
    {
      title: 'Supply Chain Knowledge Graphs',
      description: 'Modeled supplier logistics in Neo4j and combined graph centrality metrics with ARIMA time-series analysis. Surfaced 14 hidden bottlenecks invisible in relational databases and achieved 80% lead-time prediction accuracy 2 weeks in advance.',
      tech: ['Neo4j', 'ARIMA', 'Python'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
      tag: 'Knowledge Graphs'
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-none mb-6">
            <span className="text-cyan-400 font-semibold text-sm tracking-wide">MY WORK</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            FEATURED <span className="text-cyan-400">PROJECTS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white/5 border border-white/10 overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-400 text-black text-xs font-bold">
                  {project.tag}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-justify">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-gray-300">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-cyan-400 hover:border-cyan-400 hover:text-black transition-all duration-300 group/link"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.paper && (
                    <a
                      href={project.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-black hover:bg-cyan-300 transition-all duration-300 group/link"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-semibold">Paper</span>
                    </a>
                  )}
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
