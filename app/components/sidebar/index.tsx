'use client'

import SidebarButton from './sidebar-button'
import { HomeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { HomeIcon as SolidHomeIcon } from '@heroicons/react/20/solid'
import LibrarySection from './library'
export default function Sidebar() {
  return (
    <aside className="flex h-full flex-col gap-2 ">
      <div className="flex h-[120px] w-full flex-col items-center justify-center rounded-lg bg-primary p-4 sm:items-start">
        <SidebarButton
          title="Home"
          href="/"
          icon={HomeIcon}
          activeIcon={SolidHomeIcon}
        />
        <SidebarButton
          title="Search"
          href="/search"
          icon={MagnifyingGlassIcon}
          activeIcon={MagnifyingGlassIcon}
        />
      </div>
      <LibrarySection />
    </aside>
  )
}
