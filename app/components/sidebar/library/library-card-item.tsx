'use client'

import { cn } from '@/app/lib'
import { useSplitterWidthStore } from '@/app/hooks/useSplitterWidthStore'
import Image from 'next/image'
import Link from 'next/link'
import useLibraryStore from '@/app/hooks/useLibraryStore'
import { ListType } from '@/app/hooks/useLibrary'

type LibraryCardItemProps = {
  coverUrl: string
  title: string
  subtitle: string
  active?: boolean
  playlistId: string
}

export default function LibraryCardItem({
  coverUrl,
  title,
  subtitle,
  playlistId,
}: LibraryCardItemProps) {
  const { isLeftSideClosed } = useSplitterWidthStore()
  const { selectedListType } = useLibraryStore()
  function getPageIdBySelectedListType(selectedListType: ListType) {
    switch (selectedListType) {
      case 'Albums':
        return 'album'
      case 'Artists':
        return 'artist'
      case 'Playlists':
        return 'playlist'
      default:
        return 'playlist'
    }
  }

  return (
    <Link
      className={cn(
        'flex h-16 w-full max-w-[300px] items-center gap-x-4  rounded-md px-2 py-2.5 transition hover:bg-neutral-400/10',
        isLeftSideClosed && 'group w-16 justify-center p-1.5',
      )}
      href={`/${getPageIdBySelectedListType(selectedListType)}/${playlistId}`}
    >
      <Image
        className={cn(
          'object-fit  h-12 w-12  rounded-md object-cover',
          isLeftSideClosed && 'h-12  w-12 ',
        )}
        alt={`${title} cover`}
        src={coverUrl}
        width={48}
        height={48}
        unoptimized
      />
      <div
        className={cn(
          'flex flex-col',
          isLeftSideClosed &&
            'absolute left-[90px] z-10 hidden h-fit rounded-md bg-neutral-800 p-2 transition-all duration-1000 ease-in-out group-hover:flex',
        )}
      >
        <span className="whitespace-nowrap text-white">{title}</span>
        <span className="whitespace-nowrap text-sm text-neutral-400">
          {subtitle}
        </span>
      </div>
    </Link>
  )
}
