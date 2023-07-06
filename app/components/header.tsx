'use client'

import RoundedButton from './button/rounded-button'
import { cn } from '@/app/lib'
import { signIn, useSession } from 'next-auth/react'
import { User, NavArrowLeft, NavArrowRight } from 'iconoir-react'
import { useCallback, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [backgroundOpacity, setBackgroundOpacity] = useState(0)
  const { data: session } = useSession()

  const pathname = usePathname()
  const pageId = pathname.split('/')[1]

  const handleScroll = useCallback(
    (e: any) => {
      const scrollY = e.target.scrollTop

      const opacity = Math.min(scrollY / 350, 1)
      setBackgroundOpacity(opacity)
    },
    [pathname],
  )

  useEffect(() => {
    const home = document.getElementById('home')
    const page = document.getElementById(`page-${pageId}`)
    if (home) {
      home.addEventListener('scroll', handleScroll)

      return () => {
        home.removeEventListener('scroll', handleScroll)
      }
    }

    if (page) {
      page.addEventListener('scroll', handleScroll)

      return () => {
        page.removeEventListener('scroll', handleScroll)
      }
    }
  }, [handleScroll])

  return (
    <div
      className={cn(
        `h-18 absolute  left-0 top-0 z-30  w-full rounded-t-lg bg-primary px-8 py-4 transition-colors duration-100`,
      )}
      style={{ background: `rgba(18, 18, 18, ${backgroundOpacity})` }}
    >
      <div className="flex  h-full items-center justify-between ">
        <div className="flex gap-x-4 ">
          <RoundedButton icon={NavArrowLeft} backgroundColor="primary" />
          <RoundedButton icon={NavArrowRight} backgroundColor="primary" />
        </div>
        {!session ? (
          <button
            className="flex h-8 items-center justify-center rounded-full bg-white px-8 py-6 text-black opacity-90 hover:scale-105 hover:opacity-100"
            onClick={() => signIn('spotify', { callbackUrl: '/' })}
          >
            <span className="text-base font-semibold drop-shadow-md">
              Log in
            </span>
          </button>
        ) : (
          <div>
            <RoundedButton
              className="text-white"
              icon={User}
              backgroundColor="primary"
            />
          </div>
        )}
      </div>
    </div>
  )
}
