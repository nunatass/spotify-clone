import { useEffect, useState } from 'react'
import useSpotify from './useSpotify'
import { useSession } from 'next-auth/react'
import SpotifyWebApi from 'spotify-web-api-node'
import useLibraryStore from './useLibraryStore'

export type ListType = 'Playlists' | 'Albums' | 'Artists'

export type GetListProps = {
  spotifyApi: SpotifyWebApi
  listType: ListType
}

export type List = {
  id: string
  coverUrl: string
  title: string
  subtitle: string
}

const getListMethods = {
  Albums: (spotifyApi: SpotifyWebApi) => spotifyApi.getMySavedAlbums(),
  Artists: (spotifyApi: SpotifyWebApi) => spotifyApi.getFollowedArtists(),
  Playlists: (spotifyApi: SpotifyWebApi) => spotifyApi.getUserPlaylists(),
}

function getList({ spotifyApi, listType }: GetListProps) {
  return getListMethods[listType](spotifyApi)
}

const mapListItems = {
  Albums: (item: any) => ({
    id: item.album.id,
    coverUrl: item.album.images[1].url,
    title: item.album.label,
    subtitle: item.album.name,
  }),
  Artists: (item: any) => ({
    id: item.id,
    coverUrl: item.images[1]?.url,
    title: item.name,
    subtitle: '',
  }),
  Playlists: (item: any, selectedListType: string, session: any) => ({
    id: item.id,
    coverUrl: item.images[0]?.url,
    title: item.name,
    subtitle: `${selectedListType} • ${session?.user?.name}`,
  }),
}

function useLibrary(listType: ListType) {
  const { data: session } = useSession()
  const [list, setList] = useState<List[]>([])
  const {
    selectedListType,
    playlists,
    albums,
    artists,
    setPlaylists,
    setAlbums,
    setArtists,
  } = useLibraryStore()

  const spotifyApi = useSpotify()

  useEffect(() => {
    const listDetails = {
      Playlists: { list: playlists, setList: setPlaylists },
      Albums: { list: albums, setList: setAlbums },
      Artists: { list: artists, setList: setArtists },
    }
    if (spotifyApi.getAccessToken()) {
      if (listDetails[listType].list.length > 0) {
        setList(listDetails[listType].list)
        return
      }

      getList({ spotifyApi, listType })!.then(
        (data: any) => {
          const items =
            listType !== 'Artists' ? data.body.items : data.body.artists.items
          const newList: List[] = items.map((item: any) => {
            return mapListItems[listType](item, selectedListType, session)
          })

          listDetails[listType].setList(newList)
          setList(newList)
        },
        (error: any) => {
          console.log('Something went wrong!', error)
        },
      )
    }
  }, [
    listType,
    selectedListType,
    session,
    spotifyApi,
    playlists,
    albums,
    artists,
    setPlaylists,
    setAlbums,
    setArtists,
  ])

  return list
}

export default useLibrary
