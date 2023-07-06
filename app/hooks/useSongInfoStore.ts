import { create } from 'zustand'

type SongInfoStore = {
  currentTrackId: string
  isPlaying: boolean
  volume: number
  setCurrentTrackId: (currentTrackId: string) => void
  setIsPlaying: (isPlaying: boolean) => void
  setVolume: (volume: number) => void
}

const useSongInfoStore = create<SongInfoStore>((set, get) => ({
  currentTrackId: '',
  isPlaying: false,
  volume: 0.5,
  setCurrentTrackId: (currentTrackId: string) => {
    set({ currentTrackId })
  },
  setIsPlaying: (isPlaying: boolean) => {
    set({ isPlaying })
  },
  setVolume: (volume: number) => {
    set({ volume })
  },
}))

export default useSongInfoStore
