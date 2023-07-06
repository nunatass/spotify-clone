import { create } from 'zustand'
import { List, ListType } from './useLibrary'

type LibraryStore = {
  selectedListType: ListType
  albums: List[]
  artists: List[]
  playlists: List[]
  setSelectedListType: (selectedListType: ListType) => void
  setAlbums: (list: List[]) => void
  setArtists: (list: List[]) => void
  setPlaylists: (list: List[]) => void
}

const useLibraryStore = create<LibraryStore>((set, get) => ({
  selectedListType: 'Playlists',
  albums: [],
  artists: [],
  playlists: [],

  setSelectedListType: (selectedListType: ListType) => {
    set({
      selectedListType,
    })
  },
  setAlbums: (albums: List[]) => {
    set({
      albums,
    })
  },
  setArtists: (artists: List[]) => {
    set({
      artists,
    })
  },
  setPlaylists: (playlists: List[]) => {
    set({
      playlists,
    })
  },
}))

export default useLibraryStore
