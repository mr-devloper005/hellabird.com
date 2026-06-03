'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogOut, Menu, PenLine, Search, UserRound, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const navVars = { '--editable-nav-bg': '#fffdf8', '--editable-nav-text': '#1a120d', '--editable-nav-active': '#1a120d', '--editable-nav-active-text': '#fffdf8', '--editable-cta-bg': '#1a120d', '--editable-cta-text': '#fffdf8', '--editable-search-bg': '#fbf7ef', '--editable-border': 'rgba(26,18,13,0.16)', '--editable-container': '1180px' } as CSSProperties
  const navItems = useMemo(
    () => SITE_CONFIG.tasks.filter((task) => task.enabled).slice(0, 3).map((task) => ({ label: task.label, href: task.route })),
    []
  )
  const displayName = session?.name?.trim() || session?.email?.split('@')[0]

  return (
    <header style={navVars} className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)]/96 text-[var(--editable-nav-text)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[96px] w-full max-w-[var(--editable-container)] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-end gap-3">
          <span className="font-serif text-4xl leading-none tracking-normal sm:text-5xl">{slot4BrandConfig.siteName}</span>
          <span className="hidden pb-1 text-[11px] font-black uppercase tracking-[0.24em] opacity-55 sm:inline">
            {globalContent.nav?.tagline || slot4BrandConfig.tagline}
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {[{ label: 'Home', href: '/' }, ...navItems, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }].map((item) => {
            const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`))
            return (
              <Link key={item.href} href={item.href} className={`text-[11px] font-black uppercase tracking-[0.24em] transition ${active ? 'opacity-100 underline underline-offset-4' : 'opacity-65 hover:opacity-100'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        <form action="/search" className="hidden min-w-0 flex-1 justify-end md:flex lg:max-w-[240px]">
          <label className="relative flex w-full items-center border-b border-[var(--editable-border)] bg-transparent py-2">
            <Search className="h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search articles" className="min-w-0 flex-1 bg-transparent px-3 text-xs font-black uppercase tracking-[0.18em] outline-none placeholder:text-current/45" />
          </label>
        </form>

        <div className="flex shrink-0 items-center gap-2">
          {session ? (
            <>
              <Link href="/create" className="hidden items-center gap-2 border border-[var(--editable-nav-text)] px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] sm:inline-flex"><PenLine className="h-4 w-4" /> Create</Link>
              <span className="hidden max-w-[140px] items-center gap-2 truncate px-3 py-2 text-xs font-black sm:inline-flex"><UserRound className="h-4 w-4 shrink-0" /> {displayName}</span>
              <button type="button" onClick={logout} className="hidden items-center gap-2 px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] opacity-65 hover:opacity-100 sm:inline-flex"><LogOut className="h-4 w-4" /> Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] opacity-70 hover:opacity-100 sm:inline-flex">Login</Link>
              <Link href="/signup" className="hidden border border-[var(--editable-nav-text)] bg-[var(--editable-cta-bg)] px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[var(--editable-cta-text)] sm:inline-flex">Sign up</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="border border-[var(--editable-border)] bg-white p-2 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-3 py-2">
            <Search className="mt-1 h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search articles" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" />
          </form>
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, ...navItems, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }, ...(session ? [{ label: `Account: ${displayName}`, href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-black">
                {item.label}
              </Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="border border-[var(--editable-border)] bg-white px-4 py-3 text-left text-sm font-black">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
