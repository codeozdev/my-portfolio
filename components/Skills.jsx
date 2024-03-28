import Image from 'next/image'

export default function Skills() {
  return (
    <div className='start text-center xl:text-start' id='skills'>
      <p className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand uppercase'>
        What I do?{' '}
      </p>
      <h1>Here are some of my expertise</h1>
      <div>
        {/* FRONTEND */}
        <h1 className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand uppercase mt-10 mb-3'>
          FRONTEND
        </h1>
        <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1 w-full h-full'>
          <div className='icons-div'>
            <Image
              src={'/frontend/html.png'}
              alt='html'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>HTML</p>
          </div>

          <div className='icons-div'>
            <Image
              src={'/frontend/javascript.png'}
              alt='javascript'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>JavaScript</p>
          </div>

          <div className='icons-div'>
            <Image
              src={'/frontend/typescript.png'}
              alt='typescript'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>TypeScript</p>
          </div>

          <div className='icons-div'>
            <Image
              src={'/frontend/react.png'}
              alt='react'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>React</p>
          </div>

          <div className='icons-div lg:!shadow-red-500'>
            <Image
              src={'/frontend/next.png'}
              alt='next'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>Nextjs</p>
          </div>

          <div className='icons-div'>
            <Image
              src={'/frontend/redux.png'}
              alt='redux'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>Redux</p>
          </div>
        </div>

        {/* STYLE */}
        <h1 className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand uppercase mt-10 mb-3'>
          styling
        </h1>
        <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1 w-full h-full'>
          <div className='icons-div lg:!shadow-red-500'>
            <Image
              src={'/style/tailwind.png'}
              alt='tailwind'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>Tailwind</p>
          </div>

          <div className='icons-div'>
            <Image
              src={'/style/bootstrap.png'}
              alt='bootstrap'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>Bootstrap</p>
          </div>

          <div className='icons-div'>
            <Image
              src={'/style/mui.png'}
              alt='material'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>Material</p>
          </div>

          <div className='icons-div'>
            <Image
              src={'/style/semantic.png'}
              alt='semantic'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>Semantic</p>
          </div>

          <div className='icons-div'>
            <Image
              src={'/style/daisy.png'}
              alt='daisy'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>Daisy</p>
          </div>

          <div className='icons-div'>
            <Image
              src={'/style/sass.png'}
              alt='sass'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>Sass</p>
          </div>
        </div>

        {/* BACKEND */}
        <h1 className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand uppercase mt-10 mb-3'>
          BACKEND
        </h1>
        <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1 w-full h-full'>
          <div className='icons-div'>
            <Image
              src={'/backend/nodejs.png'}
              alt='nodejs'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>Nodejs</p>
          </div>

          <div className='icons-div'>
            <Image
              src={'/backend/mongodb.png'}
              alt='mongodb'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>MongoDB</p>
          </div>

          <div className='icons-div'>
            <Image
              src={'/backend/nextauth.png'}
              alt='nextauth'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>NextAuth</p>
          </div>

          <div className='icons-div'>
            <Image
              src={'/backend/jwt.png'}
              alt='jwt'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>JWT</p>
          </div>
        </div>

        {/* EXTRA */}
        <h1 className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand uppercase mt-10 mb-3'>
          EXTRA
        </h1>
        <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1 w-full h-full'>
          <div className='icons-div'>
            <Image
              src={'/extra/rust.png'}
              alt='rust'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>Rust</p>
          </div>

          <div className='icons-div'>
            <Image
              src={'/extra/c.png'}
              alt='c#'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>C#</p>
          </div>

          <div className='icons-div'>
            <Image
              src={'/extra/python.png'}
              alt='python'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>Python</p>
          </div>

          <div className='icons-div lg:!shadow-red-500'>
            <Image
              src={'/extra/linux.png'}
              alt='linux'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>Linux</p>
          </div>

          <div className='icons-div'>
            <Image
              src={'/extra/git.png'}
              alt='git'
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>Git</p>
          </div>
        </div>
      </div>
    </div>
  )
}
