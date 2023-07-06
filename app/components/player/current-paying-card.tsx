'use client'

import { cn } from '@/app/lib'
import Image from 'next/image'
import { Heart } from 'iconoir-react'
import { usePlaybackState } from 'react-spotify-web-playback-sdk'

export default function CurrentPayingCard() {
  const playbackState = usePlaybackState()

  return (
    <div
      className={cn(
        'flex h-16 w-[400px] items-center gap-x-4 overflow-hidden rounded-md  px-2 py-2.5 transition',
      )}
    >
      <Image
        className={cn('object-fit  h-14 w-14  rounded-md object-cover')}
        alt="cover"
        src={`${
          playbackState &&
          playbackState.track_window.current_track.album.images[0].url
        }`}
        width={48}
        height={48}
        unoptimized
      />

      <div className={cn('flex flex-col')}>
        <span className="line-clamp-2 cursor-pointer  whitespace-nowrap text-base text-white hover:underline">
          {playbackState && playbackState.track_window.current_track.name}
        </span>
        <span className="line-clamp-2 cursor-pointer  text-sm text-neutral-400 hover:underline">
          {playbackState &&
            playbackState.track_window.current_track.artists
              .map((artist) => artist.name)
              .join(',')}
        </span>
      </div>

      <Heart
        className={cn(
          'h-8 w-8 cursor-pointer text-neutral-400 transition hover:text-white',
        )}
      />
    </div>
  )
}
