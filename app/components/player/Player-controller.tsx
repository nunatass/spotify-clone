import {
  Play,
  Pause,
  Repeat,
  Forward,
  Rewind,
  Shuffle,
  RepeatOnce,
} from 'iconoir-react'
import Slider from '../slider'
import { cn, msToMinSec } from '@/app/lib'
import { useEffect, useState } from 'react'
import {
  usePlaybackState,
  useSpotifyPlayer,
} from 'react-spotify-web-playback-sdk'

export default function PlayerController() {
  const player = useSpotifyPlayer()

  const playbackState = usePlaybackState(true, 1000)

  const [duration, setDuration] = useState(0)
  const [position, setPosition] = useState(0)
  const [isOnShuffleMode, setIsOnShuffleMode] = useState(false)
  const [repeatMode, setRepeatMode] = useState(0)

  function handleTogglePlayButton() {
    if (playbackState) {
      playbackState.paused = !playbackState.paused
    }
  }

  function handlePlayerNext() {
    player && player.nextTrack()
  }

  function handlePlayerPrevious() {
    player && player.previousTrack()
  }

  useEffect(() => {
    if (playbackState) {
      setDuration(playbackState.duration)
      setPosition(playbackState.position)
      setRepeatMode(playbackState.repeat_mode)
      setIsOnShuffleMode(playbackState.shuffle)
      console.log(playbackState.repeat_mode)
    }
  }, [playbackState])

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-2  text-white/70">
      <div className="flex w-full items-center justify-center gap-x-4  ">
        <Shuffle
          className={cn(
            'h-6 w-6 cursor-pointer brightness-75',
            player && 'hover:text-white',
            isOnShuffleMode && 'text-green-500 hover:brightness-100',
          )}
        />
        <Rewind
          className={cn('h-6 w-6 cursor-pointer', player && 'hover:text-white')}
        />
        <div
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-full bg-neutral-400  transition ',
            player && 'bg-white/90 hover:scale-110 hover:bg-white ',
          )}
          onClick={handlePlayerPrevious}
        >
          {playbackState && playbackState.paused ? (
            <Play
              className="h-6 w-6 cursor-pointer text-black  transition-all "
              onClick={handleTogglePlayButton}
            />
          ) : (
            <Pause
              className="h-6 w-6 cursor-pointer text-black  transition-all "
              onClick={handleTogglePlayButton}
            />
          )}
        </div>
        <Forward
          className={cn('h-6 w-6 cursor-pointer', player && 'hover:text-white')}
          onClick={handlePlayerNext}
        />
        {repeatMode === 2 ? (
          <RepeatOnce
            className={cn(
              'h-6 w-6 cursor-pointer brightness-75',
              player && 'hover:text-white',
            )}
          />
        ) : (
          <Repeat
            className={cn(
              'h-6 w-6 cursor-pointer brightness-75',
              player && 'hover:text-white',
              repeatMode > 1 && 'text-green-500 hover:brightness-100',
            )}
          />
        )}
      </div>
      <div className="flex w-full items-center justify-center gap-x-4 ">
        <span className="text-xs">{msToMinSec(position)}</span>
        <Slider value={[position]} max={duration} />
        <span className="text-xs">{msToMinSec(duration)}</span>
      </div>
    </div>
  )
}
