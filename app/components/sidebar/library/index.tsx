'use client '
import SidebarButton from '../sidebar-button'
import { List, Plus, ArrowRight } from 'iconoir-react'
import RoundedButton from '../../button/rounded-button'
import LibraryFilter from './library-filter'
import { useSplitterWidthStore } from '@/app/hooks/useSplitterWidthStore'
import { cn } from '../../../lib/index'
import useLibrary from '@/app/hooks/useLibrary'
import LibraryCardItem from './library-card-item'
import useLibraryStore from '@/app/hooks/useLibraryStore'

export default function LibrarySection() {
  const { isLeftSideClosed } = useSplitterWidthStore()
  const { selectedListType } = useLibraryStore()

  const libraryList = useLibrary(selectedListType)
  return (
    <section
      className={cn(
        ' h-full w-full flex-col  justify-center overflow-hidden rounded-lg bg-primary p-4 pb-4',
        isLeftSideClosed && 'p-2',
      )}
    >
      <div className="">
        <div className="flex items-center justify-between">
          <SidebarButton
            icon={List}
            activeIcon={List}
            title="Your Library"
            href=""
          />
          <div className={cn('flex gap-x-2 ', isLeftSideClosed && 'hidden')}>
            <RoundedButton icon={Plus} backgroundColor="transparent" />
            <RoundedButton icon={ArrowRight} backgroundColor="transparent" />
          </div>
        </div>
        <LibraryFilter className={cn('my-4', isLeftSideClosed && 'hidden')} />
      </div>
      <div className=" h-[85%] w-full overflow-x-hidden overflow-y-scroll pb-6">
        {libraryList.map((item, index) => (
          <LibraryCardItem
            key={item.id + index}
            coverUrl={item.coverUrl}
            title={item.title}
            subtitle={item.subtitle}
            playlistId={item.id}
          />
        ))}
      </div>
    </section>
  )
}
