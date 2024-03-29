import Link from 'next/link'
import { MdOutgoingMail } from 'react-icons/md'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className='start text-center sm:text-start' id='contact'>
      <p className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand uppercase'>get in touch</p>
      <h1>Contact</h1>
      <div className='flex items-center justify-between sm:w-[80%]'>
        <div className='flex flex-col sm:flex-row items-center sm:gap-3'>
          <MdOutgoingMail size={40} />
          <p>ozudev@gmail.com</p>
        </div>
        <div className='flex flex-row items-center gap-4'>
          <Link href={'https://github.com/codeozdev'} target='_blank'>
            <FaGithub size={30} />
          </Link>
          <Link href={'https://twitter.com/codeozdev'} target='_blank'>
            <FaTwitter size={30} />
          </Link>
          <Link href={'https://www.linkedin.com/in/oguzhanuguz/'} target='_blank'>
            <FaLinkedin size={30} />
          </Link>
        </div>
      </div>
    </div>
  )
}
