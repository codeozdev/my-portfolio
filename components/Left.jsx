import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Left() {
  return (
    <div className='col-span-1 bg-[#f2f3f7] sticky top-0 bottom-0 left-0 h-screen hidden sm:block'>
      <div className='flex flex-col items-center justify-center py-14 gap-3'>
        <Image
          src='/foto.png'
          alt='foto'
          width={200}
          height={200}
          className='aspect-square rounded-full object-cover object-top pointer-events-none'
        />
        <h2 className='font-sand font-semibold text-2xl mt-4'>Oguzhan Uguz</h2>
        <p className='text-[10px] uppercase'>
          Fullstack Developer in
          <span className='text-blue-500'> Ankara</span>
        </p>
        <Navbar />
        <div className='bottom-0 absolute my-5 text-xs'>
          <p className='text-neutral-500 text-center px-5'>© Copyright ©2024 All rights reserved</p>
          <p className='text-neutral-500 text-center px-5'>
            Demo Images:{' '}
            <Link href={'https://unsplash.com'} className='text-blue-500' target='_blank'>
              Unsplash.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
