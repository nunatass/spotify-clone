'use client'

import { cn } from '@/app/lib'
import { useSplitterWidthStore } from '@/app/hooks/useSplitterWidthStore'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type SidebarButtonProps = {
  icon: any
  activeIcon: any
  title: string
  href: string
  onClick?: () => void
}

export default function SidebarButton({
  icon: Icon,
  activeIcon: ActiveIcon,
  title,
  href,
  onClick,
}: SidebarButtonProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  const { isLeftSideClosed } = useSplitterWidthStore()

  return (
    <Link
      href={href}
      className={cn(
        'text-md  group flex h-auto w-fit cursor-pointer items-center justify-center  gap-x-4 py-2 font-medium  text-neutral-400 transition-all hover:text-white',
        isActive && 'text-white',
        isLeftSideClosed && 'w-full gap-x-0 ',
      )}
      onClick={onClick}
    >
      {isActive ? (
        <ActiveIcon className="h-8 w-8" />
      ) : (
        <Icon className="h-8 w-8" />
      )}
      <span
        className={cn(
          'visible transition-all',
          isLeftSideClosed &&
            'absolute left-[90px] z-10 hidden h-fit rounded-md bg-neutral-800 p-2 text-sm transition-all duration-1000 ease-in-out group-hover:flex  ',
        )}
      >
        {title}
      </span>
    </Link>
  )
}
