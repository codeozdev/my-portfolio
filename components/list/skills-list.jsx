'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { frontend, style, backend, extra } from '@/skilldb'
import SkillsItem from '@/components/item/skills-item'

export default function SkillsList() {
  useEffect(() => {
    AOS.init()
  })

  return (
    <div className='start text-center xl:text-start' id='skills'>
      <p className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand uppercase'>
        What I do?{' '}
      </p>
      <h1>Here are some of my expertise</h1>
      <div>
        {/* FRONTEND */}
        <SkillsItem name='FRONTEND' items={frontend} />

        {/* STYLE */}
        <SkillsItem name='STYLING' items={style} />

        {/* BACKEND */}
        <SkillsItem name='BACKEND' items={backend} />

        {/* EXTRA */}
        <SkillsItem name='EXTRA' items={extra} />
      </div>
    </div>
  )
}
