import { create } from 'zustand'

type SplitterWidth = {
  rightWidth: number
  leftWidth: number
}

type SplitterWidthStore = {
  setSplitterWidth: (width: SplitterWidth) => void
  isLeftSideClosed: boolean
  isRightSideClosed: boolean
  splitterWidth: SplitterWidth
}

export const useSplitterWidthStore = create<SplitterWidthStore>((set) => {
  let rightWidth = 0
  if (typeof window !== 'undefined') {
    rightWidth = window.innerWidth - 300
  }

  return {
    splitterWidth: {
      leftWidth: 300,
      rightWidth,
    },
    isLeftSideClosed: false,
    isRightSideClosed: false,
    setSplitterWidth: (width: SplitterWidth) => {
      set({
        splitterWidth: width,
        isLeftSideClosed: width.leftWidth < 250,
        isRightSideClosed: width.rightWidth === 500,
      })
    },
  }
})
