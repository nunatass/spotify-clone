'use client'
import { cn } from '@/app/lib'
import Image from 'next/image'
import { useSplitterWidthStore } from '@/app/hooks/useSplitterWidthStore'
type PlayListCardProps = {
  coverUrl: string
  title: string
  createBy: string
  totalSongs: number
}

export default function Card({
  coverUrl,
  title,
  createBy,
  totalSongs,
}: PlayListCardProps) {
  const { splitterWidth } = useSplitterWidthStore()

  return (
    <div className="flex gap-4">
      <div className="shrink-0 shadow-2xl drop-shadow-lg">
        {coverUrl && (
          <Image
            alt={`cover playlist ${title}`}
            height={220}
            width={220}
            src={coverUrl}
          />
        )}
      </div>
      <div className="flex flex-col justify-end gap-y-1">
        {totalSongs > 0 && <span>Playlist</span>}
        <div
          className={cn(
            'w-auto text-[3rem]  font-bold',
            splitterWidth.rightWidth > 800 && 'text-[4rem]',
            splitterWidth.rightWidth < 600 &&
              'w-[200px] text-ellipsis text-[2rem]',
          )}
        >
          {title}
        </div>
        {totalSongs > 0 && (
          <span>
            <strong className="text-md">{createBy}</strong> • {totalSongs} songs
          </span>
        )}
      </div>
    </div>
  )
}
