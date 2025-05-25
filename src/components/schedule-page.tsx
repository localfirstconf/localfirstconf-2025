import {FC, ReactNode} from 'react'
import {Schedule} from './schedule'
import {allSessions, allProfiles, Session, Profile} from 'contentlayer/generated'
import {LogoLink} from './logo-link'

export const SchedulePage: FC<{type: 'talks-day-1' | 'talks-day-2' | 'community-day'; children?: ReactNode}> = ({type, children}) => {
  const sessions = allSessions
    .filter((session) => session.category === type)
    .map((session) => {
      const speakerSlugs = Array.isArray(session.speaker) ? session.speaker : session.speaker ? [session.speaker] : []
      const speakers = speakerSlugs
        .map(slug => allProfiles.find(profile => profile.slug === slug))
        .filter((p): p is Profile => p !== undefined)
      return {...session, speakers}
    })
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())

  return (
    <div className="width-schedule px-4 pt-16 md:pl-16 md:pr-0 md:pt-24">
      <LogoLink className="mb-12 block md:hidden" />
      {children}
      <Schedule sessions={sessions} />
    </div>
  )
}
