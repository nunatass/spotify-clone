'use client'

import PlayerController from './Player-controller'
import CurrentPayingCard from './current-paying-card'
import PlayerSettings from './player-settings'

type PlayerProps = {
  title: string
  artist: string
  coverUrl: string
}

export default function Player({ title, artist, coverUrl }: PlayerProps) {
  return (
    <div className=" flex h-[100px] w-full items-center justify-between   bg-black px-4 ">
      <CurrentPayingCard
        title={title}
        artist={artist}
        coverUrl={coverUrl}
        liked={false}
      />
      <PlayerController />
      <PlayerSettings />
    </div>
  )
}
