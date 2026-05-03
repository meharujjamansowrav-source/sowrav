import { Project, Service, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Sophie Paterson',
    category: 'WORDPRESS',
    url: 'https://www.sophiepatersoninteriors.com/',
    description: 'High-end luxury interior design portal',
    imageDescription: 'Luxury interior design portfolio website with elegant typography',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '2',
    title: 'Chauffeur Amsterdam',
    category: 'CUSTOM CODE',
    url: 'https://theconstructionsolution.com/',
    description: 'Premium chauffeur service & booking system',
    imageDescription: 'Modern construction company website showing architectural details',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '3',
    title: 'Loft Kings UK',
    category: 'WORDPRESS',
    url: 'https://loftkingsuk.co.uk/',
    description: 'Construction and loft conversion specialist',
    imageDescription: 'Residential loft conversion website showing high-end home improvements',
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '4',
    title: 'Legacy Injury Clinics',
    category: 'MEDICAL',
    url: 'https://legacyinjuryclinics.com/',
    description: 'Medical and healthcare services platform',
    imageDescription: 'Professional medical clinic website with clean white layout',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '5',
    title: 'Franchisee Pros',
    category: 'BUSINESS',
    url: 'https://franchiseepros.com/',
    description: 'Business franchise consulting portal',
    imageDescription: 'Corporate business consulting website with professional imagery',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '6',
    title: 'Rokos Technology',
    category: 'CUSTOM CODE',
    url: 'https://rokostechnology.com/',
    description: 'IT solutions and technology services',
    imageDescription: 'Clean corporate tech website with blue accents',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'WordPress Website Design',
    description: 'Bespoke, high-converting WordPress websites tailored to your brand identity and business goals.',
    icon: 'Layout'
  },
  {
    title: 'SEO Optimization',
    description: 'Technical and on-page SEO strategies to boost your organic visibility and search engine rankings.',
    icon: 'Search'
  },
  {
    title: 'Speed Optimization',
    description: 'Lightning-fast performance tuning to ensure your site loads instantly on all devices.',
    icon: 'Zap'
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive user experiences and beautiful interfaces that delight visitors and drive conversions.',
    icon: 'Palette'
  },
  {
    title: 'Website Redesign',
    description: 'Transforming outdated websites into modern, high-performing digital assets.',
    icon: 'RefreshCw'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, Interior Trends',
    country: 'United States',
    rating: 5,
    content: 'Meharujjaman transformed our online presence. His attention to detail in WordPress design is unmatched. Our conversion rate increased by 40% after the redesign.'
  },
  {
    name: 'Ramendez',
    role: 'Founder, TechPulse',
    country: 'United States',
    rating: 5,
    content: 'I recently hired Meharujjaman to clone a website to WordPress, and I couldn\'t be happier with the results! The communication was clear and timely, and they delivered everything exactly as I wanted.'
  },
  {
    name: 'Dervolko',
    role: 'Director, Urban Builds',
    country: 'Germany',
    rating: 5,
    content: 'Working with Meharujjaman was an absolute pleasure! His professionalism and meticulous attention to detail ensured a flawless, bug-free delivery. His deep understanding and quick responsiveness made the project a breeze.'
  },
  {
    name: 'JK1098765',
    role: 'Marketing Lead',
    country: 'Netherlands',
    rating: 5,
    content: 'Meharujjaman delivered exactly what he promised. Clear communication, fast execution and honest guidance during the process. His technical knowledge is strong and he explains everything in detail.'
  },
  {
    name: 'Nitenrz',
    role: 'Product Manager',
    country: 'United States',
    rating: 5,
    content: 'The seller was able to follow the vision I had for my website. This is my second gig with them. I highly recommend this service. Great at capturing exactly what I wanted.'
  },
  {
    name: 'Monschmeister_',
    role: 'Developer',
    country: 'Germany',
    rating: 5,
    content: 'Was a tough project with many hidden details. We had 2 freelancers cancel the gig due to the complexity, which is when we hired Meharujjaman, he made an exceptional job for us.'
  },
  {
    name: 'Yavnzeya',
    role: 'Art Director',
    country: 'Canada',
    rating: 5,
    content: 'He\'s more than just a contractor, he\'s a collaborator! Great communication and understands the project goals perfectly. Always a pleasure to work with him.'
  }
];
