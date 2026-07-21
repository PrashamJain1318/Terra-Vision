import LandingContent from '../models/LandingContent.js';
import Feature from '../models/Feature.js';
import Statistic from '../models/Statistic.js';
import Testimonial from '../models/Testimonial.js';

export const getHeroData = async () => {
  const content = await LandingContent.findOne({ section: 'hero' });
  return content ? content.data : null;
};

export const getFeaturesList = async () => {
  return await Feature.find({}).sort({ displayOrder: 1 });
};

export const getStatisticsList = async () => {
  return await Statistic.find({}).sort({ displayOrder: 1 });
};

export const getTestimonialsList = async () => {
  return await Testimonial.find({}).sort({ createdAt: -1 });
};

export const getFooterData = async () => {
  const content = await LandingContent.findOne({ section: 'footer' });
  return content ? content.data : null;
};
