'use client'

import { SessionProvider } from 'next-auth/react'
import { notFound, usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}
const validPageId = ['album', 'artist', 'playlist', 'search', '']

export const NextAuthProvider = ({ children }: Props) => {
  const pathname = usePathname()
  const pageId = pathname.split('/')[1]

  if (!validPageId.includes(pageId)) {
    notFound()
  }
  return <SessionProvider>{children}</SessionProvider>
}
