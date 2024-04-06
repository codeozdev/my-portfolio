import Image from 'next/image'

export default function SkillsItem({ name, items }) {
  return (
    <>
      <h1 className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand uppercase mt-10 mb-3'>
        {name}
      </h1>
      <div
        className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1 w-full h-full'
        data-aos='fade-left'>
        {items.map((item) => (
          <div className='icons-div' key={item.id}>
            <Image
              src={item.img}
              alt={item.title}
              width={200}
              height={200}
              quality={100}
              className='icons-img'
            />
            <p className='icons-p'>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  )
}
