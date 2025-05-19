import {AllRoutes} from '@/components/all-routes'
import {LogoLink} from '@/components/logo-link'
import Link from 'next/link'

export default function SchedulePage() {
  return (
    <div className="grid w-full max-w-3xl grid-cols-1 gap-8 px-4 py-16 md:px-0 md:py-24">
      <div className="col-span-1 md:text-center">
        <LogoLink className="mb-12 block md:hidden" />
        <h1 className="font-display text-6xl uppercase leading-none md:text-[5rem]">Schedule</h1>
        <p className="mb-16 mt-8 md:text-center">
          Welcome to Local-First Conf 2025, taking place from Monday May 26 to Wednesday May 28 in Berlin, Germany. Choose a day below to see the schedule.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <Link href="/schedule/community-day" className="group relative">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full scale-90 fill-current text-magenta opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 fill-current text-white transition-all duration-200 ease-in-out group-hover:scale-110 group-hover:opacity-0"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0ZM50 2.5C76.2335 2.5 97.5 23.7665 97.5 50C97.5 76.2335 76.2335 97.5 50 97.5C23.7665 97.5 2.5 76.2335 2.5 50C2.5 23.7665 23.7665 2.5 50 2.5Z"
            />
          </svg>
          <h2 className="absolute inset-0 flex items-center justify-center text-center font-display text-2xl uppercase leading-none group-hover:text-black md:text-3xl">
            Monday<br/>Community Day
          </h2>
        </Link>
        <Link href="/schedule/talks-day-1" className="group relative">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full scale-90 fill-current text-magenta opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 fill-current text-white transition-all duration-200 ease-in-out group-hover:scale-110 group-hover:opacity-0"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0ZM50 2.5C76.2335 2.5 97.5 23.7665 97.5 50C97.5 76.2335 76.2335 97.5 50 97.5C23.7665 97.5 2.5 76.2335 2.5 50C2.5 23.7665 23.7665 2.5 50 2.5Z"
            />
          </svg>
          <h2 className="absolute inset-0 flex items-center justify-center text-center font-display text-2xl uppercase leading-none group-hover:text-black md:text-3xl">
            Tuesday<br/>
            Talks, Day 1
          </h2>
        </Link>
        <Link href="/schedule/talks-day-2" className="group relative">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full scale-90 fill-current text-magenta opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 fill-current text-white transition-all duration-200 ease-in-out group-hover:scale-110 group-hover:opacity-0"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0ZM50 2.5C76.2335 2.5 97.5 23.7665 97.5 50C97.5 76.2335 76.2335 97.5 50 97.5C23.7665 97.5 2.5 76.2335 2.5 50C2.5 23.7665 23.7665 2.5 50 2.5Z"
            />
          </svg>
          <h2 className="absolute inset-0 flex items-center justify-center text-center font-display text-2xl uppercase leading-none group-hover:text-black md:text-3xl">
            Wednesday<br/>
            Talks, Day 2
          </h2>
        </Link>
      </div>
      <AllRoutes />
    </div>
  )
}
