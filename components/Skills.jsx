import Image from 'next/image'

export default function Skills() {
  return (
    <div className='start text-center sm:text-start' id='skills'>
      <p className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand uppercase'>What I do? </p>
      <h1>Here are some of my expertise</h1>
      <div className=''>
        {/* FRONTEND */}
        <h1 className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand uppercase mt-10 mb-3'>
          FRONTEND
        </h1>
        <div className='grid grid-cols-3 sm:flex gap-3 items-center'>
          <div className='shadow-2xl text-center p-5'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/html.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>HTML</p>
          </div>
          <div className='shadow-2xl text-center p-5'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/javascript.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>JavaScript</p>
          </div>
          <div className='shadow-2xl text-center p-5'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/typescript.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>TypeScript</p>
          </div>
          <div className='shadow-2xl text-center p-5'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/react.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>React</p>
          </div>
          <div className='shadow-2xl shadow-blue-500 text-center p-5 border-b-2 border-blue-500'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/next.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>Nextjs</p>
          </div>
          <div className='shadow-2xl text-center p-5'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/redux.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>Redux</p>
          </div>
        </div>
        {/* STYLE */}
        <h1 className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand uppercase mt-10 mb-3'>
          styling
        </h1>
        <div className='grid grid-cols-3 sm:flex gap-3 items-center'>
          <div className='shadow-2xl shadow-blue-500 text-center p-5 border-b-2 border-blue-500'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/tailwind.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>Tailwind</p>
          </div>
          <div className='shadow-2xl text-center p-5'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/bootstrap.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>Bootstrap</p>
          </div>
          <div className='shadow-2xl text-center p-5'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/material.webp'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>Material UI</p>
          </div>
          <div className='shadow-2xl text-center p-5'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/semantic.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>Semantic</p>
          </div>
          <div className='shadow-2xl text-center p-5'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/daisy.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>Daisy UI</p>
          </div>
          <div className='shadow-2xl text-center p-5'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/sass.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>Sass CSS</p>
          </div>
        </div>
        {/* BACKEND */}
        <h1 className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand uppercase mt-10 mb-3'>
          BACKEND
        </h1>
        <div className='grid grid-cols-3 sm:flex gap-3 items-center'>
          <div className='shadow-2xl shadow-blue-500 text-center p-5 border-b-2 border-blue-500'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/nodejs.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>Nodejs</p>
          </div>
          <div className='shadow-2xl text-center p-5'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/mongodb.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>MongoDB</p>
          </div>
          <div className='shadow-2xl text-center p-5'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/nextauth.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>NextAuth</p>
          </div>
          <div className='shadow-2xl text-center p-5'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/jwt.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>JWT</p>
          </div>
        </div>
        {/* EXTRA */}
        <h1 className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand uppercase mt-10 mb-3'>
          EXTRA
        </h1>
        <div className='grid grid-cols-3 sm:flex gap-3 items-center'>
          <div className='shadow-2xl text-center p-5'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/c.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>C#</p>
          </div>
          <div className='shadow-2xl text-center p-5'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/python.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>Python</p>
          </div>
          <div className='shadow-2xl text-center p-5'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/git.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>Git</p>
          </div>
          <div className='shadow-2xl text-center p-5'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/figma.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>Figma</p>
          </div>
          <div className='shadow-2xl shadow-blue-500 text-center p-5 border-b-2 border-blue-500'>
            <div className='sm:w-[100px] sm:h-[100px]'>
              <Image src={'/linux.png'} alt='' width={200} height={200} quality={100} />
            </div>
            <p className='font-bold text-sm mt-3 text-neutral-600'>Linux</p>
          </div>
        </div>
      </div>
    </div>
  )
}
