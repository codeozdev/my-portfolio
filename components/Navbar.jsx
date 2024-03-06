'use client'

import { Link } from 'react-scroll'

const navLinks = [
  { name: 'Home', href: '/', to: 'home' },
  { name: 'About', href: '/about', to: 'about' },
  { name: 'Skills', href: '/skills', to: 'skills' },
  { name: 'Contact', href: '/contact', to: 'contact' },
]

export default function Navbar() {

  return (
    <div className='flex flex-col items-center justify-center gap-5 mt-6 font-sand tracking-widest'>
      {navLinks.map((link) => {
        return (
          <Link
            to={link.to} key={link.name} spy={true} smooth={true} offset={30} duration={500}
            className={`hover:text-blue-500 hover:underline underline-offset-8`}>
            {link.name}
          </Link>
        )
      })}
    </div>
  )
}
