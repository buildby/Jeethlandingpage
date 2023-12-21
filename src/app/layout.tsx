import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '../components/footer'
import { Providers } from '../store/provider';

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: "Jeeth | Provide instant access to the earned wages of your workforce.",
  description: "The world's first solution tailored for employee transportation service businesses, seamlessly integrating cutting-edge technology and financial innovations within a single platform.",
  openGraph: {
    images: ["https://www.jeeth.co.in/opengraph-image.png"]
  },
  keywords: ["Earned wage access", "Credit for blue collar workforce", "Fintech", "Employee Transportation Services", "Instant Finance", "Software product for ETS", "ETS", "Finance", "Marketplace", "Vendor Finance"]
};

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
