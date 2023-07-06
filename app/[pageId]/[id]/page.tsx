'use client'

import { Pause, Clock } from 'iconoir-react'
import { useEffect, useState } from 'react'
import { cn, msToMinSec } from '../../lib'
import Card from '../../components/pages/playlist/card'
import useSpotify from '../../hooks/useSpotify'
import Image from 'next/image'
import { useSplitterWidthStore } from '@/app/hooks/useSplitterWidthStore'

// import { useSession } from 'next-auth/react'

type PlayListProps = {
  params: {
    pageId: 'album' | 'artist' | 'playlist'
    id: string
  }
}

export default function Playlist({ params }: PlayListProps) {
  const { id, pageId } = params

  const spotifyApi = useSpotify()
  // const { data: session } = useSession()
  const [playlist, setPlaylist] = useState<any>()
  const Icon = Pause
  //  const Icon = currentTrackId === trackId ? PauseIcon : PlayIcon
  const { splitterWidth } = useSplitterWidthStore()

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      if (pageId === 'album') {
        spotifyApi.getAlbum(id).then((data) => {
          setPlaylist(data.body)
        })
      } else if (pageId === 'artist') {
        spotifyApi.getArtistAlbums(id).then((data) => {
          setPlaylist({
            tracks: {
              items: data.body.items,
            },
          })
        })
      } else if (pageId === 'playlist') {
        spotifyApi.getPlaylist(id).then((data) => {
          setPlaylist(data.body)
        })
      }
    }
  }, [id, pageId, spotifyApi])

  useEffect(() => {
    const fetchColor = async () => {
      if (!playlist) {
        return
      }
      const response = await fetch(
        `/api/image-color?imageUrl=${encodeURIComponent(
          pageId === 'artist'
            ? playlist.tracks.items[0]?.images[0].url
            : playlist?.images[0].url,
        )}`,
      )

      const data = await response.json()
      document.documentElement.style.setProperty(
        '--main-bg-color',
        data.dominantColor,
      )
    }
    fetchColor()
  }, [pageId, playlist])

  return (
    <main
      className={cn(
        ' relative flex h-full  w-full  rounded-lg  bg-main-bg-color  p-8 text-white transition-all duration-500 ease-out',
      )}
    >
      <div
        className="absolute left-0 top-0 h-full w-full overflow-x-hidden overflow-y-scroll  bg-gradient-to-t  from-primary from-[30%] via-primary/50 to-transparent px-8"
        id={`page-${pageId}`}
      >
        <div className="z-10 flex h-[50%]  items-end pb-8">
          <Card
            coverUrl={
              playlist && pageId !== 'artist'
                ? playlist?.images[0].url
                : playlist
                ? playlist?.tracks.items[0]?.images[0].url
                : ''
            }
            title={
              playlist && pageId === 'artist'
                ? playlist?.tracks.items[0].artists[0].name
                : playlist?.name
            }
            createBy={
              playlist && pageId === 'playlist'
                ? playlist?.owner.display_name
                : ''
            }
            totalSongs={
              playlist && pageId === 'playlist' ? playlist?.tracks.total : 0
            }
          />
        </div>

        <div className="blur-xs absolute bottom-0 left-0 right-0  h-full min-h-[50%] w-full translate-y-1/2 bg-primary/20 p-8 shadow-sm">
          <div className="flex h-full w-full min-w-full flex-col gap-y-10">
            <div
              className={cn(
                'min-h-14 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-500 opacity-100 drop-shadow-xl transition-all duration-100 ease-in hover:scale-110 ',
              )}
            >
              <Icon className="h-8 w-8 text-black" />
            </div>
            <div className=" w-full">
              <div className="mb-4 flex items-center justify-between border-b-[0.4px] border-neutral-400/20 px-1.5 text-base text-neutral-400 ">
                <div className="w-8 p-2 ">#</div>
                <div className="w-full min-w-[300px] p-2 ">Title</div>
                <div
                  className={cn(
                    'flex w-[300px] items-center justify-center p-2',
                    (splitterWidth.rightWidth < 800 || pageId !== 'playlist') &&
                      'hidden',
                  )}
                >
                  Album
                </div>
                <div
                  className={cn(
                    'w-full p-2 text-end',
                    (splitterWidth.rightWidth < 800 || pageId !== 'artist') &&
                      'hidden',
                  )}
                >
                  Date added
                </div>
                <div
                  className={cn(
                    'w-12 flex-shrink-0 p-2 text-center',
                    pageId === 'artist' && 'hidden',
                  )}
                >
                  <Clock className="h-6 w-6" />
                </div>
              </div>
              {playlist &&
                playlist.tracks.items.map((track: any, index: any) => (
                  <div
                    key={
                      pageId === 'playlist'
                        ? track.track.id + index
                        : track.id + index
                    }
                    className="text-s mb-4 flex items-center justify-between rounded-md p-1.5 px-1.5 text-neutral-400 transition hover:bg-neutral-400/10"
                  >
                    <div className="w-8 p-2 ">{index + 1}</div>
                    <div className="w-full min-w-[300px] p-2 ">
                      <div className="flex h-full w-full min-w-[300px] items-center gap-x-4 transition">
                        <Image
                          className="object-fit  h-12 w-12 rounded-md object-cover"
                          alt={`cover`}
                          src={
                            pageId === 'artist'
                              ? track.images[1].url
                              : pageId === 'playlist'
                              ? track.track.album.images[1].url
                              : playlist.images[0].url
                          }
                          width={12}
                          height={12}
                          unoptimized
                        />
                        <div className="flex flex-col">
                          <span className="whitespace-nowrap">
                            {pageId === 'playlist'
                              ? track.track.name
                              : track.name}
                          </span>
                          <span className="whitespace-nowrap text-sm">
                            {pageId === 'playlist'
                              ? track.track.artists
                                  .map((artist: any) => artist.name)
                                  .join(', ')
                              : track.artists
                                  .map((artist: any) => artist.name)
                                  .join(', ')}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={cn(
                        'w-full p-2 text-center',
                        (splitterWidth.rightWidth < 800 ||
                          pageId === 'album') &&
                          'hidden',
                      )}
                    >
                      {}
                    </div>
                    <div
                      className={cn(
                        'flex w-full  items-center justify-center truncate p-2',
                        (splitterWidth.rightWidth < 800 ||
                          pageId === 'album') &&
                          'hidden',
                      )}
                    >
                      {pageId === 'playlist' && track.track.album.name}
                    </div>
                    <div className="w-fit flex-shrink-0 p-2 text-center">
                      {pageId === 'artist'
                        ? track.release_date
                        : pageId === 'playlist'
                        ? msToMinSec(track.track.duration_ms)
                        : msToMinSec(track.duration_ms)}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
