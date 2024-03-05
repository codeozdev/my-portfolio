'use client'

import Left from '@/components/Left'
import Hero from '@/components/Hero'


export default function Home() {
  return (
    <main className='grid grid-cols-4 container mx-auto'>
      <Left />
      <Hero />
    </main>
  )
}
