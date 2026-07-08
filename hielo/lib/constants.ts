import type {
  PipelineStage, TechItem, StatItem, WhoPoint, NavLink,
} from '@/types';

/**
 * Single source of truth for site content.
 * Editing copy here updates it everywhere — sections read from these arrays.
 */

export const BRAND = {
  name: 'HIELO',
  full: 'HIELO Quantitative Research Partner',
  short: 'HQRP',
  tagline: 'Discover Patterns Before the Market Does.',
  email: 'research@hielo.tech',
} as const;

export const NAV_LINKS: NavLink[] = [
  { href: '#who', label: 'Who We Are' },
  { href: '#philosophy', label: 'Research' },
  { href: '#network', label: 'Intelligence' },
  { href: '#dashboard', label: 'Platform' },
  { href: '#vision', label: 'Vision' },
];

export const HERO = {
  tag: 'HQRP — Institutional-grade research',
  headlineTop: "We don't predict markets.",
  headlineBottom: 'We discover repeatable market behaviour.',
  sub:
    'AI-powered quantitative research for Forex and Gold markets — surfacing statistically significant patterns hidden in decades of price history.',
  primaryCta: 'Explore Research',
  secondaryCta: 'Our Methodology',
} as const;

export const HERO_STATS: StatItem[] = [
  { value: 'Y+', emphasis: '18', label: 'Historical data studied' },
  { value: 'M+', emphasis: '2', label: 'Behaviours evaluated' },
  { value: '', emphasis: 'p<0.01', label: 'Validation threshold' },
  { value: '', emphasis: '0', label: 'Signals sold, ever' },
];

export const WHO_POINTS: WhoPoint[] = [
  { k: '01', title: 'Evidence over intuition',
    body: 'Every claimed pattern must survive out-of-sample testing before it enters the library.' },
  { k: '02', title: 'Repeatability first',
    body: "We study behaviours that recur — not one-off forecasts about tomorrow's candle." },
  { k: '03', title: 'Institutional discipline',
    body: 'Statistical validation, confidence scoring, and full audit trails on every finding.' },
];

export const PIPELINE: PipelineStage[] = [
  { id: '01', title: 'Raw Market Data', description: 'Years of tick-level Forex & Gold history ingested from institutional-grade sources.' },
  { id: '02', title: 'Cleaning', description: 'Gaps, outliers, session boundaries and instrument quirks are normalised and reconciled.' },
  { id: '03', title: 'Feature Engineering', description: 'Volatility regimes, session structure, VWAP relationships and volume signatures are derived.' },
  { id: '04', title: 'Pattern Discovery', description: 'Machine-learning search scans for behaviours that recur far more often than chance allows.' },
  { id: '05', title: 'Statistical Validation', description: 'Candidates face out-of-sample tests, multiple-comparison correction and significance thresholds.' },
  { id: '06', title: 'Confidence Analysis', description: 'Survivors are scored for strength, stability and regime-dependence — no black boxes.' },
  { id: '07', title: 'Research Library', description: 'Validated behaviours are catalogued, versioned and continuously re-tested against new data.' },
];

export const TECH: TechItem[] = [
  { id: '01', label: 'AI Research', glyph: '🛰', blurb: 'Autonomous search across enormous behaviour spaces.' },
  { id: '02', label: 'Machine Learning', glyph: '◈', blurb: 'Models tuned for signal-vs-noise separation.' },
  { id: '03', label: 'Python', glyph: '‹/›', blurb: 'The research stack, end to end and reproducible.' },
  { id: '04', label: 'Statistical Models', glyph: '∑', blurb: 'Significance, correction, and confidence scoring.' },
  { id: '05', label: 'Data Engineering', glyph: '⛁', blurb: 'Tick-level pipelines built for scale and integrity.' },
  { id: '06', label: 'Pattern Recognition', glyph: '◎', blurb: 'Detecting recurrence beneath market noise.' },
  { id: '07', label: 'Backtesting', glyph: '↺', blurb: 'Rigorous out-of-sample validation frameworks.' },
  { id: '08', label: 'Automation', glyph: '⚙', blurb: 'Continuous re-testing as new data arrives.' },
];

export const VISION = {
  headlineTop: 'Continuous discovery,',
  headlineBottom: 'as an institution.',
  body:
    'Markets evolve; so must the research. HIELO is building an engine that never stops learning — turning quantitative finance into a living, self-correcting body of evidence rather than a fixed set of rules.',
  pillars: ['Artificial Intelligence', 'Research', 'Quantitative Finance', 'Continuous Discovery'],
} as const;
