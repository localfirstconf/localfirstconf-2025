import {allSessions, allProfiles} from 'contentlayer/generated'
import {Schedule} from '@/components/schedule'

const sessions = allSessions
  .filter((session) => session.path.startsWith('/schedule/conference'))
  .filter((session) => session.start.startsWith('2025-05-28'))
  .map((session) => {
    const speaker = allProfiles.find((profile) => profile.slug === session.speaker)!
    return {...session, speaker}
  })
  .sort((a, b) => a.start.localeCompare(b.start))

export default function ConferenceDay2Page() {
  return <Schedule sessions={sessions} />
} 