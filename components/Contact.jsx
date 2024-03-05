import Link from "next/link";
import { MdOutgoingMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className='start'>
      <p className='text-[10px] font-thin text-neutral-600 tracking-[0.35em] font-sand uppercase'>get in touch</p>
      <h1 className='font-playFair my-4 text-lg font-semibold text-neutral-700 tracking-[0.25em] uppercase'>Contact</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <MdOutgoingMail size={40} />
          <p>ozudev@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href={'/https://github.com/codeozdev'} >
            <FaGithub size={30} />
          </Link>
          <Link href={'/https://twitter.com/codeozdev'} >
            <FaTwitter size={30} />
          </Link>
        </div>
      </div>
    </div>

  )
}
