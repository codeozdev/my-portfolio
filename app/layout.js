import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'codeoz | Full-stack Developer',
  description: 'Full-stack Developer in Ankara',
  keywords: 'nextjs, tailwindcss, fullstack, developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
