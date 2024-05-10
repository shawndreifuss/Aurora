'use client'

import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import TypewriterComponent from 'typewriter-effect'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const LandingHero = () => {
  const { isSignedIn } = useAuth()

  return (
    <div className="text-white font-bold py-36 text-center space-y-5 ">
      <div className="bg-white opacity-30 backdrop-blur-lg rounded-lg"/>
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold text-orange-500">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          <TypewriterComponent
            options={{
              strings: [
                'Chatbot',
                'Photo Generation',
                'Music Generation',
                'Code Generation',
                'Video Generation',
              ],
              autoStart: true,
            }}
          />
        </div>
      </div>
      <div className='flex justify-center align-center '>
<Image className='animate-pulse' alt='' width={200} height={200} src={'/all.png'} />
</div>
      <div className="text-sm md:text-xl font-light text-white">
        Create content using AI 10x faster.
      </div>

      <div>
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button
          variant={'premium'}
            className="md:text-lg md:p6 rounded-full font-semibold "
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>

      <div className="text-white text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  )
}

export default LandingHero

