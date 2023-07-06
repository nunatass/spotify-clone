'use client'

import SidebarButton from './sidebar-button'
import { Home, Search } from 'iconoir-react'
import LibrarySection from './library'
export default function Sidebar() {
  return (
    <aside className="flex h-full flex-col gap-2 ">
      <div className="flex h-[120px] w-full flex-col items-center justify-center rounded-lg bg-primary p-4 sm:items-start">
        <SidebarButton title="Home" href="/" icon={Home} activeIcon={Home} />
        <SidebarButton
          title="Search"
          href="/search"
          icon={Search}
          activeIcon={Search}
        />
      </div>
      <LibrarySection />
    </aside>
  )
}
