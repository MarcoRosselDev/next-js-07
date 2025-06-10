import type { Metadata } from 'next'
import './global.css'
 
// metadatos para cambiar favicon de pendiendo de el tema dark o light
export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: '/trig.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/perfil.jpg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}