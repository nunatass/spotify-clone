import { cn } from '@/app/lib'
import Image from 'next/image'
import { PlayIcon } from '@heroicons/react/24/solid'

type HorizontalCardProps = {
  title: string
  coverUrl: string
  artist: string
}

export default function VerticalCard({
  title,
  coverUrl,
  artist,
}: HorizontalCardProps) {
  return (
    <div className=" group relative flex h-[250px] w-[180px] cursor-pointer flex-col items-center gap-y-2 rounded-md  bg-neutral-900 p-4 transition-colors duration-500 ease-in-out hover:bg-neutral-700/30 hover:drop-shadow-md	  ">
      <Image
        className={cn('object-fit  h-[70%] w-auto rounded-md  object-cover')}
        alt={`${title} cover`}
        src={coverUrl}
        width={48}
        height={48}
        unoptimized
      />
      <div className="flex w-full flex-col items-start">
        <span className="text-sm text-white">{title}</span>
        <span className="text-xs text-neutral-400">{artist}</span>
      </div>
      <div className="duration-550 absolute right-2 top-[55%] hidden h-10 w-10 items-center justify-center rounded-full bg-green-600/90 shadow-md transition-all group-hover:flex">
        <PlayIcon className="h-6 w-6 text-black" />
      </div>
    </div>
  )
}
