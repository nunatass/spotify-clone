'use client'

import { cn } from '@/app/lib'
import { Mic, Playlist, SoundHigh } from 'iconoir-react'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useSpotifyPlayer } from 'react-spotify-web-playback-sdk'
import Slider from '../slider'

export default function PlayerSettings() {
  const player = useSpotifyPlayer()
  const [volume, setVolume] = useState(50)
  const { data: session } = useSession()

  useEffect(() => {
    async function getVolume() {
      if (player) {
        const vol = await player.getVolume()
        setVolume(vol)
      }
    }

    getVolume()
  }, [player])

  return (
    <div className="flex h-full w-full max-w-[250px] items-end justify-center gap-x-4 pb-4 text-neutral-400">
      <Mic
        className={cn('h-8 w-8', session && 'cursor-pointer  hover:text-white')}
      />
      <Playlist
        className={cn('h-8 w-8', session && 'cursor-pointer hover:text-white')}
      />
      <SoundHigh
        className={cn('h-8 w-8', session && 'cursor-pointer hover:text-white')}
      />
      <Slider defaultValue={[50]} value={[volume]} width={100} />
    </div>
  )
}
