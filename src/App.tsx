import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Github, Linkedin, Twitter, Layout, Search, Zap, Palette, RefreshCw, MessageCircle, Mail, Phone, ExternalLink, GraduationCap, Briefcase, Award, Code, Globe, Wind, Instagram, Facebook, ChevronLeft, ChevronRight, Sparkles, MousePointer2 } from 'lucide-react';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { PROJECTS, SERVICES, TESTIMONIALS } from './constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Choose service',
    message: ''
  });
  
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // GSAP Hero Entrance
    const ctx = gsap.context(() => {
      // Ensure elements are at correct starting positions
      gsap.set(".gsap-reveal", { opacity: 0, y: 30 });
      gsap.set(".stat-item", { opacity: 0, y: 20 });
      gsap.set(".hero-content > *", { opacity: 0, y: 40 });
      gsap.set(".hero-image", { opacity: 0, scale: 0.95 });

      // Hero content animations
      gsap.to(".hero-content > *", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.5
      });

      // Hero image animation
      gsap.to(".hero-image", {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.2
      });

      // Stats animation
      gsap.to(".stat-item", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-row",
          start: "top 90%",
        }
      });

      // Section animations
      const sections = gsap.utils.toArray('section');
      sections.forEach((section: any) => {
        const reveals = section.querySelectorAll('.gsap-reveal');
        if (reveals.length > 0) {
          gsap.to(reveals, {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          });
        }
      });

      // Refresh ScrollTrigger after a short delay
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 1000);
    }, heroRef);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  const socialLinks = {
    linkedin: 'https://linkedin.com/in/meharujjaman-sowrav',
    instagram: 'https://www.instagram.com/meharuzzaman_sowrav/',
    facebook: 'https://www.facebook.com/meheruzzaman.sowrav/',
    phone: '01881310911'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formStatus === 'submitting') return;

    setFormStatus('submitting');
    
    try {
      // Construct professional WhatsApp message
      const whatsappNumber = "8801881310911";
      const message = `*New Portfolio Inquiry*\n\n` +
                      `*Name:* ${formData.firstName} ${formData.lastName}\n` +
                      `*Email:* ${formData.email}\n` +
                      `*Phone:* ${formData.phone || 'N/A'}\n` +
                      `*Service:* ${formData.service}\n` +
                      `*Message:* ${formData.message}`;
      
      const encodedMessage = encodeURIComponent(message);
      // Use wa.me which works best for mobile and desktop
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      // Update UI status
      setFormStatus('success');
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'Choose service',
        message: ''
      });
      
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error("Error in redirection:", error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div ref={heroRef} className="min-h-screen bg-premium-dark text-white selection:bg-brand-purple selection:text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-purple z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Decorative Blobs */}
      <div className="glow-blob w-[500px] h-[500px] top-[-100px] right-[-100px]" />
      <div className="glow-blob w-[400px] h-[400px] bottom-[10%] left-[-100px] opacity-10" />

      {/* Navigation */}
      <div className="fixed top-4 md:top-6 left-0 right-0 z-[100] px-4 md:px-6">
        <nav className={`max-w-5xl mx-auto transition-all duration-500 rounded-full border border-white/10 ${scrolled ? 'bg-black/60 backdrop-blur-xl py-2.5 px-6 shadow-2xl' : 'bg-white/5 backdrop-blur-md py-3 px-8'}`}>
          <div className="flex justify-between items-center">
            <motion.a 
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-display font-bold tracking-tighter flex items-center gap-2 group cursor-pointer"
            >
              <div className="flex flex-col leading-none">
                <span className="text-[9px] font-bold tracking-widest uppercase transition-colors text-brand-purple">Meharujjaman</span>
                <span className="text-lg font-bold uppercase tracking-tighter">Sowrav.</span>
              </div>
            </motion.a>

            <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-widest font-bold text-white/50">
              {['About', 'Services', 'Work', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="hover:text-brand-purple transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-purple hover:bg-brand-hover text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg shadow-brand-purple/20 hidden md:block"
              >
                Hire Me
              </motion.a>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white w-10 h-10 flex items-center justify-center bg-white/5 rounded-full"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[90] bg-black/80 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['About', 'Services', 'Work', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-display font-bold uppercase tracking-tighter hover:text-brand-purple transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 bg-brand-purple px-12 py-4 rounded-full font-bold uppercase tracking-widest"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 premium-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full py-12 md:py-20 relative z-10">
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-12 lg:col-span-7 hero-content">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-12 h-[2px] bg-brand-purple" />
                <span className="text-brand-purple text-sm font-bold uppercase tracking-[0.3em]">Available for projects</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-[100px] mb-8 leading-[1] font-display font-bold text-white">
                Designing <br />
                <span className="text-brand-purple italic">Digital</span> Experiences
              </h1>
              
              <p className="text-lg md:text-xl text-white/50 mb-12 max-w-xl font-light leading-relaxed">
                I'm <span className="text-brand-purple font-semibold">Meharujjaman</span> Sowrav, a <span className="text-white font-medium">Full-Stack Web Designer</span> and <span className="text-white font-medium">SEO Specialist</span> dedicated to crafting high-performance digital products that convert.
              </p>
              
              <div className="flex flex-wrap gap-8 items-center">
                <motion.a 
                  href="#work" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-purple text-white px-10 py-5 rounded-full font-display text-sm uppercase tracking-widest font-bold shadow-2xl shadow-brand-purple/20 flex items-center gap-3 group"
                >
                  View My Work
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </motion.a>
                
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-premium-dark overflow-hidden bg-premium-card">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-bold">500+ Clients</div>
                    <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Worldwide satisfied</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 flex justify-center hero-image">
              <div className="relative w-full max-w-[500px]">
                {/* Decorative background elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-purple/10 blur-[100px] rounded-full" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-purple/20 blur-[50px] rounded-full animate-pulse" />
                
                <div className="relative z-10 w-full aspect-[4/5] bg-premium-card rounded-[3rem] overflow-hidden border-2 border-white/5 shadow-2xl group">
                  <img 
                     src="input_file_1.png" 
                     alt="Meharujjaman Sowrav Hero"
                     className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-8 left-8 right-8 p-6 glass-dark rounded-2xl flex items-center gap-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-12 h-12 rounded-xl bg-brand-purple/20 flex items-center justify-center">
                      <Sparkles className="text-brand-purple" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Top Rated Expert</div>
                      <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Web & SEO</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="absolute bottom-10 left-0 right-0 hidden lg:block stats-row">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-12">
            {[
              { val: '05', label: 'Years of Experience' },
              { val: '300+', label: 'Projects Completed' },
              { val: '100%', label: 'Success Rate' },
              { val: '50+', label: 'Global Awards' }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-5 stat-item border-l border-white/5 pl-8 first:border-0 first:pl-0">
                <div className="text-5xl font-display font-bold text-white">{stat.val}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold leading-tight max-w-[80px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-32 relative bg-premium-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24 gsap-reveal">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">My Quality <span className="text-brand-purple">Services</span></h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm md:text-base">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
          </div>

          <div className="space-y-4">
            {SERVICES.map((service, index) => (
              <div 
                key={index}
                className="group border-b border-white/5 py-8 md:py-12 px-2 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 transition-all cursor-pointer hover:bg-premium-card/50 gsap-reveal"
              >
                <div className="flex items-center gap-6 md:gap-12 text-left flex-1">
                  <span className="text-3xl md:text-5xl font-display font-bold opacity-10 group-hover:text-brand-purple group-hover:opacity-100 transition-all">0{index + 1}</span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold group-hover:text-brand-purple transition-all">{service.title}</h3>
                </div>
                <p className="text-white/40 max-w-md text-xs md:text-sm leading-relaxed">{service.description}</p>
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-brand-purple/30 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all -rotate-45 group-hover:rotate-0 self-end md:self-center">
                  <ArrowRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-32 bg-premium-dark relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 gsap-reveal">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">My <span className="text-brand-purple">Skills</span></h2>
            <p className="text-white/50 max-w-xl mx-auto">I am skilled in a variety of modern technologies and tools to deliver top-notch results.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'WordPress', icon: Layout, level: '95%' },
              { name: 'Elementor', icon: Wind, level: '98%' },
              { name: 'SEO', icon: Search, level: '90%' },
              { name: 'UI Design', icon: Palette, level: '85%' },
              { name: 'Speed Opt', icon: Zap, level: '92%' },
              { name: 'Custom CSS', icon: Code, level: '88%' }
            ].map((skill, i) => (
              <div 
                key={i}
                className="bg-premium-card p-8 rounded-3xl border border-white/5 flex flex-col items-center group hover:border-brand-purple/50 transition-all relative overflow-hidden gsap-reveal"
              >
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-purple/20 transition-all relative z-10">
                  <skill.icon size={32} className="text-brand-purple" />
                </div>
                <div className="text-2xl font-display font-bold mb-2 relative z-10">{skill.level}</div>
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-40 group-hover:opacity-100 transition-all relative z-10">{skill.name}</div>
                
                {/* Progress Bar background overlay */}
                <div className="absolute bottom-0 left-0 h-1 bg-brand-purple/30 w-full" />
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute bottom-0 left-0 h-1 bg-brand-purple" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-32 relative bg-premium-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 md:gap-20 items-center">
            <div className="md:col-span-12 lg:col-span-5 gsap-reveal">
              <div className="w-full aspect-[3/4] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden grayscale brightness-105 border-2 border-brand-purple/20 group">
                <img 
                  src="input_file_0.png" 
                  alt="Meharujjaman Sowrav About" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" 
                />
              </div>
            </div>

            <div className="md:col-span-12 lg:col-span-7 gsap-reveal">
              <h2 className="text-4xl md:text-6xl mb-6 md:mb-8 font-display font-bold leading-tight">My <span className="text-brand-purple">Experience</span></h2>
              
              <div className="space-y-4 md:space-y-6">
                 {[
                   { date: '2022 - Present', title: 'Lead Web Designer', company: 'Digital Elite' },
                   { date: '2020 - 2022', title: 'WordPress Specialist', company: 'Creative Flow' },
                   { date: '2019 - 2020', title: 'SEO Strategist', company: 'RankBoost' }
                 ].map((exp, i) => (
                   <div key={i} className="bg-premium-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-brand-purple/30 transition-all group">
                     <div className="text-brand-purple text-[10px] font-bold uppercase mb-2">{exp.date}</div>
                     <div className="text-lg md:text-xl font-bold group-hover:text-brand-purple transition-all">{exp.title}</div>
                     <div className="text-white/40 text-xs md:text-sm mt-1">{exp.company}</div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline Section */}
      <section id="education" className="py-16 md:py-32 bg-premium-dark relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-20 gsap-reveal">
             <div className="w-12 h-12 bg-linear-to-br from-brand-purple to-brand-hover rounded-xl flex items-center justify-center">
               <GraduationCap className="text-white" />
             </div>
             <h2 className="text-5xl font-display font-bold uppercase tracking-tighter">My Education.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { date: '2022 - 2024', title: 'Web Development Certification', company: 'Google Academy' },
              { date: '2019 - 2021', title: 'WordPress Advanced Master', company: 'ThemeJunction Institute' },
              { date: '2017 - 2019', title: 'Digital Marketing Diploma', company: 'Global Tech' },
              { date: '2015 - 2017', title: 'Computer Science Basics', company: 'Tech Hub' }
            ].map((edu, i) => (
              <div 
                key={i}
                className="bg-premium-card p-8 rounded-2xl border border-white/5 hover:border-brand-purple/30 transition-all group gsap-reveal"
              >
                <div className="text-brand-purple text-xs font-bold uppercase mb-2">{edu.date}</div>
                <div className="text-2xl font-bold group-hover:text-brand-purple transition-all">{edu.title}</div>
                <div className="text-white/40 text-sm mt-1">{edu.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-12 md:py-32 bg-premium-dark relative overflow-hidden">
        {/* Background Gradient Effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-brand-purple/10 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 md:mb-24 gsap-reveal">
            <h2 className="text-4xl md:text-8xl font-display font-bold mb-6 md:mb-8 uppercase tracking-tighter">Recent <span className="text-brand-purple">Projects.</span></h2>
            <div className="border-t border-white/5 pt-8 md:pt-12">
              <p className="text-white/40 max-w-sm mx-auto text-center text-xs md:text-sm leading-relaxed">
                A curated collection of WordPress experiences built with precision and modern design standards.
              </p>
            </div>
          </div>

          <div className="flex flex-col border-t border-white/5">
            <AnimatePresence mode="popLayout">
              {PROJECTS.slice(0, visibleProjects).map((project, index) => (
                <a 
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col md:flex-row items-center py-8 md:py-12 px-4 md:px-8 border-b border-white/5 transition-all duration-500 hover:bg-brand-purple/5 project-card gsap-reveal"
                >
                  {/* Icon/Index */}
                  <div className="flex items-center gap-6 mb-4 md:mb-0 md:w-[10%]">
                    <div className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-white/20 group-hover:text-brand-purple group-hover:border-brand-purple/50 transition-all">
                      <Layout size={18} />
                    </div>
                    <div className="w-[1px] h-6 bg-white/10" />
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-4xl font-display font-bold mb-2 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/40 text-sm font-medium tracking-tight group-hover:text-white/60 transition-colors">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Category & Arrow */}
                  <div className="flex items-center gap-12 mt-6 md:mt-0">
                    <div className="hidden md:block text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 group-hover:text-brand-purple transition-all">
                      WordPress
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-brand-purple group-hover:border-brand-purple group-hover:scale-110">
                      <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>
                </a>
              ))}
            </AnimatePresence>
            
            {visibleProjects < PROJECTS.length && (
              <div className="flex justify-center mt-12 mb-16 md:hidden gsap-reveal">
                <button 
                  onClick={() => setVisibleProjects(prev => prev + 4)}
                  className="px-10 py-4 bg-brand-purple rounded-full text-sm font-bold uppercase tracking-widest shadow-lg shadow-brand-purple/20 hover:scale-105 transition-all"
                >
                  Load More Projects
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-32 bg-premium-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-24 items-center">
            {/* Left Content */}
            <div className="lg:col-span-12 xl:col-span-5 gsap-reveal">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-4xl md:text-8xl font-display font-bold leading-[0.9] uppercase tracking-tighter mb-8 md:mb-12">
                  <span className="block text-white/20">300+</span>
                  <span className="block text-brand-purple">Built Sites</span>
                  <span className="block font-sans text-3xl md:text-8xl">Pure Quality.</span>
                </h2>
                
                <p className="text-white/40 text-base md:text-xl font-light leading-relaxed mb-8 md:mb-12 max-w-sm">
                  From conceptualizing brand identities to deploying high-converting architectures, I've spent half a decade bridging the gap between aesthetic brilliance and technical performance for market leaders globally.
                </p>
                
                <div className="flex flex-wrap gap-12 items-center">
                  <div>
                    <div className="text-4xl font-display font-bold mb-1">5.0</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-brand-purple">Average Rating</div>
                  </div>
                  <div className="w-[1px] h-10 bg-white/10" />
                  <div>
                    <div className="text-4xl font-display font-bold mb-1">100%</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-brand-purple">Project Success</div>
                  </div>
                </div>
                
                <div className="mt-16 pt-8 border-t border-white/5">
                  <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">Verified reviews from Fiverr, Upwork, and direct clients worldwide.</div>
                </div>
              </div>
            </div>

            {/* Right Scrollable Content */}
            <div className="lg:col-span-7 h-[600px] relative overflow-hidden gsap-reveal">
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-premium-dark to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-premium-dark to-transparent" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 h-full">
                {/* Column 1 - Downwards */}
                <div className="space-y-6 animate-vertical-scroll">
                  {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
                    <div key={i} className="bg-premium-card p-8 rounded-3xl border border-white/5 hover:border-brand-purple/30 transition-all group">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <div className="font-bold text-lg group-hover:text-brand-purple transition-colors">{testimonial.name}</div>
                          <div className="text-xs text-white/40 font-medium">{testimonial.country}</div>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(testimonial.rating)].map((_, j) => (
                            <div key={j} className="text-brand-purple text-[10px]">★</div>
                          ))}
                        </div>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                    </div>
                  ))}
                </div>

                {/* Column 2 - Upwards */}
                <div className="space-y-6 animate-vertical-scroll-reverse mt-12 md:mt-0">
                  {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
                    <div key={i} className="bg-premium-card p-8 rounded-3xl border border-white/5 hover:border-brand-purple/30 transition-all group">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <div className="font-bold text-lg group-hover:text-brand-purple transition-colors">{testimonial.name}</div>
                          <div className="text-xs text-white/40 font-medium">{testimonial.country}</div>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(testimonial.rating)].map((_, j) => (
                            <div key={j} className="text-brand-purple text-[10px]">★</div>
                          ))}
                        </div>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-32 relative bg-premium-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 md:gap-20">
            <div className="md:col-span-5 gsap-reveal">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 md:mb-8 leading-[1.1]">Let's work <br/><span className="text-brand-purple">together!</span></h2>
              <p className="text-white/60 mb-10 md:mb-12 text-sm md:text-lg font-light leading-relaxed">
                I design and code beautifully simple things and i love what i do. Just simple like that!
              </p>
              
              <div className="space-y-6 md:space-y-8">
                {[
                  { label: 'Phone', val: socialLinks.phone, icon: Phone },
                  { label: 'Email', val: 'meharujjaman.sowrav@gmail.com', icon: Mail }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-purple transition-all group">
                      <item.icon size={20} className="text-brand-purple group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">{item.label}</div>
                      <div className="text-sm sm:text-base md:text-xl font-bold break-all">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 md:mt-12">
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4 md:mb-6">Follow Me</div>
                <div className="flex gap-4">
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-purple transition-all group">
                    <Linkedin size={18} className="text-white/60 group-hover:text-white" />
                  </a>
                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-purple transition-all group">
                    <Facebook size={18} className="text-white/60 group-hover:text-white" />
                  </a>
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-purple transition-all group">
                    <Instagram size={18} className="text-white/60 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 bg-premium-card p-6 md:p-16 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5 gsap-reveal">
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <input 
                    type="text" 
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-premium-dark border border-white/10 rounded-xl px-6 py-4 focus:border-brand-purple outline-none transition-all placeholder:text-white/20 text-sm" 
                    placeholder="First name" 
                  />
                  <input 
                    type="text" 
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-premium-dark border border-white/10 rounded-xl px-6 py-4 focus:border-brand-purple outline-none transition-all placeholder:text-white/20 text-sm" 
                    placeholder="Last name" 
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-premium-dark border border-white/10 rounded-xl px-6 py-4 focus:border-brand-purple outline-none transition-all placeholder:text-white/20 text-sm" 
                    placeholder="Email address" 
                  />
                  <input 
                    type="text" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-premium-dark border border-white/10 rounded-xl px-6 py-4 focus:border-brand-purple outline-none transition-all placeholder:text-white/20 text-sm" 
                    placeholder="Phone number" 
                  />
                </div>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-premium-dark border border-white/10 rounded-xl px-6 py-4 focus:border-brand-purple outline-none transition-all text-white/20 text-sm"
                >
                  <option disabled>Choose service</option>
                  <option>Web Design</option>
                  <option>SEO</option>
                </select>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-premium-dark border border-white/10 rounded-xl px-6 py-4 focus:border-brand-purple outline-none transition-all placeholder:text-white/20 text-sm resize-none" 
                  placeholder="Message"
                ></textarea>
                
                <div className="flex flex-col gap-4">
                  <button 
                    disabled={formStatus === 'submitting'}
                    className="w-full md:w-auto bg-linear-to-r from-brand-purple to-brand-hover text-white px-10 md:px-12 py-4 md:py-5 rounded-full font-display font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 text-[10px] md:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>

                  {formStatus === 'success' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-sm font-medium">
                      Message sent successfully! I'll get back to you soon.
                    </motion.p>
                  )}
                  {formStatus === 'error' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm font-medium">
                      Something went wrong. Please check your connection or try again later.
                    </motion.p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-20 bg-premium-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-2xl font-display font-bold tracking-tighter mb-8">
            SOWRAV<span className="text-brand-purple">.</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] uppercase tracking-widest font-bold text-white/40 mb-12">
            <a href="#services" className="hover:text-brand-purple transition-colors">Services</a>
            <a href="#work" className="hover:text-brand-purple transition-colors">Works</a>
            <a href="#about" className="hover:text-brand-purple transition-colors">Experience</a>
            <a href="#skills" className="hover:text-brand-purple transition-colors">Skills</a>
            <a href="#education" className="hover:text-brand-purple transition-colors">Education</a>
            <a href="#contact" className="hover:text-brand-purple transition-colors">Contact</a>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-purple transition-all group">
              <Linkedin size={18} className="text-white/40 group-hover:text-white" />
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-purple transition-all group">
              <Facebook size={18} className="text-white/40 group-hover:text-white" />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-purple transition-all group">
              <Instagram size={18} className="text-white/40 group-hover:text-white" />
            </a>
          </div>

          <div className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold">
            © 2024 All Rights Reserved by ThemeJunction
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <motion.button 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: scrolled ? 1 : 0, scale: scrolled ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 w-12 h-12 bg-brand-purple text-white rounded-full flex items-center justify-center shadow-lg shadow-brand-purple/40 z-[50] hover:scale-110 transition-transform"
      >
        <ArrowRight className="-rotate-90" />
      </motion.button>
    </div>
  );
}
