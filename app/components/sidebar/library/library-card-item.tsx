'use client'

import { cn } from '@/app/lib'
import { useSplitterWidthStore } from '@/app/hooks/useSplitterWidthStore'
import Image from 'next/image'

type LibraryCardItemProps = {
  coverUrl: string
  title: string
  subtitle: string
  type: string
  active?: boolean
}

export default function LibraryCardItem({
  coverUrl,
  title,
  subtitle,
  type,
}: LibraryCardItemProps) {
  const { isLeftSideClose } = useSplitterWidthStore()

  return (
    <div
      className={cn(
        'flex h-16 w-full items-center gap-x-4  rounded-md px-2 py-2.5 transition hover:bg-neutral-400/10',
        isLeftSideClose && 'group w-16 justify-center p-1.5',
      )}
    >
      <Image
        className={cn(
          'object-fit  h-12 w-12  rounded-md object-cover',
          isLeftSideClose && 'h-12  w-12 ',
        )}
        alt={`${title} cover`}
        src={coverUrl}
        width={48}
        height={48}
        unoptimized
      />
      <div
        className={cn(
          'flex flex-col',
          isLeftSideClose &&
            'absolute left-[90px] z-10 hidden h-fit rounded-md bg-neutral-800 p-1 transition-all duration-1000 ease-in-out group-hover:flex',
        )}
      >
        <span className="whitespace-nowrap text-white">{title}</span>
        <span className="whitespace-nowrap text-sm text-neutral-400">
          {subtitle}
        </span>
      </div>
    </div>
  )
}
