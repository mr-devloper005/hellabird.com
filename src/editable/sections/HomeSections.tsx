import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { getEditablePostImage, postHref } from '@/editable/cards/PostCards'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function getExcerpt(post?: SitePost | null, limit = 130) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    post?.summary ||
    ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function MiniPoster({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className={`group block w-[230px] shrink-0 ${dc.motion.fade}`}>
      <article className="relative overflow-hidden border border-black/[0.12] bg-white p-2 transition duration-300 hover:-translate-y-1">
        <div className="relative aspect-[4/5] overflow-hidden bg-[var(--slot4-media-bg)]">
          <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.72)_100%)]" />
          <span className="absolute left-3 top-3 bg-white/92 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-page-text)]">Read</span>
          <h3 className="absolute bottom-3 left-3 right-3 line-clamp-3 text-base font-black leading-tight tracking-[-0.03em] text-white drop-shadow-sm">
            {post.title}
          </h3>
        </div>
      </article>
    </Link>
  )
}

function FeatureTile({ post, href, index }: { post: SitePost; href: string; index: number }) {
  const style = index % 3
  if (style === 0) {
    return (
      <Link href={href} className="group relative min-h-[360px] overflow-hidden bg-[#1a120d] p-5 text-white transition duration-300 hover:-translate-y-1">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.78))]" />
        <div className="relative z-10 flex min-h-[320px] flex-col justify-end">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-white/70">Featured</p>
          <h3 className="mt-3 line-clamp-3 text-3xl font-black leading-[0.98] tracking-[-0.06em]">{post.title}</h3>
          <p className="mt-4 line-clamp-2 text-sm leading-6 text-white/76">{getExcerpt(post, 110)}</p>
        </div>
      </Link>
    )
  }
  if (style === 1) {
    return (
      <Link href={href} className={`group grid overflow-hidden border ${pal.border} bg-white transition duration-300 hover:-translate-y-1 md:grid-cols-[0.82fr_1fr]`}>
        <div className="relative min-h-[190px] bg-[var(--slot4-media-bg)]">
          <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        </div>
        <div className="p-6">
          <p className={`text-[11px] font-black uppercase tracking-[0.26em] ${pal.accentText}`}>Spotlight {index + 1}</p>
          <h3 className="mt-4 line-clamp-3 text-2xl font-black leading-tight tracking-[-0.05em] text-[var(--slot4-page-text)]">{post.title}</h3>
          <p className={`mt-4 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getExcerpt(post, 135)}</p>
        </div>
      </Link>
    )
  }
  return (
    <Link href={href} className={`group relative overflow-hidden border ${pal.border} bg-[var(--slot4-accent-soft)] p-6 transition duration-300 hover:-translate-y-1`}>
      <div className="relative h-24 w-24 overflow-hidden border-4 border-white">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
      </div>
      <p className={`mt-8 text-[11px] font-black uppercase tracking-[0.26em] ${pal.accentText}`}>Deep read</p>
      <h3 className="mt-3 line-clamp-4 text-2xl font-black leading-tight tracking-[-0.05em] text-[var(--slot4-page-text)]">{post.title}</h3>
      <p className={`mt-4 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getExcerpt(post, 125)}</p>
    </Link>
  )
}

function WideStoryCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group grid gap-4 overflow-hidden border ${pal.border} bg-white p-3 transition duration-300 hover:-translate-y-1 sm:grid-cols-[150px_minmax(0,1fr)]`}>
      <div className="relative aspect-[5/4] overflow-hidden bg-[var(--slot4-media-bg)] sm:aspect-square">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute bottom-3 left-3 bg-black/72 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur">
          Pick {index + 1}
        </span>
      </div>
      <div className="min-w-0 py-2 pr-2">
        <p className={`text-[11px] font-extrabold uppercase tracking-[0.24em] ${pal.accentText}`}>Editor's lane</p>
        <h3 className="mt-2 line-clamp-2 text-2xl font-black leading-tight tracking-[-0.04em] text-[var(--slot4-page-text)]">{post.title}</h3>
        <p className={`mt-3 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getExcerpt(post, 145)}</p>
      </div>
    </Link>
  )
}

function IndexPill({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group relative overflow-hidden border ${pal.border} bg-white p-5 transition duration-300 hover:-translate-y-1`}>
      <p className={`relative text-[11px] font-black uppercase tracking-[0.26em] ${pal.accentText}`}>No. {String(index + 1).padStart(2, '0')}</p>
      <h3 className="relative mt-3 line-clamp-3 text-xl font-black leading-tight tracking-[-0.04em] text-[var(--slot4-page-text)]">{post.title}</h3>
      <p className={`relative mt-4 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getExcerpt(post, 120)}</p>
      <span className="relative mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[var(--slot4-page-text)] opacity-70">
        Open <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
      </span>
    </Link>
  )
}

