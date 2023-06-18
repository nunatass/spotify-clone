'use client '
import SidebarButton from '../sidebar-button'
import {
  ListBulletIcon,
  PlusIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/solid'
import RoundedButton from '../../button/rounded-button'
import LibraryFilter from './library-filter'
import { useSplitterWidthStore } from '@/app/hooks/useSplitterWidthStore'
import { cn } from '../../../lib/index'
import LibraryCardItem from './library-card-item'

export default function LibrarySection() {
  const { isLeftSideClose } = useSplitterWidthStore()

  return (
    <section
      className={cn(
        ' w-full flex-col justify-center  overflow-y-hidden rounded-lg bg-primary  p-4',
        isLeftSideClose && 'p-2',
      )}
    >
      <div className="">
        <div className="flex items-center justify-between  ">
          <SidebarButton
            icon={ListBulletIcon}
            activeIcon={ListBulletIcon}
            title="Your Library"
            href=""
          />
          <div className={cn('flex gap-x-2 ', isLeftSideClose && 'hidden')}>
            <RoundedButton icon={PlusIcon} backgroundColor="transparent" />
            <RoundedButton
              icon={ArrowRightIcon}
              backgroundColor="transparent"
            />
          </div>
        </div>
        <LibraryFilter className={cn('my-4', isLeftSideClose && 'hidden')} />
      </div>
      <div className=" h-full overflow-y-scroll pb-10">
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f"
          title="Certified Lover Boy"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad"
          title="Her Loss"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b273a90d170c61fb7d063d47161d"
          title="Nothing Was The Same"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f"
          title="Certified Lover Boy"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad"
          title="Her Loss"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b273a90d170c61fb7d063d47161d"
          title="Nothing Was The Same"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f"
          title="Certified Lover Boy"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad"
          title="Her Loss"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b273a90d170c61fb7d063d47161d"
          title="Nothing Was The Same"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b273a90d170c61fb7d063d47161d"
          title="Nothing Was The Same"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b273a90d170c61fb7d063d47161d"
          title="Nothing Was The Same"
          subtitle="Album - Drake"
          type="album"
        />

        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad"
          title="Her Loss"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad"
          title="Her Loss"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b273a90d170c61fb7d063d47161d"
          title="Nothing Was The Same"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f"
          title="Certified Lover Boy"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad"
          title="Her Loss"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b273a90d170c61fb7d063d47161d"
          title="Nothing Was The Same"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f"
          title="Certified Lover Boy"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad"
          title="Her Loss"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b273a90d170c61fb7d063d47161d"
          title="Nothing Was The Same"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b273a90d170c61fb7d063d47161d"
          title="Nothing Was The Same"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b273a90d170c61fb7d063d47161d"
          title="Nothing Was The Same"
          subtitle="Album - Drake"
          type="album"
        />

        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad"
          title="Her Loss"
          subtitle="Album - Drake"
          type="album"
        />
        <LibraryCardItem
          coverUrl="https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad"
          title="Her Loss"
          subtitle="Album - Drake"
          type="album"
        />
      </div>
    </section>
  )
}
