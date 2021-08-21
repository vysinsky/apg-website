import Link from 'next/link'
import React from 'react'

export default function IndexPage() {
  return (
    <div className="flex flex-col flex-1 min-h-full justify-between items-center text-center">
      <h1 className="font-display text-3xl px-10 pt-10 pb-2 md:py-14">
        Almost Purrfect Games
      </h1>
      <img
        src="/logo.svg"
        alt="Almost Purrfect Games Logo"
        className="w-1/3 max-w-md"
        width="250"
        height="250"
      />
      <h2 className="font-display text-xl px-10 pt-2 pb-10 md:py-14">
        Indie video game development studio
      </h2>
      <h3 className="font-display text-xl px-10 py-2">Our games:</h3>
      <section className="flex flex-wrap pb-10">
        <Link href="/games/fastcube">
          <a className="max-w-sm p-2">
            <h3 className="font-display text-md py-2">FastCube</h3>
            <img src="/fastcube/logo.jpg" alt="FastCube" />
          </a>
        </Link>
      </section>
    </div>
  )
}