function Rail({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`${dc.layout.rail} ${className}`}>{children}</div>
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ') || `Come for the ${taskLabel(primaryTask).toLowerCase()}. Stay for the connection.`
  const feature = posts[0]
  const second = posts[1]
  return (
    <section className={`${pal.creamBg} relative overflow-hidden border-b border-black/[0.12]`}>
      <div className="relative mx-auto grid max-w-[1180px] gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-8 lg:py-16">
        <div>
          <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{pagesContent.home.hero.badge}</p>
          <h1 className={`${dc.type.heroTitle} mt-4 max-w-xl`}>{heroTitle}</h1>
          <p className={`mt-5 max-w-lg text-base leading-relaxed ${pal.mutedText} sm:text-lg`}>{pagesContent.home.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={primaryRoute} className={dc.button.primary}>Browse {taskLabel(primaryTask).toLowerCase()} <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/create" className={dc.button.secondary}>Pitch a story</Link>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-[1.1fr_0.8fr]">
          <Link href={feature ? postHref(primaryTask, feature, primaryRoute) : primaryRoute} className="group block">
            <article className="border border-black/[0.14] bg-white p-3">
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--slot4-media-bg)]">
                {feature ? <img src={getEditablePostImage(feature)} alt={feature.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" /> : null}
              </div>
              <p className="mt-5 text-[11px] font-black uppercase tracking-[0.26em] text-[var(--slot4-accent)]">Current cover</p>
              <h2 className="mt-2 font-serif text-3xl leading-tight">{feature?.title || pagesContent.home.hero.featureCardTitle}</h2>
              <p className={`mt-3 line-clamp-2 text-sm leading-6 ${pal.mutedText}`}>{feature ? getExcerpt(feature, 120) : pagesContent.home.hero.featureCardDescription}</p>
            </article>
          </Link>
          <div className="grid content-between gap-5">
            <div className="border-y border-black/[0.14] py-5">
              <p className="text-[11px] font-black uppercase tracking-[0.26em] opacity-55">Published by</p>
              <p className="mt-2 font-serif text-3xl">{slot4BrandConfig.siteName}</p>
              <p className={`mt-3 text-sm leading-7 ${pal.mutedText}`}>A focused article magazine for essays, columns, interviews, and reader-friendly editorial notes.</p>
            </div>
            {second ? <MiniPoster post={second} href={postHref(primaryTask, second, primaryRoute)} /> : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 12)
  if (!railPosts.length) return null
  return (
    <section className={`${pal.warmBg} relative border-t border-black/[0.06]`}>
      <div className="relative mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className={dc.type.sectionTitle}>Latest articles</h2>
          <Link href={primaryRoute} className="hidden text-sm font-semibold text-[#006d6d] hover:underline sm:inline">See all</Link>
        </div>
        <Rail className="mt-8">
          {railPosts.map((post) => <MiniPoster key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
        </Rail>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(0, 8)
  if (!featured.length) return null
  return (
    <section className={`${pal.lavenderBg} relative overflow-hidden border-y border-black/[0.12]`}>
      <div className="relative mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-4xl font-normal sm:text-5xl">Must-read {taskLabel(primaryTask).toLowerCase()}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.slice(0, 6).map((post, index) => (
            <FeatureTile key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const categoryPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(8)
  const feature = categoryPosts[0] || posts[0]
  const picks = categoryPosts.slice(1, 5)
  const indexPosts = categoryPosts.slice(5, 13)
  return (
    <section className={pal.grayBg}>
      <div className="mx-auto grid max-w-[1180px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <h2 className={dc.type.sectionTitle}>All the topics. All the voices.</h2>
          <p className={`mt-4 max-w-md text-base leading-relaxed ${pal.mutedText}`}>Find the next article faster. Browse clean sections, rich cards, and useful editorial notes without losing the original site rhythm.</p>
          <form action="/search" className="mt-8 flex max-w-md border border-black/[0.12] bg-white p-2">
            <input name="q" placeholder="Search articles" className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none" />
            <button className="inline-flex items-center gap-2 bg-black px-5 py-3 text-sm font-semibold text-white"><Search className="h-4 w-4" /> Search</button>
          </form>
        </div>
        <div className="grid gap-4">
          {picks.map((post, index) => <WideStoryCard key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
      {feature ? (
        <div className="mx-auto grid max-w-[1180px] gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:px-8">
          <Link href={postHref(primaryTask, feature, primaryRoute)} className="group relative min-h-[420px] overflow-hidden bg-black text-white">
            <img src={getEditablePostImage(feature)} alt={feature.title} className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.74))]" />
            <div className="relative z-10 flex min-h-[420px] flex-col justify-end p-7 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/75">Featured stream</p>
              <h3 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{feature.title}</h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/78">{getExcerpt(feature, 180)}</p>
            </div>
          </Link>
          <div className="grid gap-4 sm:grid-cols-2">
            {indexPosts.map((post, index) => <IndexPill key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
        </div>
      ) : null}
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className={`${pal.panelBg} relative scroll-mt-24 overflow-hidden border-t border-black/[0.12]`}>
      <div className="relative mx-auto max-w-[1180px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-normal sm:text-5xl">Stay connected to the article desk.</h2>
          <p className={`mt-4 text-lg ${pal.mutedText}`}>Explore fresh columns, practical essays, and story ideas shaped for readers who like thoughtful pages.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4"><Link href="/contact" className={dc.button.primary}>Contact editorial</Link></div>
        </div>
      </div>
    </section>
  )
}
