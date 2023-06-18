import {
  PlayCircleIcon,
  ArrowPathRoundedSquareIcon,
  ForwardIcon,
  BackwardIcon,
} from '@heroicons/react/24/solid'
import Slider from '../slider'

export default function PlayerController() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-2  text-white/70">
      <div className="flex w-full items-center justify-center gap-x-4 ">
        <ArrowPathRoundedSquareIcon className="h-6 w-6  cursor-pointer hover:text-white" />
        <BackwardIcon className="h-6 w-6 cursor-pointer hover:text-white" />
        <PlayCircleIcon className="h-10 w-10 cursor-pointer text-white/95 transition-all hover:scale-110 hover:text-white" />
        <ForwardIcon className="h-6 w-6 cursor-pointer hover:text-white" />
        <ArrowPathRoundedSquareIcon className="h-6 w-6 cursor-pointer hover:text-white" />
      </div>
      <div className="flex w-full items-center justify-center gap-x-4 ">
        <span className="text-xs">0:49</span>
        <Slider />
        <span className="text-xs">3:01</span>
      </div>
    </div>
  )
}
