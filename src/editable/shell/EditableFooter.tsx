'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#eee9e1', '--editable-footer-text': '#1a120d', '--editable-border': 'rgba(26,18,13,0.16)', '--editable-container': '1180px' } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="border-t border-[var(--editable-border)] bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.9fr_0.9fr] lg:px-8">
        <div className="border-b border-[var(--editable-border)] pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
          <Link href="/" className="inline-flex flex-col">
            <span className="font-serif text-5xl leading-none">{slot4BrandConfig.siteName}</span>
            <span className="mt-3 text-[11px] font-black uppercase tracking-[0.26em] opacity-55">{globalContent.footer?.tagline || slot4BrandConfig.tagline}</span>
          </Link>
          <p className="mt-6 max-w-md text-base leading-8 opacity-70">{globalContent.footer?.description || SITE_CONFIG.description}</p>
          {session ? <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] opacity-55">Signed in as {session.name}</p> : null}
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Explore</h3>
          <div className="mt-4 grid gap-2">
            {taskLinks.map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-bold opacity-75 hover:opacity-100">
                {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Site</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['About', '/about'],
              ['Contact', '/contact'],
              ...(session ? [['Create', '/create']] : [['Login', '/login'], ['Sign up', '/signup']]),
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-bold opacity-75 hover:opacity-100">{label}</Link>
            ))}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold opacity-75 hover:opacity-100">Logout</button> : null}
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--editable-border)] px-4 py-5 text-center text-xs font-bold opacity-55">
        &copy; {year} {slot4BrandConfig.siteName}. All rights reserved.
      </div>
    </footer>
  )
}
