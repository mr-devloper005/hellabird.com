import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#fbf7ef',
  '--slot4-page-text': '#1a120d',
  '--slot4-panel-bg': '#eee9e1',
  '--slot4-surface-bg': '#ffffff',
  '--slot4-muted-text': '#5c5148',
  '--slot4-soft-muted-text': '#776d63',
  '--slot4-accent': '#9f5f3f',
  '--slot4-accent-fill': '#1a120d',
  '--slot4-accent-soft': '#e4d3c4',
  '--slot4-dark-bg': '#1a120d',
  '--slot4-dark-text': '#fffaf3',
  '--slot4-media-bg': '#e9e0d5',
  '--slot4-cream': '#fbf7ef',
  '--slot4-warm': '#fffdf8',
  '--slot4-lavender': '#eee9e1',
  '--slot4-gray': '#f2eee7',
  '--slot4-body-gradient': 'linear-gradient(180deg, #fbf7ef 0%, #fffdf8 46%, #f2eee7 100%)',
  '--editable-page-bg': '#fbf7ef',
  '--editable-page-text': '#1a120d',
  '--editable-border': 'rgba(26,18,13,0.16)',
  '--editable-container': '1180px',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-black/[0.06]',
  darkBorder: 'border-white/10',
  shadow: 'shadow-[0_12px_40px_rgba(0,0,0,0.08)]',
  shadowStrong: 'shadow-[0_18px_70px_rgba(0,0,0,0.14)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.62))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8',
    sectionY: 'py-12 sm:py-14 lg:py-16',
  },
  layout: {
    safeGrid: 'grid gap-6 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center',
    rail: 'flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[140px] shrink-0 snap-start sm:w-[160px]',
  },
  type: {
    eyebrow: 'text-[11px] font-black uppercase tracking-[0.26em]',
    heroTitle: 'font-serif text-5xl font-normal leading-[0.96] tracking-normal sm:text-6xl lg:text-7xl',
    sectionTitle: 'font-serif text-3xl font-normal tracking-normal sm:text-5xl',
    body: 'text-base leading-relaxed',
  },
  surface: {
    card: `rounded-none border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    soft: `rounded-none border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `rounded-none ${editablePalette.darkBg} ${editablePalette.darkText}`,
  },
  button: {
    primary: `inline-flex items-center justify-center border border-[var(--slot4-page-text)] ${editablePalette.darkBg} px-7 py-3 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:bg-transparent hover:text-[var(--slot4-page-text)]`,
    secondary: `inline-flex items-center justify-center border ${editablePalette.border} ${editablePalette.surfaceBg} px-7 py-3 text-xs font-black uppercase tracking-[0.22em] ${editablePalette.surfaceText} transition hover:bg-black/[0.03]`,
    accent: `inline-flex items-center justify-center border border-[var(--slot4-accent)] ${editablePalette.accentBg} px-7 py-3 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:opacity-90`,
  },
  media: {
    frame: `relative overflow-hidden ${editablePalette.mediaBg}`,
    ratio: 'aspect-[2/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,0,0,0.14)]',
    fade: 'transition duration-300 hover:opacity-80',
  },
} as const

export const aiLayoutRules = [
  'Change the full site color palette in editableRootStyle first; all homepage sections consume those CSS variables.',
  'Keep page structure in src/editable/sections/HomeSections.tsx so AI can redesign the whole home experience in one file.',
  'Use wide readable grids; never create skinny columns for paragraphs or cards.',
  'Use horizontal rails for dense post browsing, like the MysteryCoder reference layout.',
  'Keep dynamic post fetching intact; do not replace posts with mock arrays.',
  'Use postHref() for all post links so task-specific routes keep working.',
] as const
