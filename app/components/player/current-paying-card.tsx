'use client'

import { cn } from '@/app/lib'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'

type CurrentPayingCardProps = {
  coverUrl: string
  title: string
  artist: string
  liked?: boolean
}

export default function CurrentPayingCard({
  coverUrl,
  title,
  artist,
  liked,
}: CurrentPayingCardProps) {
  const LikeIcon = liked ? HeartIconSolid : HeartIcon
  return (
    <div
      className={cn(
        'flex h-16 w-fit items-center gap-x-4 rounded-md  px-2 py-2.5 transition',
      )}
    >
      <Image
        className={cn('object-fit  h-12 w-12  rounded-md object-cover')}
        alt={`${title} cover`}
        src={coverUrl}
        width={48}
        height={48}
        unoptimized
      />
      <div className={cn('flex flex-col')}>
        <span className="cursor-pointer whitespace-nowrap text-white hover:underline">
          {title}
        </span>
        <span className="cursor-pointer text-sm text-neutral-400 hover:underline">
          {artist}
        </span>
      </div>

      <LikeIcon
        className={cn(
          'h-8 w-8 cursor-pointer text-neutral-400 transition hover:text-white',
          liked && 'text-green-500 ',
        )}
      />
    </div>
  )
}
