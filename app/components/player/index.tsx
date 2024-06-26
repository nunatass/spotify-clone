'use client'

import useSpotify from '@/app/hooks/useSpotify'
import { useCallback } from 'react'
import { WebPlaybackSDK } from 'react-spotify-web-playback-sdk'
import PlayerController from './Player-controller'
import CurrentPayingCard from './current-paying-card'
import PlayerSettings from './player-settings'

export default function Player() {
  const spotifyApi = useSpotify()

  const getOAuthToken = useCallback(
    (callback: any) => callback(spotifyApi.getAccessToken()),
    [spotifyApi],
  )

  return (
    <WebPlaybackSDK
      initialDeviceName="spotify clone app"
      getOAuthToken={getOAuthToken}
      initialVolume={0.5}
      connectOnInitialized={true}
    >
      <div className=" flex h-[100px] w-full items-center justify-between bg-black px-4 ">
        <CurrentPayingCard />
        <PlayerController />
        <PlayerSettings />
      </div>
    </WebPlaybackSDK>
  )
}
