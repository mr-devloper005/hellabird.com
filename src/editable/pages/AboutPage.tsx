import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#fbf7ef)] px-4 py-14 text-[var(--editable-page-text,#1a120d)] sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="border-y border-[var(--editable-border)] bg-white/70 py-10 lg:py-14">
            <p className="text-xs font-black uppercase tracking-[0.24em] opacity-55">{pagesContent.about.badge}</p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl font-normal leading-[1] tracking-normal sm:text-6xl">About {slot4BrandConfig.siteName}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 opacity-74">{pagesContent.about.description}</p>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 opacity-78">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="grid content-start gap-4">
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className="border border-[var(--editable-border)] bg-white/75 p-6">
                <h2 className="font-serif text-2xl font-normal tracking-normal">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 opacity-70">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
