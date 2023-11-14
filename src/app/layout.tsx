import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '../components/footer'
import { Providers } from '../store/provider';

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: 'Jeeth',
  description: 'Ye jeeth bharat ki!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
