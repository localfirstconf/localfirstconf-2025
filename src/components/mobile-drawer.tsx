'use client'

import {Drawer} from 'vaul'
import {ClockIcon} from '@heroicons/react/20/solid'
import {Profile, Session} from 'contentlayer/generated'
import {addMinutes} from 'date-fns'
import {formatInTimeZone} from 'date-fns-tz'
import {useMDXComponent} from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'
import {FC} from 'react'
import {useWindowWidth} from '@/hooks/use-window-width'
import {useRouter} from 'next/navigation'
import {SessionFeedback} from './session-feedback'

export const MobileDrawer: FC<{session: Omit<Session, 'speaker'> & {speakers?: Profile[]}}> = ({session}) => {
  const Content = useMDXComponent(session.body.code)
  const router = useRouter()
  const windowWidth = useWindowWidth()
  const isMobile = windowWidth < 768

  const onOpenChange = (open: boolean) => {
    if (!open) router.back()
  }

  if (!isMobile) return null

  return (
    <Drawer.Root open onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex h-[96vh] flex-col rounded-t-[10px] bg-white">
          <div className="flex-1 overflow-y-auto px-4 py-8">
            <div className="flex flex-col gap-4">
              {session.speakers?.map((speaker) => (
                <Link key={speaker.slug} href={`/profile/${speaker.slug}`} className="group/speaker flex items-center gap-2">
                  <div className="relative size-12">
                    {speaker.avatar ? (
                      <>
                        <Image src={speaker.avatar} alt={speaker.name} fill className="object-contain object-left" />
                        {speaker.avatar.startsWith('https://') && (
                          <svg viewBox="0 0 689 689" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 fill-current text-white">
                            <path fillRule="evenodd" clipRule="evenodd" d="M233 0H0V689H558.5H689V0H233ZM233 0L643.5 92V591L558.5 689L35 571V302L233 0Z" />
                          </svg>
                        )}
                      </>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-neutral-100">
                        <span className="text-xl text-neutral-400">{speaker.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className="leading-tight">
                    <span className="text-black group-hover/speaker:underline">{speaker.name}</span>
                    <br />
                    <span className="text-neutral-500">{speaker.role}</span>
                  </div>
                </Link>
              ))}
            </div>
            <h1 className="mt-8 font-display text-4xl leading-none">{session.title}</h1>
            <p className="mt-8 flex items-center gap-3 text-blue">
              <ClockIcon className="size-5" />
              <span>{`${formatInTimeZone(new Date(session.start), 'Europe/Berlin', 'MMM dd HH:mm')} - ${formatInTimeZone(addMinutes(new Date(session.start), session.duration), 'Europe/Berlin', 'HH:mm')}`}</span>
            </p>
            <div className="prose prose-sm prose-neutral mt-12 text-neutral-500">
              <Content />
            </div>
            <SessionFeedback sessionTitle={session.title} />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
