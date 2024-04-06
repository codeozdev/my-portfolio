import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import About from './About'
import Contact from './Contact'
import SkillsList from '@/components/list/skills-list'

const myData = {
  title: 'Welcome to the world of full-stack development!',
  fullName: 'Oguzhan Uguz',
  state: 'I am working on Full-stack projects',
}

export default function Right() {
  return (
    <div className='sm:col-span-3'>
      <div className='relative'>
        <Image
          src={'/main/1.svg'}
          alt='alt'
          width={100}
          height={100}
          className='xl:bg-gradient-to-tr from-white from-40% to-gray-500 object-cover pointer-events-none opacity-30 sm:opacity-70 w-full sm:w-1/2 h-auto sm:ml-auto xl:rounded-br-xl'
        />
        <h2 className='font-sand text-xl md:text-2xl xl:text-4xl absolute top-1/3 px-8 sm:px-0 sm:left-20 font-semibold text-neutral-600 text-center'>
          <Typewriter
            options={{
              strings: [`${myData.title}`, `My name is ${myData.fullName}`, `${myData.state}`],
              pauseFor: 1500,
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>
      <About />
      <SkillsList />
      <Contact />
    </div>
  )
}
