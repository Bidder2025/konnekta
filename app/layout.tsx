import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Konnekta',
  description: 'Profesjonell telefonkommunikasjon som skaper vekst og resultater for din bedrift',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
