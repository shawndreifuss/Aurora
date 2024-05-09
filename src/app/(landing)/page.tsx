import LandingContent from '@/components/ai-landing/landing-content';
import LandingHero from '@/components/ai-landing/landing-hero';
import LandingNavbar from '@/components/ai-landing/landing-navbar';
import { buttonVariants } from '@/components/ui/button';

import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  )
}

export default HomePage