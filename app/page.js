'use client'

import Left from '@/components/Left'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className='sm:grid grid-cols-4 container mx-auto' id='home'>
      <Left />
      <Hero />
    </main>
  )
}
