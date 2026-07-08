/** Shared domain types for the HIELO site. */

export interface PipelineStage {
  id: string;
  title: string;
  description: string;
}

export interface TechItem {
  id: string;
  label: string;
  blurb: string;
  glyph: string;
}

export interface StatItem {
  value: string;
  emphasis: string;
  label: string;
}

export interface WhoPoint {
  k: string;
  title: string;
  body: string;
}

export interface NavLink {
  href: string;
  label: string;
}
