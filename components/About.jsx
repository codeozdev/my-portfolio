import HeadComponent from './dynamic-component/head'

export default function About() {
  return (
    <div className='start text-center lg:text-start' id='about'>
      <p className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand'>
        ABOUT US{' '}
      </p>
      <HeadComponent title='WHO AM I?' />
      <p className='tracking-[0.10em] leading-7 text-sm md:text-base font-sand text-neutral-600 select-none'>
        <strong className='font-extrabold text-base tracking-normal block md:mb-2'>
          Hi I{`'`}m Oguzhan Uguz{' '}
        </strong>
        I have been working in both frontend and backend development for 1.5
        years, and I am passionate about keeping up with industry inn ovations
        and adapting to new technologies. I am confident in my ability to solve
        problems and produce efficient solutions.
      </p>
    </div>
  )
}
