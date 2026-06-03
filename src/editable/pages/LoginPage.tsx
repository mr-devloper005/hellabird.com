import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#fbf7ef)] text-[var(--editable-page-text,#1a120d)]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1180px] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.86fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] opacity-55">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-xl font-serif text-5xl font-normal leading-[1] tracking-normal sm:text-6xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-base leading-8 opacity-70">{pagesContent.auth.login.description}</p>
            <div className="mt-8 border-l border-[var(--editable-border)] pl-5 text-sm leading-7 opacity-70">
              Return to saved article drafts, open the create desk, and keep your byline ready for the next submission.
            </div>
          </div>
          <div className="border border-[var(--editable-border)] bg-[#fffdf8] p-6 backdrop-blur sm:p-8">
            <h2 className="font-serif text-3xl font-normal">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 text-sm opacity-70">New here? <Link href="/signup" className="font-black underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
