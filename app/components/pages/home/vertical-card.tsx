'use client'

import { cn } from '@/app/lib'
import Image from 'next/image'
import { Pause, Play } from 'iconoir-react'
import { useSplitterWidthStore } from '@/app/hooks/useSplitterWidthStore'
import useSongInfoStore from '@/app/hooks/useSongInfoStore'

type HorizontalCardProps = {
  title: string
  coverUrl: string
  artist: string
  trackId?: string
}

export default function VerticalCard({
  title,
  coverUrl,
  artist,
  trackId,
}: HorizontalCardProps) {
  const { splitterWidth } = useSplitterWidthStore()
  const { setCurrentTrackId, currentTrackId } = useSongInfoStore()
  const Icon = currentTrackId === trackId ? Pause : Play

  function handleClick() {
    trackId && setCurrentTrackId(trackId)
  }

  return (
    <div
      className={cn(
        'group relative flex h-[280px] w-[200px] cursor-pointer flex-col items-center gap-y-2 overflow-hidden  rounded-md bg-neutral-800/70 p-4 transition-colors duration-500 ease-in-out hover:bg-neutral-500/60 hover:drop-shadow-md',
        splitterWidth.rightWidth < 680 && 'h-[250px] w-[160px]',
        splitterWidth.rightWidth < 600 && 'h-[270px] w-[200px]',
      )}
      onClick={handleClick}
    >
      <Image
        className={cn(
          'object-fit  h-[70%] w-auto rounded-md  object-cover drop-shadow-md',
        )}
        alt={`${title} cover`}
        src={coverUrl}
        width={48}
        height={48}
        unoptimized
      />
      <div className="flex w-full flex-col items-start p-2">
        <span className="line-clamp-2 text-[14px] text-white">{title}</span>
        <span className="line-clamp-2 text-xs text-neutral-400">{artist}</span>
      </div>
      <div className="absolute right-2 top-[55%] flex h-10 w-10 items-center justify-center rounded-full bg-green-500 opacity-0 drop-shadow-xl transition-all duration-500 group-hover:opacity-100">
        <Icon className="h-6 w-6 text-black " />
      </div>
    </div>
  )
}
