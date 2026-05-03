export interface Project {
  id: string;
  title: string;
  category: string;
  url: string;
  imageDescription: string;
  description?: string;
  image?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
  country?: string;
  rating?: number;
}
