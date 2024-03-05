'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className='flex flex-col items-center justify-center gap-5 mt-6 font-sand tracking-widest'>
      {navLinks.map((link) => {
        const isActive = pathname === link.href

        return (
          <Link
            href={link.href}
            key={link.name}
            className={`hover:text-blue-500 hover:underline underline-offset-8 ${isActive ? 'underline underline-offset-8 text-blue-500' : ''}`}>
            {link.name}
          </Link>
        )
      })}
    </div>
  )
}
