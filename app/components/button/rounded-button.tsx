import { cn } from '@/app/lib'

type RoundedButtonProps = {
  onClick?: () => void
  icon: any
  backgroundColor: string
}

export default function RoundedButton({
  onClick,
  icon: Icon,
  backgroundColor,
}: RoundedButtonProps) {
  return (
    <div
      className={cn(
        `h-8 w-8 rounded-full bg-primary p-1 hover:bg-neutral-400/40`,
        ' flex items-center justify-center text-neutral-400 transition hover:text-white ',
      )}
    >
      <Icon className="h-6 w-6" />
    </div>
  )
}
