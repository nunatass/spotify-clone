import { Mic, SoundHigh, Playlist } from 'iconoir-react'
import Slider from '../slider'
import { useEffect, useState } from 'react'
import { useSpotifyPlayer } from 'react-spotify-web-playback-sdk'

export default function PlayerSettings() {
  const player = useSpotifyPlayer()
  const [volume, setVolume] = useState(50)

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
    <div
      className={
        'flex h-full w-full max-w-[250px] items-end justify-center gap-x-4 pb-4 text-neutral-400'
      }
    >
      <Mic className="h-8 w-8 cursor-pointer hover:text-white" />
      <Playlist className="h-8 w-8 cursor-pointer hover:text-white" />
      <SoundHigh className="h-8 w-8 cursor-pointer hover:text-white" />
      <Slider defaultValue={[50]} value={[volume]} width={100} />
    </div>
  )
}
