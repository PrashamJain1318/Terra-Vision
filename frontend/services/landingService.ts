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
    const response = await api.get<ApiResponse<HeroData>>('/v1/landing/hero');
    return response.data;
  },
  getFeatures: async (): Promise<ApiResponse<FeatureData[]>> => {
    const response = await api.get<ApiResponse<FeatureData[]>>('/v1/landing/features');
    return response.data;
  },
  getStatistics: async (): Promise<ApiResponse<StatData[]>> => {
    const response = await api.get<ApiResponse<StatData[]>>('/v1/landing/statistics');
    return response.data;
  },
  getTestimonials: async (): Promise<ApiResponse<TestimonialData[]>> => {
    const response = await api.get<ApiResponse<TestimonialData[]>>('/v1/landing/testimonials');
    return response.data;
  },
  getFooter: async (): Promise<ApiResponse<FooterData>> => {
    const response = await api.get<ApiResponse<FooterData>>('/v1/landing/footer');
    return response.data;
  },
};

export default landingService;
