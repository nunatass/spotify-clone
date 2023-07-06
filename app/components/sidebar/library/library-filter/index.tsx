import LibraryFilterItem from './library-filter-item'
import RoundedButton from '@/app/components/button/rounded-button'
import { cn } from '../../../../lib/index'
import { useState } from 'react'
import useLibraryStore from '../../../../hooks/useLibraryStore'
import { ListType } from '@/app/hooks/useLibrary'
import { NavArrowLeft, NavArrowRight } from 'iconoir-react'

type LibraryFilterProps = {
  className?: string
}

type Filters = {
  isSelected: boolean
  title: ListType
}

const INITIAL_FILTERS_STATE: Filters[] = [
  {
    isSelected: true,
    title: 'Playlists',
  },
  {
    isSelected: false,
    title: 'Albums',
  },
  {
    isSelected: false,
    title: 'Artists',
  },
]

export default function LibraryFilter({ className }: LibraryFilterProps) {
  const [filters, setFilters] = useState<Filters[]>(INITIAL_FILTERS_STATE)

  const { setSelectedListType } = useLibraryStore()

  function handleLibraryFilterItemClick(title: ListType) {
    setFilters(
      filters.map((filter) => {
        if (filter.title === title) {
          return { ...filter, isSelected: true }
        } else {
          return { ...filter, isSelected: false }
        }
      }),
    )
    setSelectedListType(title)
  }

  return (
    <div
      className={cn(
        'no-scrollbar flex w-full gap-x-2 overflow-x-scroll',
        className,
      )}
    >
      <RoundedButton icon={NavArrowLeft} backgroundColor="#d4d4d41a" />
      {filters.map((filter) => {
        return (
          <LibraryFilterItem
            key={filter.title}
            {...filter}
            onClick={() => {
              handleLibraryFilterItemClick(filter.title)
            }}
          />
        )
      })}
      <RoundedButton icon={NavArrowRight} backgroundColor="#d4d4d41a" />
    </div>
  )
}
