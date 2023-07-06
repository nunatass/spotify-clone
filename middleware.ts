import { getToken } from 'next-auth/jwt'
import { NextResponse, NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const token = await getToken({
    req: request,
    secret: process.env.JWT_SECRET,
  })

  if (pathname.includes('api/auth') || token) {
    return NextResponse.next()
  }
  if (!token && pathname !== '/') {
    console.error('No token')
    //  return NextResponse.next()
  }
}
