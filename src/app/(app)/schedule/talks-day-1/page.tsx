import {Metadata} from 'next'
import {allSessions, allProfiles, Session, Profile} from 'contentlayer/generated'
import {Schedule} from '@/components/schedule'

console.log('All profiles:', allProfiles.map(p => ({slug: p.slug, name: p.name})))

const sessions = allSessions
  .filter((session) => session.path.startsWith('/schedule/talks-day-1'))
  .filter((session) => session.start.startsWith('2025-05-27'))
  .map((session) => {
    console.log('Looking up speaker:', session.speaker)
    const speaker = allProfiles.find((profile) => profile.slug === session.speaker)
    console.log('Found speaker:', speaker)
    if (!speaker) {
      console.error(`No speaker found for session ${session.title} with speaker slug ${session.speaker}`)
    }
    return {...session, speaker}
  })
  .filter((session): session is Session & {speaker: Profile} => session.speaker !== undefined)
  .sort((a, b) => a.start.localeCompare(b.start))

export const metadata: Metadata = {
  title: 'Talks – Local-First Conf 2025'
}

export default function ConferencePage() {
  return <Schedule sessions={sessions} />
}
