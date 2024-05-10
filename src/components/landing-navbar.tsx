'use client'

import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const font = Montserrat({ weight: '600', subsets: ['latin'] })

const LandingNavBar = () => {
  const { isSignedIn } = useAuth()

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-20 w-20 mr-4">
          <Image fill alt="Logo" src="/aurora-logo.png" />
        </div>
        <h1 className={cn('text-transparent text-[3rem] bg-clip-text bg-gradient-to-r from-[#fe8c00] to-[#f83600] ', font.className)}>
          Aurora
        </h1>
      </Link>

      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default LandingNavBar
