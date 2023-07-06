'use client'

import { useSplitterWidthStore } from '@/app/hooks/useSplitterWidthStore'
import Splitter from '@devbookhq/splitter'
import { ReactNode, useEffect } from 'react'
import Sidebar from '../sidebar'

const MIN_WIDTHS = [80, 500]
const MAX_SIZE_BOUND = [80, 300]
const INIT_SIZES = [20, 80]
let currentSize = [20, 80]

export default function Page({ children }: { children: ReactNode }) {
  let windowWidth = 0
  if (typeof window !== 'undefined') {
    windowWidth = window.innerWidth / 100
  }

  const { setSplitterWidth, splitterWidth } = useSplitterWidthStore()

  const dragDirection = (newSizes: number[]): string => {
    if (currentSize[0] > 250 && newSizes[0] * windowWidth < 300) {
      return 'left'
    }

    return 'right'
  }
  const isWithinBounds = (newSize: number, bounds: number[]): boolean => {
    return newSize > bounds[0] && newSize < bounds[1]
  }

  function handleResizeFinished(gutterIdx: number, newSizes: number[]) {
    if (newSizes.length === 2) {
      const direction = dragDirection(newSizes)

      const newSize = newSizes[0] * windowWidth

      if (direction === 'left') {
        newSizes[0] = MIN_WIDTHS[0] / windowWidth
        newSizes[1] = 100 - newSizes[0]
      }

      if (direction === 'right' && isWithinBounds(newSize, MAX_SIZE_BOUND)) {
        newSizes = [...INIT_SIZES]
      }

      setSplitterWidth({
        leftWidth: newSizes[0] * windowWidth,
        rightWidth: newSizes[1] * windowWidth,
      })

      currentSize = newSizes
    }
  }

  useEffect(() => {
    currentSize = [splitterWidth.leftWidth, splitterWidth.rightWidth]
  }, [splitterWidth])

  return (
    <main className="relative h-[calc(100vh-100px)] w-screen  bg-black p-2">
      <Splitter
        initialSizes={currentSize}
        minWidths={MIN_WIDTHS}
        gutterClassName="px-1 py-0 h-full w-2 bg-black 
        hover:border-l-[0.1px] hover:border-gray-600"
        draggerClassName="hidden"
        onResizeFinished={handleResizeFinished}
      >
        <Sidebar />
        {children}
      </Splitter>
    </main>
  )
}
