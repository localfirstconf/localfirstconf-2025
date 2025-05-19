import {LogoLink} from '@/components/logo-link'
import {allProfiles} from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'

export default function SpeakersPage() {
  return (
    <div className="w-full max-w-3xl px-4 py-16 md:px-0 md:py-24">
      <LogoLink className="mb-12 block md:hidden" />
      <div className="mb-1 uppercase tracking-widest text-white md:text-lg">Local First Conf 2025</div>
      <h1 className="font-display text-4xl uppercase leading-none md:text-6xl">Speakers</h1>
      <ul className="mt-16 grid grid-cols-2 gap-y-16 md:grid-cols-3">
        {allProfiles
          .filter((profile) => profile.speaker)
          .sort((a, b) => b.name.localeCompare(a.name))
          .map(({name, role, avatar, slug}, index) => (
            <li key={index}>
              <Link href={`/profile/${slug}`} className="group flex flex-col items-center">
                <div className="relative aspect-square w-full transition-transform duration-150 ease-in-out group-hover:scale-105">
                  {avatar ? (
                    <>
                      <Image src={avatar} alt={name} fill className="object-contain object-center" />
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-neutral-100">
                      <span className="text-4xl text-neutral-400">{name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <h2 className="mt-8 text-center font-display text-2xl uppercase leading-none">{name}</h2>
                <p className="mt-2 text-center">{role}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
