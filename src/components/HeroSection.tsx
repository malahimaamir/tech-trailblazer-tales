import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const handleScrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground/80 mb-2">Hi, I'm</span>
            <span className="hero-gradient-text animate-pulse-glow">
              Malahima Amir
            </span>
          </h1>
        </motion.div>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 mb-4">
            💻 Full Stack Developer crafting{' '}
            <TypeAnimation
              sequence={[
                'clean code',
                2000,
                'powerful backends',
                2000,
                'seamless user experiences',
                2000,
                'scalable applications',
                2000,
              ]}
              wrapper="span"
              className="hero-gradient-text"
              repeat={Infinity}
              cursor={true}
              style={{ display: 'inline-block' }}
            />
          </h2>
        </motion.div>

        {/* Tech stack tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-10"
        >
          <p className="text-lg md:text-xl text-accent font-mono">
            🔧 JavaScript | React | Node.js | Next.js | MongoDB
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            className="accent-gradient hover-scale text-lg px-8 py-4 min-w-[200px]"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="hover-scale text-lg px-8 py-4 min-w-[200px] border-accent/30 hover:border-accent"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:malahima@example.com', label: 'Email' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-accent transition-all duration-300 flex items-center justify-center hover-scale group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.0 + index * 0.1 }}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-foreground/70 group-hover:text-accent transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={handleScrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/50 hover:text-accent transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
};