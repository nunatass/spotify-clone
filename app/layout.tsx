import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Player from './components/player'
import { cn } from './lib/index'
import { NextAuthProvider } from './components/provide'
import Page from './components/pages'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify',
  description: 'Spotify 2023 clone',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          'flex h-screen w-screen flex-col overflow-hidden',
          inter.className,
        )}
      >
        <NextAuthProvider>
          <Page>
            <div className="relative h-full w-full">
              <Header />
              {children}
            </div>
          </Page>
          <Player />
        </NextAuthProvider>
      </body>
    </html>
  )
}
