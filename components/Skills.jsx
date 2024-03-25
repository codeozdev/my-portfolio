import Image from 'next/image'

export default function Skills() {
  return (
    <div className='start text-center xl:text-start' id='skills'>
      <p className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand uppercase'>What I do? </p>
      <h1>Here are some of my expertise</h1>
      <div className=''>
        {/* FRONTEND */}
        <h1 className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand uppercase mt-10 mb-3'>
          FRONTEND
        </h1>
        <div className='grid grid-cols-3 gap-1 sm:gap-3 place-items-center xl:flex xl:gap-3 xl:items-center'>
          <div className='shadow-2xl text-center p-5 myStyle'>
            <Image src={'/html.png'} alt='html' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>HTML</p>
          </div>
          <div className='shadow-2xl text-center p-5 myStyle'>
            <Image src={'/javascript.png'} alt='javascript' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>JavaScript</p>
          </div>
          <div className='shadow-2xl text-center p-5 myStyle'>
            <Image src={'/typescript.png'} alt='typescript' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>TypeScript</p>
          </div>
          <div className='shadow-2xl text-center p-5 myStyle'>
            <Image src={'/react.png'} alt='react' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>React</p>
          </div>
          <div className='shadow-2xl shadow-blue-500 text-center p-5 myStyle border-b-2 border-blue-500'>
            <Image src={'/next.png'} alt='next' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>Nextjs</p>
          </div>
          <div className='shadow-2xl text-center p-5 myStyle'>
            <Image src={'/redux.png'} alt='redux' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>Redux</p>
          </div>
        </div>
        {/* STYLE */}
        <h1 className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand uppercase mt-10 mb-3'>
          styling
        </h1>
        <div className='grid grid-cols-3 gap-1 sm:gap-3 place-items-center xl:flex xl:gap-3 xl:items-center'>
          <div className='shadow-2xl shadow-blue-500 text-center p-5 border-b-2 border-blue-500 myStyle'>
            <Image src={'/tailwind.png'} alt='tailwind' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>Tailwind</p>
          </div>
          <div className='shadow-2xl text-center p-5 myStyle'>
            <Image src={'/bootstrap.png'} alt='bootstrap' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>Bootstrap</p>
          </div>
          <div className='shadow-2xl text-center p-5 myStyle'>
            <Image src={'/mui.png'} alt='material' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>Material</p>
          </div>
          <div className='shadow-2xl text-center p-5 myStyle'>
            <Image src={'/semantic.png'} alt='semantic' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>Semantic</p>
          </div>
          <div className='shadow-2xl text-center p-5 myStyle'>
            <Image src={'/daisy.png'} alt='daisy' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>Daisy UI</p>
          </div>
          <div className='shadow-2xl text-center p-5 myStyle'>
            <Image src={'/sass.png'} alt='sass' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>Sass</p>
          </div>
        </div>
        {/* BACKEND */}
        <h1 className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand uppercase mt-10 mb-3'>
          BACKEND
        </h1>
        <div className='grid grid-cols-3 gap-1 sm:gap-3 place-items-center xl:flex xl:gap-3 xl:items-center'>
          <div className='shadow-2xl shadow-blue-500 text-center p-5 border-b-2 border-blue-500 myStyle'>
            <Image src={'/nodejs.png'} alt='nodejs' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>Nodejs</p>
          </div>
          <div className='shadow-2xl text-center p-5 myStyle'>
            <Image src={'/mongodb.png'} alt='mongodb' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>MongoDB</p>
          </div>
          <div className='shadow-2xl text-center p-5 myStyle'>
            <Image src={'/nextauth.png'} alt='nextauth' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>NextAuth</p>
          </div>
          <div className='shadow-2xl text-center p-5 myStyle col-start-2 xl:col-start-1'>
            <Image src={'/jwt.png'} alt='jwt' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>JWT</p>
          </div>
        </div>
        {/* EXTRA */}
        <h1 className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand uppercase mt-10 mb-3'>
          EXTRA
        </h1>
        <div className='grid grid-cols-3 gap-1 sm:gap-3 place-items-center xl:flex xl:gap-3 xl:items-center'>
          <div className='shadow-2xl text-center p-5 myStyle'>
            <Image src={'/c.png'} alt='c#' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>C#</p>
          </div>
          <div className='shadow-2xl text-center p-5 myStyle'>
            <Image src={'/python.png'} alt='python' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>Python</p>
          </div>
          <div className='shadow-2xl text-center p-5 myStyle'>
            <Image src={'/git.png'} alt='git' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>Git</p>
          </div>
          <div className='shadow-2xl text-center p-5 myStyle'>
            <Image src={'/figma.png'} alt='figma' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>Figma</p>
          </div>
          <div className='shadow-2xl shadow-blue-500 text-center p-5 myStyle border-b-2 border-blue-500'>
            <Image src={'/linux.png'} alt='linux' width={200} height={200} quality={100} />
            <p className='font-bold text-sm text-neutral-600'>Linux</p>
          </div>
        </div>
      </div>
    </div>
  )
}
