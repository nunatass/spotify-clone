import { cn } from '@/app/lib'
import Image from 'next/image'
import { PlayIcon } from '@heroicons/react/24/solid'

type HorizontalCardProps = {
  title: string
  coverUrl: string
}

export default function HorizontalCard({
  title,
  coverUrl,
}: HorizontalCardProps) {
  return (
    <div className="group relative flex h-20  cursor-pointer items-center  gap-x-4 rounded-md bg-primary/30 transition-colors duration-500 ease-in-out hover:bg-primary/50 hover:drop-shadow-md	">
      <Image
        className={cn('object-fit  h-20 w-20 rounded-l-md  object-cover')}
        alt={`${title} cover`}
        src={coverUrl}
        width={48}
        height={48}
        unoptimized
      />
      <span className="text-sm font-semibold">{title}</span>
      <div className="duration-550 absolute right-2 hidden h-10 w-10 items-center justify-center rounded-full bg-green-600/90 shadow-md transition group-hover:flex">
        <PlayIcon className="h-6 w-6 text-black" />
      </div>
    </div>
  )
}
