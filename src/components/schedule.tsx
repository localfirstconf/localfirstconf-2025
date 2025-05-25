'use client'

import {cn} from '@/utils/cn'
import {Session, Profile} from 'contentlayer/generated'
import {addHours, addMinutes, eachHourOfInterval, interval, startOfHour} from 'date-fns'
import {format, toZonedTime} from 'date-fns-tz'
import {ScheduleSession} from './schedule-session'

export const Schedule: React.FC<{sessions: (Omit<Session, 'speaker'> & {speakers?: Profile[]})[]}> = ({sessions}) => {
  const firstStart = startOfHour(new Date(sessions[0].start))
  const lastEnd = addMinutes(new Date(sessions[sessions.length - 1].start), sessions[sessions.length - 1].duration)
  const hours = eachHourOfInterval(interval(firstStart, addHours(lastEnd, 1)))

  return (
    <div className="relative">
      <div className="">
        {hours.map((date) => (
          <div key={date.toISOString()} className={cn('h-20 border-white text-xs text-white', date === hours[hours.length - 1] ? 'border-t' : 'mb-20 border-y')}>
            {format(toZonedTime(date, 'Europe/Berlin'), 'HH:mm', {timeZone: 'Europe/Berlin'})}
          </div>
        ))}
      </div>
      <ul className="">
        {sessions.map((session) => (
          <ScheduleSession key={session.path} session={session} firstStart={firstStart} index={sessions.indexOf(session)} />
        ))}
      </ul>
    </div>
  )
}
