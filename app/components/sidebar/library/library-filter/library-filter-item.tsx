import { cn } from '@/app/lib'

export type LibraryFilterItemProps = {
  title: string
  isSelected: boolean
  className?: string
}

export default function LibraryFilterItem({
  title,
  isSelected,
  className,
}: LibraryFilterItemProps) {
  return (
    <span
      className={cn(
        ' flex h-8 w-fit items-center justify-center whitespace-nowrap rounded-3xl bg-neutral-300/10 px-4 text-center text-xs text-white transition-colors hover:bg-neutral-400/10',
        isSelected && ' bg-white text-black hover:bg-white/90',
        className,
      )}
    >
      {title}
    </span>
  )
}
