/**
 * Experience Score Classification Config
 */

export interface ExperienceScoreTier {
  minScore: number;
  label: string;
  badgeColor: string;
}

export const EXPERIENCE_SCORE_TIERS: ExperienceScoreTier[] = [
  { minScore: 9.5, label: 'Must-Visit Secret Gem', badgeColor: 'text-amber-400 border-amber-400/40 bg-amber-400/10' },
  { minScore: 8.5, label: 'Highly Recommended', badgeColor: 'text-emerald-400 border-emerald-400/40 bg-emerald-400/10' },
  { minScore: 7.0, label: 'Local Favorite', badgeColor: 'text-blue-400 border-blue-400/40 bg-blue-400/10' },
];

export default EXPERIENCE_SCORE_TIERS;
