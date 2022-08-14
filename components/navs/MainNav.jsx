import Link from "next/link"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
export default function nav() {

  const { theme, setTheme } = useTheme()
  console.log(theme)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <header>
      <Link href="/" ><a className="p-3">Home</a></Link>
      <button onClick={() => setTheme(theme === "light" ? 'dark' : 'light')} className="p-3 rounded dark:hover:ring-red-300 hover:ring-2 hover:ring-gray-300" aria-label="Toggle Dark Mode">toggle theme</button>
    </header>
  )
}
