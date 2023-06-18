import {
  MicrophoneIcon,
  QueueListIcon,
  SpeakerWaveIcon,
} from '@heroicons/react/24/outline'
import Slider from '../slider'

export default function PlayerSettings() {
  return (
    <div
      className={
        'flex w-full max-w-[250px] items-center gap-x-4 text-neutral-400'
      }
    >
      <MicrophoneIcon className="h-8 w-8 cursor-pointer hover:text-white" />
      <QueueListIcon className="h-8 w-8 cursor-pointer hover:text-white" />
      <SpeakerWaveIcon className="h-8 w-8 cursor-pointer hover:text-white" />
      <Slider defaultValue={[50]} width={100} />
    </div>
  )
}
