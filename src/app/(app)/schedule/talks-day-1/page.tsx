import {Metadata} from 'next'
import {allSessions, allProfiles} from 'contentlayer/generated'
import {Schedule} from '@/components/schedule'

const sessions = allSessions
  .filter((session) => session.path.startsWith('/schedule/talks-day-1'))
  .filter((session) => session.start.startsWith('2025-05-27'))
  .map((session) => {
    const speaker = allProfiles.find((profile) => profile.slug === session.speaker)!
    return {...session, speaker}
  })
  .sort((a, b) => a.start.localeCompare(b.start))

export const metadata: Metadata = {
  title: 'Talks – Local-First Conf 2025'
}

export default function ConferencePage() {
  return <Schedule sessions={sessions} />
}
