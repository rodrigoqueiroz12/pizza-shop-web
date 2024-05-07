import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import AccountMenu from './account-menu'
import { ModeToggle } from './mode-toggle'
import NavLink from './nav-link'
import { Separator } from './ui/separator'

export default function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="size-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to={'/'}>
            <Home className="size-4" />
            Home
          </NavLink>
          <NavLink to={'/orders'}>
            <UtensilsCrossed className="size-4" />
            Orders
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
          <AccountMenu />
        </div>
      </div>
    </header>
  )
}
