'use client'

import { cn, generateColor, greetingByTime } from '@/app/lib'
import { useSplitterWidthStore } from '@/app/hooks/useSplitterWidthStore'

import useSpotify from '@/app/hooks/useSpotify'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import useSongInfoStore from '@/app/hooks/useSongInfoStore'
import HorizontalCard from './components/pages/home/horizontal-card'
import VerticalCard from './components/pages/home/vertical-card'

export default function Home() {
  const { splitterWidth } = useSplitterWidthStore()
  const { data: session } = useSession()
  const spotifyApi = useSpotify()

  const [recentlyPlayedTracks, setRecentlyPlayedTracks] = useState<any[]>()
  const [recommendations, setRecommendations] = useState<any[]>()
  const { setCurrentTrackId } = useSongInfoStore()

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi
        .getMyRecentlyPlayedTracks({
          limit: 6,
        })
        .then((data) => {
          setRecentlyPlayedTracks(data.body.items)
          setCurrentTrackId(data.body.items[0].track.id)
        })
    }
  }, [spotifyApi, session, setCurrentTrackId])

  useEffect(() => {
    const fetchTracksInfo = async () => {
      if (spotifyApi.getAccessToken()) {
        const trackIds = recentlyPlayedTracks
          ?.map((item) => item.track.id)
          .slice(4)
          .join(',')

        const artistsId = recentlyPlayedTracks
          ?.map((item) => item.track.artists[0].id)
          .slice(4)
          .join(',')

        if (!trackIds || !artistsId) {
          return
        }

        const tracksInfo = await fetch(
          `https://api.spotify.com/v1/recommendations?seed_tracks=${trackIds}&seed_artists=${artistsId}`,
          {
            headers: { Authorization: `Bearer ${spotifyApi.getAccessToken()}` },
          },
        ).then((res) => res.json())

        setRecommendations(tracksInfo.tracks)
      }
    }
    fetchTracksInfo()
  }, [spotifyApi, session, recentlyPlayedTracks])

  return (
    <main className=" relative h-full w-full  rounded-lg bg-main-bg-color bg-gradient-to-b via-primary to-primary  text-white brightness-90 transition-colors  duration-500 ease-in ">
      <div
        className="absolute  h-[100%] w-full overflow-y-scroll rounded-lg bg-gradient-to-t from-primary from-[55%] via-neutral-900/80 to-transparent px-8 pb-16"
        id="home"
      >
        <div className="z-30">
          <div className="mt-16 inline-block text-3xl font-bold ">
            {greetingByTime()}
          </div>
          {recentlyPlayedTracks && (
            <div className="mt-4 block text-xl font-bold hover:underline ">
              Recently played
            </div>
          )}
          <div
            className={cn(
              'mt-8 grid w-full grid-cols-3 gap-5 ',
              splitterWidth.rightWidth < 900 && 'grid-cols-2',
              splitterWidth.rightWidth < 680 && 'grid-cols-1',
            )}
          >
            {recentlyPlayedTracks?.map((item, index) => (
              <HorizontalCard
                key={item.track.id + index}
                coverUrl={item.track.album.images[1].url}
                title={item.track.name}
                color={generateColor(item.track.name)}
                trackId={item.track.id}
              />
            ))}
          </div>

          <span className="my-6 inline-block text-xl font-bold hover:underline ">
            {recommendations && `Made For ${session?.user?.name}`}
          </span>

          <div
            className={cn(
              'mt-4 flex w-full flex-wrap gap-6 ',
              splitterWidth.rightWidth < 650 && ' gap-4',
            )}
          >
            {recommendations?.map((recommendation, index) => (
              <VerticalCard
                key={recommendation?.id + index}
                coverUrl={recommendation?.album.images[1].url}
                title={recommendation?.name}
                artist={recommendation?.artists
                  .map((artist: any) => artist.name)
                  .join(' ')}
                trackId={recommendation?.id}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
