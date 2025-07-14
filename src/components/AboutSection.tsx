import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Building responsive, interactive UIs with React, Next.js, and modern CSS frameworks'
  },
  {
    icon: Database,
    title: 'Backend Development', 
    description: 'Creating robust APIs with Node.js, Express, and working with various databases'
  },
  {
    icon: Globe,
    title: 'Full Stack Solutions',
    description: 'End-to-end application development from conception to deployment'
  },
  {
    icon: Rocket,
    title: 'Performance & Deployment',
    description: 'Optimizing applications and deploying to modern cloud platforms'
  }
];

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="hero-gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-lg text-foreground/80 leading-relaxed space-y-4">
              <p>
                I'm a <span className="text-accent font-semibold">Full Stack Developer</span> with 3+ years of experience 
                building everything from dynamic UIs in React to robust RESTful APIs with Node.js. 
                I love turning ideas into real-world applications that solve problems.
              </p>
              
              <p>
                My journey started with frontend development, but I quickly discovered my passion for the complete 
                development cycle. Now I specialize in creating seamless experiences from 
                <span className="text-primary font-semibold"> database to deployment</span>.
              </p>
              
              <p>
                I have extensive experience with:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                <li>Building full-stack applications (frontend + backend)</li>
                <li>API design and development (REST, CRUD operations)</li>
                <li>Database management (MongoDB, Firebase, PostgreSQL)</li>
                <li>Modern deployment strategies (Vercel, Render, AWS)</li>
                <li>Authentication systems (JWT, OAuth, NextAuth)</li>
                <li>Version control and collaborative development</li>
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail Oriented'].map((trait, index) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="card-gradient p-6 rounded-xl hover-scale group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};