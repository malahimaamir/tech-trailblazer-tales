import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ExternalLink, Github, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'Travel Website',
    description: 'Beautiful travel website with destination showcases, booking functionality, and interactive travel planning features.',
    image: '/api/placeholder/600/400',
    category: 'Frontend',
    frontend: ['React', 'HTML5', 'CSS3', 'JavaScript'],
    backend: ['Static'],
    database: 'None',
    features: ['Responsive Design', 'Interactive UI', 'Travel Showcase', 'Modern Layout', 'Cross-browser Compatible'],
    liveUrl: 'https://travelwebsite-master.vercel.app/',
    githubUrl: 'https://github.com/malahimaamir/travelling-website',
    status: 'Completed'
  },
  {
    id: 2,
    title: 'Beauty & Cosmetics Store',
    description: 'E-commerce platform for beauty and cosmetics with product catalog, shopping cart, and modern UI design.',
    image: '/api/placeholder/600/400',
    category: 'Full Stack',
    frontend: ['React', 'CSS3', 'JavaScript'],
    backend: ['Node.js', 'Express.js'],
    database: 'MongoDB',
    features: ['Product Catalog', 'Shopping Cart', 'User Authentication', 'Order Management', 'Payment Integration'],
    liveUrl: 'https://shofy-beauty-and-cosmetics-ecommerce-client-main.vercel.app/',
    githubUrl: 'https://github.com/malahimaamir/Cosmetics',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Furniture Designs',
    description: 'Modern furniture showcase website with elegant product displays, category filtering, and responsive design.',
    image: '/api/placeholder/600/400',
    category: 'Frontend',
    frontend: ['React', 'CSS3', 'JavaScript'],
    backend: ['Static'],
    database: 'None',
    features: ['Product Showcase', 'Category Filtering', 'Responsive Design', 'Modern UI', 'Image Gallery'],
    liveUrl: 'https://furniture-two-rho.vercel.app/',
    githubUrl: 'https://github.com/malahimaamir/Furniture-Designs',
    status: 'Completed'
  },
  {
    id: 4,
    title: 'Real Estate Platform',
    description: 'Comprehensive real estate platform with property listings, search functionality, and detailed property views.',
    image: '/api/placeholder/600/400',
    category: 'Full Stack',
    frontend: ['React', 'CSS3', 'JavaScript'],
    backend: ['Node.js', 'Express.js'],
    database: 'MongoDB',
    features: ['Property Listings', 'Advanced Search', 'Property Details', 'Contact Forms', 'Responsive Design'],
    liveUrl: 'https://real-estate-main-amber.vercel.app/',
    githubUrl: 'https://github.com/malahimaamir/Real-estate',
    status: 'Completed'
  },
  {
    id: 5,
    title: 'Nails Decoration Salon',
    description: 'Professional nail salon website with service showcase, appointment booking, and gallery of nail art designs.',
    image: '/api/placeholder/600/400',
    category: 'Frontend',
    frontend: ['React', 'CSS3', 'JavaScript'],
    backend: ['Static'],
    database: 'None',
    features: ['Service Showcase', 'Gallery', 'Appointment Booking', 'Responsive Design', 'Modern UI'],
    liveUrl: 'https://nails-decoration.vercel.app/',
    githubUrl: 'https://github.com/malahimaamir/nails-decoration',
    status: 'Completed'
  },
  {
    id: 6,
    title: 'Family Hair Care Salon',
    description: 'Professional hair salon website with service listings, stylist profiles, and booking system for family hair care.',
    image: '/api/placeholder/600/400',
    category: 'Frontend',
    frontend: ['React', 'CSS3', 'JavaScript'],
    backend: ['Static'],
    database: 'None',
    features: ['Service Listings', 'Stylist Profiles', 'Booking System', 'Gallery', 'Responsive Design'],
    liveUrl: 'https://salon-frontend-master.vercel.app/',
    githubUrl: 'https://github.com/malahimaamir/salon-frontend',
    status: 'Completed'
  },
  {
    id: 7,
    title: 'TaskNest - Collaborate & Track',
    description: 'Task management and collaboration platform with team features, project tracking, and productivity tools.',
    image: '/api/placeholder/600/400',
    category: 'Full Stack',
    frontend: ['React', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js'],
    database: 'MongoDB',
    features: ['Task Management', 'Team Collaboration', 'Project Tracking', 'Real-time Updates', 'User Authentication'],
    liveUrl: '#',
    githubUrl: 'https://github.com/malahimaamir/tasknest-collaborate-track',
    status: 'In Progress'
  },
  {
    id: 8,
    title: 'BookWise - Share & Read',
    description: 'Book sharing and reading platform where users can share, discover, and track their reading progress.',
    image: '/api/placeholder/600/400',
    category: 'Full Stack',
    frontend: ['React', 'TypeScript', 'CSS3'],
    backend: ['Node.js', 'Express.js'],
    database: 'MongoDB',
    features: ['Book Sharing', 'Reading Progress', 'User Profiles', 'Book Discovery', 'Social Features'],
    liveUrl: '#',
    githubUrl: 'https://github.com/malahimaamir/bookwise-share-read',
    status: 'In Progress'
  }
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-gradient rounded-xl overflow-hidden hover-scale group"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-secondary/20 overflow-hidden">
        <img
          src={`https://images.unsplash.com/photo-${project.id === 1 ? '1486312338219-ce58c8375c09' : project.id === 2 ? '1460925895917-afdab827c52f' : project.id === 3 ? '1551288049-05afd1d70b57' : project.id === 4 ? '1467302973364-0ec50da2c9d0' : project.id === 5 ? '1560518883-8db7b5f83ec2' : '1553877522-43269d4ea984'}?w=600&h=400&fit=crop`}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse" />
        )}
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <Badge 
            variant={project.status === 'Completed' ? 'default' : 'secondary'}
            className={project.status === 'Completed' ? 'bg-green-600/80' : 'bg-yellow-600/80'}
          >
            {project.status}
          </Badge>
        </div>

        {/* Overlay with links */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <Button
            size="sm"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
            onClick={() => window.open(project.liveUrl, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <Badge variant="outline" className="text-xs">
            {project.category}
          </Badge>
        </div>

        <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="space-y-3 mb-4">
          <div>
            <span className="text-xs font-semibold text-accent">Frontend:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {project.frontend.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <span className="text-xs font-semibold text-accent">Backend:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {project.backend.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold text-accent">Database:</span>
            <Badge variant="secondary" className="text-xs ml-2">
              {project.database}
            </Badge>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <span className="text-xs font-semibold text-accent">Key Features:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {project.features.slice(0, 3).map((feature) => (
              <Badge key={feature} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {project.features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.features.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = projects.filter(
    project => selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="hero-gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto mb-8"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing full-stack development skills
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category 
                  ? 'accent-gradient' 
                  : 'hover:border-accent hover:text-accent'
              } transition-all duration-300`}
            >
              <Filter className="w-3 h-3 mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="hover:border-accent hover:text-accent px-8 py-3"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};