import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Editorial articles for curious readers',
      description: 'Read thoughtful articles, essays, columns, and publishing notes in a refined editorial experience.',
      openGraphTitle: 'Editorial articles for curious readers',
      openGraphDescription: 'Discover articles, essays, columns, and practical writing through a calmer reading-first experience.',
      keywords: ['article site', 'editorial journal', 'essays', 'columns', 'reading platform'],
    },
    hero: {
      badge: 'Independent article magazine',
      title: ['Articles with depth,', 'pace, and a point of view.'],
      description: 'Browse fresh essays, practical columns, interviews, and editorial notes in a layout built for reading rather than endless scrolling.',
      primaryCta: { label: 'Read latest articles', href: '/article' },
      secondaryCta: { label: 'Pitch a story', href: '/create' },
      searchPlaceholder: 'Search articles, writers, topics, and columns',
      focusLabel: 'Editorial focus',
      featureCardBadge: 'Current issue',
      featureCardTitle: 'A living front page for the newest articles.',
      featureCardDescription: 'The homepage gives each headline enough space to breathe while keeping the archive easy to scan.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for long reads, short notes, and the readers who move between them.',
      paragraphs: [
        'The site treats every article like a considered page, with clean hierarchy, strong imagery, and enough whitespace for serious reading.',
        'Readers can move from the newest essay to related columns, topic searches, and contributor notes without feeling pushed through a noisy feed.',
        'Writers get a simple path to create submissions while visitors get a calm, magazine-like archive of published ideas.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with stronger emphasis on headlines and imagery.',
        'Article cards designed for scanning without flattening every story.',
        'Search, create, and account pages that support the publishing flow.',
        'Lightweight interactions that keep the reading experience fast.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Keep reading, keep writing, keep the archive alive.',
      description: 'Move from latest articles to deeper topic searches, then into the writing workspace when you are ready to publish.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Editorial', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'About the journal',
    title: 'A quieter home for articles that deserve attention.',
    description: `${slot4BrandConfig.siteName} is an article-first publication for essays, columns, interviews, and practical editorial notes.`,
    paragraphs: [
      'We believe a good article page should feel composed: the image should support the headline, the typography should invite reading, and every surrounding link should help the reader continue with intent.',
      'Our archive is shaped for people who arrive with curiosity. Some want a fast answer, some want a deep essay, and some want to publish their own perspective. The interface keeps those paths clear.',
      'The publication is intentionally calm. It favors thoughtful pacing, visible form text, useful categories, and article cards that make headlines feel important without turning the site into a poster wall.',
    ],
    values: [
      {
        title: 'Reader-first pages',
        description: 'Every layout is tuned for legibility, article flow, and calm discovery from first headline to related read.',
      },
      {
        title: 'Editorial clarity',
        description: 'Topics, summaries, author context, and search are kept visible so readers understand why an article matters.',
      },
      {
        title: 'Publishing momentum',
        description: 'The create flow gives writers a focused place to draft article submissions without touching backend complexity.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Pitch an article, ask a publishing question, or reach the editorial desk.',
    description: 'Send story ideas, correction notes, collaboration requests, or contributor questions. The form is simple, but the message can be as specific as your article needs.',
    formTitle: 'Write to the editorial desk',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search articles, topics, categories, and writers across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find the article you meant to read next.',
      description: 'Use keywords, categories, topics, and titles to move through the editorial archive without losing the thread.',
      placeholder: 'Search by keyword, topic, writer, or title',
    },
    resultsTitle: 'Latest searchable articles',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit a new article for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to open the article desk.',
      description: 'Use your account to draft article titles, summaries, images, categories, and body copy for editorial review.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Draft an article with a clear headline and useful context.',
      description: 'Choose the article lane, add a category, image, summary, source link, and body copy. Keep it focused, readable, and ready for the archive.',
    },
    formTitle: 'Article details',
    submitLabel: 'Submit article',
    successTitle: 'Article draft saved successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to the reading room.',
      description: 'Login to return to your article workspace, continue drafting, and keep your publishing identity connected to the site.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create an account for your article desk.',
      description: 'Sign up to draft article submissions, keep your name attached to the publishing flow, and return whenever a new idea is ready.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
