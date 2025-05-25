import {allSessions, allProfiles, Profile} from 'contentlayer/generated'
import {notFound} from 'next/navigation'
import {DesktopDrawer} from '@/components/desktop-drawer'
import {MobileDrawer} from '@/components/mobile-drawer'
import {Metadata} from 'next'

const sessions = allSessions.map((session) => {
  const speakerSlugs = Array.isArray(session.speaker) ? session.speaker : session.speaker ? [session.speaker] : []
  const speakers = speakerSlugs
    .map(slug => allProfiles.find(profile => profile.slug === slug))
    .filter((p): p is Profile => p !== undefined)
  return {...session, speakers}
})

export async function generateMetadata({params: {slug}}: {params: {slug: string}}): Promise<Metadata> {
  const session = sessions.find((session) => session.path === `/schedule/talks-day-1/${slug}`)
  if (!session || session.placeholder) notFound()

  return {
    title: `${session.title} – Talks, Day 1 – Local-First Conf 2025`
  }
}

export async function generateStaticParams() {
  return sessions
    .filter((session) => session.path.startsWith('/schedule/talks-day-1'))
    .map((session) => {
      const segments = session.path.split('/')
      return {
        slug: segments[segments.length - 1]
      }
    })
}

export default function SessionPage({params: {slug}}: {params: {slug: string}}) {
  const session = sessions.find((session) => session.path === `/schedule/talks-day-1/${slug}`)
  if (!session || session.placeholder) notFound()

  return (
    <>
      <DesktopDrawer back="/schedule/talks-day-1" session={session} />
      <MobileDrawer session={session} />
    </>
  )
}
