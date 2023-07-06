import { useEffect, useState } from 'react'
import useSpotify from './useSpotify'
import useSongInfoStore from './useSongInfoStore'

export type SongInfo = {
  name: string
  artist: string
  coverUrl: string
}

export default function useSongInfo(trackId?: string) {
  const spotifyApi = useSpotify()
  const { currentTrackId } = useSongInfoStore()

  const [songInfo, setSongInfo] = useState<SongInfo | null>(null)
  const selectedTrackId = trackId ?? currentTrackId
  useEffect(() => {
    const fetchSongInfo = async () => {
      if (selectedTrackId) {
        const trackInfo = await fetch(
          `https://api.spotify.com/v1/tracks/${selectedTrackId}`,
          {
            headers: { Authorization: `Bearer ${spotifyApi.getAccessToken()}` },
          },
        ).then((res) => res.json())

        setSongInfo({
          name: trackInfo.name,
          artist: trackInfo.artists
            .map((artist: any) => artist.name)
            .join(', '),
          coverUrl: trackInfo.album.images[1].url,
        })
      }
    }
    fetchSongInfo()
  }, [currentTrackId, spotifyApi])

  return songInfo
}
