import type { Metadata } from 'next'
import { Inter, Quicksand } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand'
})

export const metadata: Metadata = {
  title: 'Mindful Balance - Your Wellness Journey',
  description: 'Discover inner peace and mental wellness through our evidence-based approaches',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${inter.className} ${quicksand.variable}`}>
        {children}
      </body>
    </html>
  )
} 