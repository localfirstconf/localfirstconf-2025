import {ProfileLink} from './profile-link'
import {Navigation} from './navigation'
import {LogoLink} from './logo-link'

export const Sidebar = () => {
  return (
    <aside className="fixed top-0 hidden h-screen w-60 shrink-0 flex-col justify-between p-8 pt-24 md:flex">
      <LogoLink />
      <Navigation />
      <ProfileLink />
    </aside>
  )
}
