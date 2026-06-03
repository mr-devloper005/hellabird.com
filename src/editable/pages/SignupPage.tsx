import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#fbf7ef)] text-[var(--editable-page-text,#1a120d)]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1180px] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.86fr_1fr] lg:px-8">
          <div className="border border-[var(--editable-border)] bg-[#fffdf8] p-6 backdrop-blur sm:p-8">
            <h1 className="font-serif text-3xl font-normal">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm opacity-70">Already have an account? <Link href="/login" className="font-black underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] opacity-55">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl font-serif text-5xl font-normal leading-[1] tracking-normal sm:text-6xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-base leading-8 opacity-70">{pagesContent.auth.signup.description}</p>
            <div className="mt-8 grid gap-3 text-sm leading-7 opacity-72 sm:grid-cols-2">
              <p className="border-l border-[var(--editable-border)] pl-4">Save a clear contributor name for article submissions.</p>
              <p className="border-l border-[var(--editable-border)] pl-4">Return to the create page whenever a new draft is ready.</p>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
