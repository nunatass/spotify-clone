'use client'

import { cn } from '@/app/lib'
import * as RadixSlider from '@radix-ui/react-slider'
import { SliderProps as RadixSliderProps } from '@radix-ui/react-slider'
import { useSession } from 'next-auth/react'

type SliderProps = RadixSliderProps & {
  width?: number
}

export default function Slider(props: SliderProps) {
  const { data: session } = useSession()

  return (
    <RadixSlider.Root
      className={cn(
        'group relative flex h-6 w-full  items-center',
        props.width ? `max-w-[${props.width}px]` : 'max-w-[520px]',
        session && 'cursor-pointer',
      )}
      {...props}
    >
      <RadixSlider.Track className="relative h-1 flex-grow rounded-full bg-neutral-500">
        <RadixSlider.Range className="absolute h-full rounded-full bg-white transition-colors group-hover:bg-green-500" />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className={cn(
          'hidden h-3 w-3 rounded-full bg-white drop-shadow-md  focus:outline-none ',
          session && 'group-hover:block',
        )}
        aria-label="controller slide"
      />
    </RadixSlider.Root>
  )
}
