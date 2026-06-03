'use client'

import { FileText, Mail, PenLine } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const lanes = [
    { icon: FileText, title: 'Article pitches', body: 'Send essay ideas, column proposals, interview concepts, or notes on a story you want to publish.' },
    { icon: PenLine, title: 'Contributor support', body: 'Ask about formatting, summaries, image use, categories, and how to prepare a readable submission.' },
    { icon: Mail, title: 'Corrections and collaborations', body: 'Reach the editorial desk for corrections, partnerships, newsletter ideas, and publication questions.' },
  ]

  return (
    <EditableSiteShell className="bg-[var(--editable-page-bg,#fbf7ef)] text-[var(--editable-page-text,#1a120d)]">
      <main className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl font-normal leading-[1] tracking-normal sm:text-6xl">{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--slot4-muted-text)]">{pagesContent.contact.description}</p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="border border-[var(--editable-border)] bg-white/75 p-5">
                  <lane.icon className="h-5 w-5" />
                  <h2 className="mt-3 font-serif text-2xl font-normal">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[var(--slot4-muted-text)]">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[var(--editable-border)] bg-[#fffdf8] p-6 sm:p-7">
            <h2 className="font-serif text-3xl font-normal">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
