import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, Server, Database, Globe, Wrench, Zap } from 'lucide-react';

const techCategories = [
  {
    title: 'Frontend Development',
    icon: Monitor,
    color: 'from-blue-500 to-cyan-500',
    technologies: [
      { name: 'React.js', icon: '⚛️', description: 'Component-based UI library' },
      { name: 'Next.js', icon: '▲', description: 'React framework for production' },
      { name: 'TypeScript', icon: '🔷', description: 'Typed JavaScript' },
      { name: 'Tailwind CSS', icon: '🎨', description: 'Utility-first CSS framework' },
      { name: 'Framer Motion', icon: '🎭', description: 'Animation library for React' },
    ]
  },
  {
    title: 'Backend Development', 
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    technologies: [
      { name: 'Node.js', icon: '🟢', description: 'JavaScript runtime environment' },
      { name: 'Express.js', icon: '🚀', description: 'Fast web framework for Node.js' },
      { name: 'NestJS', icon: '🔥', description: 'Progressive Node.js framework' },
      { name: 'REST APIs', icon: '🔗', description: 'RESTful web services' },
      { name: 'Socket.io', icon: '⚡', description: 'Real-time communication' },
    ]
  },
  {
    title: 'Database & Storage',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    technologies: [
      { name: 'MongoDB', icon: '🍃', description: 'NoSQL document database' },
      { name: 'PostgreSQL', icon: '🐘', description: 'Relational database' },
      { name: 'Firebase', icon: '🔥', description: 'Google cloud platform' },
      { name: 'Supabase', icon: '⚡', description: 'Open source Firebase alternative' },
      { name: 'Mongoose', icon: '🦔', description: 'MongoDB object modeling' },
    ]
  },
  {
    title: 'DevOps & Deployment',
    icon: Globe,
    color: 'from-orange-500 to-red-500',
    technologies: [
      { name: 'Vercel', icon: '▲', description: 'Frontend deployment platform' },
      { name: 'Render', icon: '🚀', description: 'Cloud application platform' },
      { name: 'Docker', icon: '🐳', description: 'Containerization platform' },
      { name: 'AWS', icon: '☁️', description: 'Amazon Web Services' },
      { name: 'Git & GitHub', icon: '🐙', description: 'Version control system' },
    ]
  },
  {
    title: 'Tools & Testing',
    icon: Wrench,
    color: 'from-yellow-500 to-orange-500',
    technologies: [
      { name: 'Postman', icon: '📮', description: 'API development tool' },
      { name: 'Figma', icon: '🎨', description: 'Design and prototyping' },
      { name: 'VS Code', icon: '💻', description: 'Code editor' },
      { name: 'Chrome DevTools', icon: '🔍', description: 'Browser debugging tools' },
      { name: 'Jest', icon: '🧪', description: 'JavaScript testing framework' },
    ]
  },
  {
    title: 'Authentication & Security',
    icon: Zap,
    color: 'from-indigo-500 to-purple-500',
    technologies: [
      { name: 'JWT', icon: '🔐', description: 'JSON Web Tokens' },
      { name: 'NextAuth.js', icon: '🔑', description: 'Authentication for Next.js' },
      { name: 'OAuth', icon: '🛡️', description: 'Open standard for authorization' },
      { name: 'bcrypt', icon: '🔒', description: 'Password hashing function' },
      { name: 'CORS', icon: '🌐', description: 'Cross-Origin Resource Sharing' },
    ]
  }
];

const learningTimeline = [
  { period: '2021', focus: 'HTML, CSS, JavaScript Basics', status: 'mastered' },
  { period: '2022', focus: 'React.js, Frontend Frameworks', status: 'mastered' },
  { period: '2023', focus: 'Node.js, Backend Development', status: 'mastered' },
  { period: '2024', focus: 'Full Stack, Deployment, DevOps', status: 'advanced' },
  { period: '2025', focus: 'Cloud Architecture, Microservices', status: 'learning' },
];

export const TechStackSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tech-stack" className="py-20 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="hero-gradient-text">Tech Stack</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto mb-8"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Technologies I use to build modern, scalable web applications
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="card-gradient p-8 rounded-xl hover-scale group"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4 shadow-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                    className="flex items-center p-3 bg-background/50 rounded-lg hover:bg-background/70 transition-colors group/tech"
                  >
                    <span className="text-2xl mr-3">{tech.icon}</span>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm group-hover/tech:text-accent transition-colors">
                        {tech.name}
                      </h4>
                      <p className="text-xs text-foreground/60">{tech.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            My <span className="hero-gradient-text">Learning Journey</span>
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
            
            <div className="space-y-8">
              {learningTimeline.map((item, index) => (
                <motion.div
                  key={item.period}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="card-gradient p-6 rounded-xl">
                      <h4 className="text-xl font-bold text-accent mb-2">{item.period}</h4>
                      <p className="text-foreground/80">{item.focus}</p>
                      <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'mastered' ? 'bg-green-600/20 text-green-400' :
                        item.status === 'advanced' ? 'bg-blue-600/20 text-blue-400' :
                        'bg-yellow-600/20 text-yellow-400'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-6 h-6 bg-accent rounded-full border-4 border-background flex-shrink-0 z-10 shadow-lg"></div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-12">
            <span className="hero-gradient-text">Full Stack Architecture</span>
          </h3>
          
          <div className="card-gradient p-8 rounded-xl max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="p-4 bg-blue-600/20 rounded-lg border border-blue-600/30">
                <h4 className="font-bold text-blue-400 mb-2">Frontend (React, Tailwind)</h4>
                <p className="text-sm text-foreground/70">User Interface & Experience</p>
              </div>
              
              <div className="flex justify-center">
                <div className="w-px h-8 bg-gradient-to-b from-blue-600/50 to-green-600/50"></div>
              </div>
              
              <div className="p-4 bg-green-600/20 rounded-lg border border-green-600/30">
                <h4 className="font-bold text-green-400 mb-2">API Layer (Express.js / NestJS)</h4>
                <p className="text-sm text-foreground/70">Business Logic & Data Processing</p>
              </div>
              
              <div className="flex justify-center">
                <div className="w-px h-8 bg-gradient-to-b from-green-600/50 to-purple-600/50"></div>
              </div>
              
              <div className="p-4 bg-purple-600/20 rounded-lg border border-purple-600/30">
                <h4 className="font-bold text-purple-400 mb-2">Database (MongoDB, PostgreSQL)</h4>
                <p className="text-sm text-foreground/70">Data Storage & Management</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};