import Link from 'next/link'
import React from 'react'

export const Navbar = () => (
  <>
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
        <Link href="/">
          <a className="text-lg font-bold font-display inline-block mr-4 py-2 text-primary flex items-center justify-center">
            <img
              src="/logo.svg"
              className="w-20 mr-8"
              alt="Almost Purrfect Games Logo"
            />
            <div className="flex flex-col justify-between">
              <h1 className="tracking-widest">Almost Purrfect Games</h1>
              <h2 className="text-xs py-2 font-normal tracking-tight">
                Indie video game development studio.
              </h2>
            </div>
          </a>
        </Link>
      </div>
    </nav>
  </>
)
