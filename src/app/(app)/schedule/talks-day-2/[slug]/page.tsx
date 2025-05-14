import {allSessions, allProfiles} from 'contentlayer/generated'
import {notFound} from 'next/navigation'
import {DesktopDrawer} from '@/components/desktop-drawer'
import {MobileDrawer} from '@/components/mobile-drawer'
import {Metadata} from 'next'

const sessions = allSessions
  .filter((session) => session.category === 'talks-day-2')
  .map((session) => {
    const speaker = allProfiles.find((profile) => profile.slug === session.speaker)!
    return {...session, speaker}
  })

export async function generateMetadata({params: {slug}}: {params: {slug: string}}): Promise<Metadata> {
  const session = sessions.find((session) => session.path === `/schedule/talks-day-2/${slug}`)
  if (!session || session.placeholder) notFound()

  return {
    title: `${session.title} – Talks, Day 2 – Local-First Conf 2025`
  }
}

export async function generateStaticParams() {
  return sessions
    .filter((session) => session.path.startsWith('/schedule/talks-day-2'))
    .map((session) => {
      const segments = session.path.split('/')
      return {
        slug: segments[segments.length - 1]
      }
    })
}

export default function SessionPage({params: {slug}}: {params: {slug: string}}) {
  const session = sessions.find((session) => session.path === `/schedule/talks-day-2/${slug}`)
  if (!session || session.placeholder) notFound()

  return (
    <>
      <DesktopDrawer back="/schedule/talks-day-2" session={session} />
      <MobileDrawer session={session} />
    </>
  )
}
