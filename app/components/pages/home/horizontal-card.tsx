'use client'
import { cn } from '@/app/lib'
import Image from 'next/image'
import { Play, Pause } from 'iconoir-react'
import useSongInfoStore from '@/app/hooks/useSongInfoStore'
import Link from 'next/link'

type HorizontalCardProps = {
  title: string
  coverUrl: string
  color?: string
  trackId?: string
}

export default function HorizontalCard({
  title,
  coverUrl,
  color = '#059669',
  trackId,
}: HorizontalCardProps) {
  const { setCurrentTrackId, currentTrackId } = useSongInfoStore()

  const Icon = currentTrackId === trackId ? Pause : Play

  function handleMouseEnter() {
    document.documentElement.style.setProperty('--main-bg-color', color)
  }

  function handleMouseLeave() {
    document.documentElement.style.setProperty('--main-bg-color', '#059669')
  }

  async function handleClick() {
    trackId && setCurrentTrackId(trackId)
  }

  return (
    <Link
      className="group relative flex h-20  cursor-pointer items-center  gap-x-4 rounded-md bg-neutral-600/70 pr-2 transition-colors duration-500 ease-in-out hover:bg-neutral-500/60 hover:drop-shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      href={'/'}
    >
      <Image
        className={cn(
          'object-fit  h-20 w-20 rounded-l-md  object-cover shadow-md',
        )}
        alt={`${title} cover`}
        src={coverUrl}
        width={48}
        height={48}
        unoptimized
      />
      <span className="text-sm font-semibold">{title}</span>
      <div
        className={cn(
          'absolute right-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-500 opacity-0 drop-shadow-xl transition-all duration-500 ease-in group-hover:opacity-100  ',
          currentTrackId === trackId && 'opacity-100',
        )}
      >
        <Icon className="h-6 w-6 text-black" />
      </div>
    </Link>
  )
}
