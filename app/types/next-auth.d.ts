import { DefaultSession, Account as NextAuthAccount } from 'next-auth'
import { JWT as NextAuthJWT } from 'next-auth/jwt'

declare module 'next-auth' {
  // eslint-disable-next-line no-unused-vars
  interface Session extends DefaultSession {
    accessToken?: string
    error?: string
  }
  // eslint-disable-next-line no-unused-vars
  interface Account extends NextAuthAccount {
    expires_at: number
  }
}

declare module 'next-auth/jwt' {
  // eslint-disable-next-line no-unused-vars
  interface JWT extends NextAuthJWT {
    accessToken?: string
    refreshToken?: string
    accessTokenExpires?: number
    error?: string
    // eslint-disable-next-line no-undef
    user?: Session['user']
  }
}
