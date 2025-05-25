import {allSessions, allProfiles, Profile} from 'contentlayer/generated'
import {notFound} from 'next/navigation'
import {Metadata} from 'next'
import {DesktopDrawer} from '@/components/desktop-drawer'
import {MobileDrawer} from '@/components/mobile-drawer'

const sessions = allSessions.map((session) => {
  const speakerSlugs = Array.isArray(session.speaker) ? session.speaker : session.speaker ? [session.speaker] : []
  const speakers = speakerSlugs
    .map(slug => allProfiles.find(profile => profile.slug === slug))
    .filter((p): p is Profile => p !== undefined)
  return {...session, speakers}
})

export async function generateMetadata({params: {slug}}: {params: {slug: string}}): Promise<Metadata> {
  const session = sessions.find((session) => session.path === `/schedule/community-day/${slug}`)
  if (!session || session.placeholder) notFound()

  return {
    title: `${session.title} – Community Day – Local-First Conf 2025`
  }
}

export async function generateStaticParams() {
  return sessions
    .filter((session) => session.path.startsWith('/schedule/community-day'))
    .map((session) => {
      const segments = session.path.split('/')
      return {
        slug: segments[segments.length - 1]
      }
    })
}

export default function SessionPage({params: {slug}}: {params: {slug: string}}) {
  const session = sessions.find((session) => session.path === `/schedule/community-day/${slug}`)
  if (!session || session.placeholder) notFound()

  return (
    <>
      <DesktopDrawer back="/schedule/community-day" session={session} />
      <MobileDrawer session={session} />
    </>
  )
}
