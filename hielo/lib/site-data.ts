export type NavItem = { href: string; label: string };
export type Metric = { value: string; label: string; detail: string };
export type Feature = { title: string; body: string; accent?: string };
export type Pattern = {
  slug: string;
  name: string;
  market: string;
  summary: string;
  edge: string;
  validation: string;
};

export const BRAND = {
  name: 'HIELO',
  company: 'HIELO TECHNOLOGIE',
  product: 'HQRP',
  tagline: 'Discover Market Intelligence Through AI.',
  email: 'research@hielo.tech',
} as const;

export const MAIN_NAV: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/research', label: 'Research' },
  { href: '/pattern-library', label: 'Pattern Library' },
  { href: '/ai-lab', label: 'AI Lab' },
  { href: '/technology', label: 'Technology' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/documentation', label: 'Documentation' },
  { href: '/careers', label: 'Careers' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

export const HOME_METRICS: Metric[] = [
  { value: '18Y+', label: 'Structured market history', detail: 'Cross-session datasets with institutional cleaning standards.' },
  { value: '2.4M', label: 'Behaviours evaluated', detail: 'Candidate patterns screened through statistical gates.' },
  { value: '0.94', label: 'Average confidence band', detail: 'Illustrative quality score across validated research cohorts.' },
  { value: '24/7', label: 'Continuous re-testing', detail: 'Research pipelines re-score patterns as new data arrives.' },
];

export const HOME_PILLARS: Feature[] = [
  {
    title: 'Institutional research posture',
    body: 'HIELO is presented as a research company first: precise language, disciplined layouts, and no broker-style conversion theatre.',
    accent: 'blue',
  },
  {
    title: 'Statistical discipline',
    body: 'Every claim is framed through significance, repeatability, regime context, and auditability instead of directional promises.',
    accent: 'emerald',
  },
  {
    title: 'Premium product experience',
    body: 'The interface feels like enterprise software with editorial restraint, measured motion, and selected dark showcases for depth.',
    accent: 'gold',
  },
];

export const WORKFLOW: Feature[] = [
  { title: 'Data Collection', body: 'Institutional-grade multi-market ingestion across Forex, Gold, indices, and session-level context.' },
  { title: 'Normalization', body: 'Outlier removal, calendar alignment, rollover handling, and source reconciliation before any signal work starts.' },
  { title: 'Feature Engineering', body: 'VWAP relationships, volatility state, ORB framing, liquidity structure, and temporal fingerprints.' },
  { title: 'Discovery Engine', body: 'Machine-learning systems search for recurrent configurations with meaningful separation from noise.' },
  { title: 'Validation', body: 'Out-of-sample tests, multiple-comparison correction, regime analysis, and stability scoring.' },
  { title: 'Research Delivery', body: 'Patterns become explorable assets inside HQRP with notes, snapshots, audit trails, and API access.' },
];

export const FEATURED_RESEARCH: Feature[] = [
  {
    title: 'London open imbalance persistence',
    body: 'A session-conditional tendency showing stronger continuation when opening range expansion aligns with liquidity refill behaviour.',
  },
  {
    title: 'XAU/USD mean reversion windows',
    body: 'Gold exhibits more reliable reversion characteristics when volatility compression and VWAP displacement thresholds coincide.',
  },
  {
    title: 'Multi-session breakout failure clustering',
    body: 'False breaks become more predictable when prior-session extremes and intraday volume concentration overlap.',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'The product language feels like a quantitative lab, not a retail trading funnel. That distinction builds trust immediately.',
    person: 'Research Director',
    company: 'Macro Systems Group',
  },
  {
    quote: 'HQRP communicates evidence, repeatability, and governance with unusual clarity. It reads like serious institutional tooling.',
    person: 'Head of Data Science',
    company: 'Private Research Partner',
  },
];

export const PATTERNS: Pattern[] = [
  {
    slug: 'london-orb-continuation',
    name: 'London ORB Continuation',
    market: 'Forex',
    summary: 'Opening range expansions that maintain participation and avoid early re-entry often persist through the London session.',
    edge: 'Best observed when volatility regime is neutral-to-expansive and pre-open liquidity is balanced.',
    validation: '1,204 samples, 61.4% hit rate, 0.94 confidence score.',
  },
  {
    slug: 'xau-vwap-reversion-window',
    name: 'XAU/USD VWAP Reversion Window',
    market: 'Gold',
    summary: 'Extreme intraday displacement from anchored VWAP often compresses back toward value during specific session overlaps.',
    edge: 'Stronger when early session momentum fades and liquidity begins to refill near prior value bands.',
    validation: '874 samples, 58.2% hit rate, p < 0.01 after correction.',
  },
  {
    slug: 'index-liquidity-failure',
    name: 'Index Liquidity Failure',
    market: 'Indices',
    summary: 'Breakouts into thin liquidity can fail rapidly when volume breadth diverges from price extension.',
    edge: 'Most reliable around US cash open and post-news compression cycles.',
    validation: '643 samples, 2.1R average expectancy in synthetic preview cohort.',
  },
  {
    slug: 'asia-range-mean-reversion',
    name: 'Asia Range Mean Reversion',
    market: 'Sessions',
    summary: 'Compressed Asian session structure can create repeatable mean-reversion conditions into early European flow.',
    edge: 'Improves when overnight range forms inside prior daily value and macro calendar pressure is low.',
    validation: '982 samples, regime-stable across five-year walk-forward windows.',
  },
];

export const BLOG_POSTS = [
  { title: 'Why repeatability matters more than prediction', category: 'Research', author: 'HIELO Research', date: 'Jul 2026' },
  { title: 'Designing feature spaces for market behaviour discovery', category: 'AI', author: 'Lab Systems', date: 'Jun 2026' },
  { title: 'Operational discipline for quantitative research teams', category: 'Engineering', author: 'Platform Group', date: 'May 2026' },
  { title: 'Release note: research workspace v2', category: 'Announcements', author: 'Product Operations', date: 'Apr 2026' },
];

export const DOC_SECTIONS = [
  'Platform Overview',
  'Getting Started',
  'API Documentation',
  'Research Methodology',
  'FAQs',
  'Release Notes',
];

export const JOB_OPENINGS = [
  'Senior Quantitative Researcher',
  'Frontend Product Engineer',
  'Machine Learning Engineer',
  'Research Data Engineer',
  'Platform Security Engineer',
];

export const PRICING_PLANS = [
  { name: 'Free', price: '$0', summary: 'Public research, limited pattern views, and documentation access.' },
  { name: 'Professional', price: '$299', summary: 'Workspace tools, saved patterns, AI reports, and API access.' },
  { name: 'Enterprise', price: 'Custom', summary: 'Team governance, advanced permissions, private research cohorts, and white-glove support.' },
];

export const DASHBOARD_MODULES = [
  'Research Workspace',
  'Saved Patterns',
  'Watchlists',
  'AI Reports',
  'Downloads',
  'Notifications',
  'Settings',
  'Billing',
  'API Keys',
  'Security',
];

export const ADMIN_MODULES = [
  'Users',
  'Roles & Permissions',
  'Research Articles',
  'Pattern Library',
  'Media Manager',
  'Analytics',
  'Support Tickets',
  'Announcements',
  'Feature Flags',
  'Audit Logs',
];