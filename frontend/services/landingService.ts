import api from '@/utils/api';
import { ApiResponse } from './apiService';

export interface HeroData {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundConfig: {
    auroraColors: string[];
    blurValue: string;
  };
}

export interface FeatureData {
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

export interface StatData {
  key: string;
  value: string;
  label: string;
}

export interface TestimonialData {
  name: string;
  country: string;
  review: string;
  rating: number;
}

export interface FooterData {
  contactEmail: string;
  copyright: string;
  socialLinks: Array<{ name: string; url: string }>;
  footerLinks: Array<{ name: string; url: string }>;
}

export const landingService = {
  getHero: async (): Promise<ApiResponse<HeroData>> => {
    try {
      const response = await api.get<ApiResponse<HeroData>>('/v1/landing/hero');
      return response.data;
    } catch {
      return { success: false, message: 'Using default hero configuration' } as any;
    }
  },
  getFeatures: async (): Promise<ApiResponse<FeatureData[]>> => {
    try {
      const response = await api.get<ApiResponse<FeatureData[]>>('/v1/landing/features');
      return response.data;
    } catch {
      return { success: false, message: 'Using default features configuration' } as any;
    }
  },
  getStatistics: async (): Promise<ApiResponse<StatData[]>> => {
    try {
      const response = await api.get<ApiResponse<StatData[]>>('/v1/landing/statistics');
      return response.data;
    } catch {
      return { success: false, message: 'Using default statistics configuration' } as any;
    }
  },
  getTestimonials: async (): Promise<ApiResponse<TestimonialData[]>> => {
    try {
      const response = await api.get<ApiResponse<TestimonialData[]>>('/v1/landing/testimonials');
      return response.data;
    } catch {
      return { success: false, message: 'Using default testimonials configuration' } as any;
    }
  },
  getFooter: async (): Promise<ApiResponse<FooterData>> => {
    try {
      const response = await api.get<ApiResponse<FooterData>>('/v1/landing/footer');
      return response.data;
    } catch {
      return { success: false, message: 'Using default footer configuration' } as any;
    }
  },
};

export default landingService;
