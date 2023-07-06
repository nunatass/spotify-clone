import { cn } from '@/app/lib'

type RoundedButtonProps = {
  onClick?: () => void
  icon: any
  backgroundColor: string
  className?: string
}

export default function RoundedButton({
  onClick,
  icon: Icon,
  backgroundColor,
  className,
}: RoundedButtonProps) {
  return (
    <div
      className={cn(
        `h-8 w-8 rounded-full bg-primary p-1 hover:bg-primary/40`,
        ' flex items-center justify-center text-neutral-400 transition hover:scale-105 hover:text-white ',
        backgroundColor && `bg-${backgroundColor}`,
        className,
      )}
    >
      <Icon className="h-6 w-6" />
    </div>
  )
}
