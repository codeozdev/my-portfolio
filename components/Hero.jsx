import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'

const myData = {
  title: 'Welcome to the world of full-stack development!',
  fullName: 'Oguzhan Uguz',
  statu: 'I am working on Full-stack projects',
}

export default function Right() {
  return (
    <div className='col-span-3'>
      <div className='relative'>
        <Image
          src='/right.avif'
          alt='foto'
          width={1920}
          height={1080}
          className='h-screen w-full object-cover pointer-events-none opacity-70'
          quality={100}
        />
        <h2 className='font-sand text-4xl absolute top-1/3 left-20 font-semibold text-neutral-600'>
          <Typewriter
            options={{
              strings: [`${myData.title}`, `My name is ${myData.fullName}`, `${myData.statu}`],
              pauseFor: 1500,
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>
      <About />
      <Skills />
      <Contact />
    </div>
  )
}
