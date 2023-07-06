import { NextResponse } from 'next/server'
import getColors from 'get-image-colors'
import fetch from 'node-fetch'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const imageUrl = searchParams.get('imageUrl')
  if (imageUrl) {
    const response = await fetch(imageUrl)
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const colors = await getColors(buffer, 'image/jpeg')
    const dominantColor = colors[0].hex()
    return NextResponse.json({ dominantColor })
  }

  return NextResponse.json({ dominantColor: '#121212' })
}
