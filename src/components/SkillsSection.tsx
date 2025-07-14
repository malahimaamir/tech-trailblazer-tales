import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Monitor, Server, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: '🖼 Frontend',
    icon: Monitor,
    skills: [
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React.js', level: 92 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Figma to Code', level: 85 },
    ]
  },
  {
    title: '🔧 Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'NestJS', level: 75 },
      { name: 'MongoDB', level: 82 },
      { name: 'Mongoose', level: 80 },
      { name: 'Firebase', level: 85 },
      { name: 'Supabase', level: 78 },
      { name: 'REST APIs', level: 90 },
    ]
  },
  {
    title: '🧠 Tools & DevOps',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Postman', level: 85 },
      { name: 'Vercel', level: 88 },
      { name: 'Render', level: 80 },
      { name: 'JWT Auth', level: 85 },
      { name: 'NextAuth', level: 75 },
      { name: 'Docker', level: 70 },
      { name: 'AWS Basics', level: 65 },
    ]
  }
];

interface SkillBarProps {
  skill: { name: string; level: number };
  delay: number;
  isInView: boolean;
}

const SkillBar = ({ skill, delay, isInView }: SkillBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.level, delay]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-accent font-mono">{skill.level}%</span>
      </div>
      <div className="w-full bg-secondary/50 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="h-full accent-gradient rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${progress}%` : 0 }}
          transition={{ duration: 1.5, delay: delay / 1000, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="skills" className="py-20 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="hero-gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto mb-8"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="card-gradient p-8 rounded-xl hover-scale"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={categoryIndex * 200 + skillIndex * 100}
                    isInView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Node.js', 'TypeScript', 'MongoDB', 'Express.js', 'Next.js', 
              'Tailwind CSS', 'Firebase', 'Vercel', 'Git', 'REST APIs', 'JWT',
              'Postman', 'Figma', 'Docker', 'AWS', 'Supabase', 'Mongoose'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-sm font-medium hover-scale cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};