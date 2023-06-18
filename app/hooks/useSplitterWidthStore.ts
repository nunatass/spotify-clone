import { create } from 'zustand'

type SplitterWidth = {
  rightWidth: number
  leftWidth: number
}

type SplitterWidthStore = {
  setSplitterWidth: (width: SplitterWidth) => void
  isLeftSideClose: boolean
  splitterWidth: SplitterWidth
}

export const useSplitterWidthStore = create<SplitterWidthStore>((set) => ({
  splitterWidth: {
    leftWidth: 300,
    rightWidth: window.innerWidth,
  },
  isLeftSideClose: false,
  setSplitterWidth: (width: SplitterWidth) => {
    set({
      splitterWidth: width,
      isLeftSideClose: width.leftWidth < 250,
    })
  },
}))
