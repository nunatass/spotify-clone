import React, { useMemo } from 'react'
import LibraryFilterItem from './library-filter-item'
import RoundedButton from '@/app/components/button/rounded-button'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import { cn } from '../../../../lib/index'

type LibraryFilterProps = {
  className?: string
}

export default function LibraryFilter({ className }: LibraryFilterProps) {
  const filters = useMemo(
    () => [
      {
        isSelected: false,
        title: 'Playlists',
      },
      {
        isSelected: true,
        title: 'Albums',
      },
      {
        isSelected: false,
        title: 'Artist',
      },
      {
        isSelected: false,
        title: 'Podcast & show',
      },
    ],
    [],
  )

  return (
    <div
      className={cn(
        'no-scrollbar flex w-full gap-x-2 overflow-x-scroll',
        className,
      )}
    >
      <RoundedButton icon={ChevronLeftIcon} backgroundColor="#d4d4d41a" />
      {filters.map((filter) => {
        return <LibraryFilterItem key={filter.title} {...filter} />
      })}
      <RoundedButton icon={ChevronRightIcon} backgroundColor="#d4d4d41a" />
    </div>
  )
}
