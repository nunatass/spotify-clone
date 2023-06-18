import React from 'react'
import RoundedButton from '../../button/rounded-button'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import HorizontalCard from './horizontal-card'
import VerticalCard from './vertical-card'

export default function Main() {
  return (
    <main className=" h-full w-full overflow-y-scroll rounded-lg bg-gradient-to-b from-purple-400  via-primary to-primary px-8 py-6 text-white">
      <div className="flex gap-x-4 ">
        <RoundedButton icon={ChevronLeftIcon} backgroundColor="primary" />
        <RoundedButton icon={ChevronRightIcon} backgroundColor="primary" />
      </div>
      <span className="mt-4 inline-block text-3xl font-bold ">
        Good Evening
      </span>
      <div className="mt-8 grid w-full grid-cols-3  gap-5 ">
        <HorizontalCard
          coverUrl="https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad"
          title="Her Loss"
        />
        <HorizontalCard
          coverUrl="https://i.scdn.co/image/ab67616d0000b273a90d170c61fb7d063d47161d"
          title="Nothing Was The Same"
        />
        <HorizontalCard
          coverUrl="https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f"
          title="Certified Lover Boy"
        />

        <HorizontalCard
          coverUrl="https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad"
          title="Her Loss"
        />
        <HorizontalCard
          coverUrl="https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad"
          title="Her Loss"
        />
        <HorizontalCard
          coverUrl="https://i.scdn.co/image/ab67616d0000b273c7ea04a9b455e3f68ef82550"
          title="Take Care"
        />
      </div>

      <span className="mt-4 inline-block text-xl font-bold hover:underline ">
        Jump back in
      </span>

      <div className="mt-4 flex w-full flex-wrap gap-5 ">
        <VerticalCard
          coverUrl="https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad"
          title="Her Loss"
          artist="Drake"
        />
        <VerticalCard
          coverUrl="https://i.scdn.co/image/ab67616d0000b273a90d170c61fb7d063d47161d"
          title="Nothing Was The Same"
          artist="Drake"
        />
        <VerticalCard
          coverUrl="https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f"
          title="Certified Lover Boy"
          artist="Drake"
        />

        <VerticalCard
          coverUrl="https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad"
          title="Her Loss"
          artist="Drake"
        />
        <VerticalCard
          coverUrl="https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad"
          title="Her Loss"
          artist="Drake"
        />
        <VerticalCard
          coverUrl="https://i.scdn.co/image/ab67616d0000b273c7ea04a9b455e3f68ef82550"
          title="Take Care"
          artist="Drake"
        />
      </div>
    </main>
  )
}
