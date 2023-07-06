import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  // redirectUri: process.env.SPOTIFY_REDIRECT_URI,
})

function useSpotify() {
  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      if (session.error === 'refreshAccessTokenError') {
        signIn()
      }
      spotifyApi.setAccessToken(session.accessToken!)
    }
  }, [session])
  return spotifyApi
}

export default useSpotify
