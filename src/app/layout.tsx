import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import ProModal from '@/components/pro-modal'
import ToasterProvider from '@/components/toaster-provider'
import CrispChat from '@/components/crisp-chat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aurora',
  description: 'AI Platform',
  icons: {
    icon: '/watcher.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
       
          {children}

          <ProModal />
          <ToasterProvider />
          <CrispChat />
        </body>
      </html>
    </ClerkProvider>
  )
}
