import SpotifyWebApi from 'spotify-web-api-node'

const scopes = [
  'playlist-modify-public',
  'playlist-modify-private',
  'playlist-read-collaborative',
  'playlist-read-private',
  'user-read-playback-position',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-follow-read',
  'user-library-read',
  'user-read-private',
  'user-top-read',
  'user-read-email',
  'app-remote-control',
  'streaming',
]

const params = {
  scope: scopes.join(','),
}

const queryParamString = new URLSearchParams(params)

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
})

export default spotifyApi

export { LOGIN_URL }
