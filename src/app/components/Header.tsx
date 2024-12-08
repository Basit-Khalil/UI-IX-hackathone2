import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <main className="bg-white flex flex-col items-center w-full">
    <header className="bg-white w-full h-24 relative">
      <div className="bg-neutral-100 h-9 flex items-center justify-between px-12">
        <img src="/logo.png" alt="Logo" className="w-6 h-6" />
        <div className="flex items-center space-x-4 text-xs font-medium text-[#111111]">
        <Link href="/store"> <span className="header-border text-black " >Find a Store </span> </Link>
          <span>|</span>
          <Link href="/help"> <span className="header-border text-black " >Help </span> </Link>
          <span>|</span>
          <Link href="/join"> <span className="header-border text-black " >Join Us </span> </Link>
          <span>|</span>
          <Link href="/signup" > <span className="text-black p-4" >Sign In </span> </Link>
        </div>
      </div>
      <nav className="flex items-center justify-center h-[60px] bg-white">
        <ul className="flex space-x-8 text-sm font-medium text-[#111111]">
          <li>New & Featured</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sale</li>
          <li>SNKRS</li>
        </ul>
        <div className="absolute right-12 flex items-center space-x-4">
          <div className="relative flex items-center bg-neutral-100 rounded-full px-4 py-2">
            <img
              src='/search-icon.png'
              alt="Search Icon"
              className="w-6 h-6"
            />
            <span className="text-sm text-[#cccccc]">Search</span>
          </div>
          <img
            src='/Vector.png'
            alt="Cart Icon"
            className="w-6 h-6"
          />
        </div>
      </nav>
    </header>
    </main>
  )
}

export default Header
