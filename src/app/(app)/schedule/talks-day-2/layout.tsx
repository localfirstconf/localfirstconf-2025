'use client'

import {LogoLink} from '@/components/logo-link'
import {SchedulePage} from '@/components/schedule-page'
import {cn} from '@/utils/cn'
import {Transition, TransitionChild} from '@headlessui/react'
import {usePathname} from 'next/navigation'

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const centered = pathname.split('/').length === 3

  return (
    <div className="flex w-full gap-16">
      <div className={cn('duration-300 ease-in-out md:transition-transform', centered ? 'md:translate-x-1/2' : 'md:translate-x-0')}>
        <SchedulePage type="talks-day-2">
          <div className="mb-1 uppercase tracking-widest text-orange md:text-lg">Local-First Conf 2025</div>
          <h1 className="font-display text-4xl uppercase leading-none md:text-7xl">Talks, Day 2</h1>
          <p className="mb-16 mt-8">
            The second day of talks is on Wednesday, May 28. The venue is nHow Berlin located at{' '}
            <a href="https://maps.app.goo.gl/QeY8FyGUfgCPHhst8" target="_blank" rel="noreferrer" className="underline">
              Stralauer Allee 3, 10245 Berlin
            </a>
            .
          </p>
        </SchedulePage>
      </div>
      <Transition
        show={!centered}
        enter="md:transition-all md:duration-300 md:ease-in-out"
        enterFrom="md:translate-x-full md:opacity-0"
        enterTo="md:translate-x-0 md:opacity-100"
      >
        <div className="width-schedule fixed inset-y-0 right-0 overflow-y-auto md:bg-white">{children}</div>
      </Transition>
    </div>
  )
} 