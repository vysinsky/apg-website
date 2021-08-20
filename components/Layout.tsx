import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import React, { FC } from 'react'

export const Layout: FC = () => (
  <main>
    <div className="flex flex-col flex-grow justify-between items-center text-center">
      <h1 className="font-display text-3xl px-10 py-10 md:py-14">
        Almost Purrfect Games
      </h1>
      <img
        src="/logo.svg"
        alt="Almost Purrfect Games Logo"
        className="w-5/6 max-w-md"
      />
      <h2 className="font-display text-xl px-10 py-10 md:py-14">
        Indie video game development studio
      </h2>
    </div>
    <div className="w-full px-20 py-5 shadow-inner text-center bg-white">
      <h3 className="font-display text-sm">Follow us on social</h3>
      <nav className="flex max-w-2xl justify-between align-middle m-auto pt-10">
        <a
          href="https://www.facebook.com/AlmostPurrfectGames"
          className="block text-fcDark hover:text-fcBlue focus:text-fcBlue transition-colors duration-700"
          title="Follow on FaceBook"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <FontAwesomeIcon className="w-20 h-20" icon={faFacebook} />
        </a>
        <a
          href="https://twitter.com/almost_purrfect"
          className="block text-fcDark hover:text-fcBlue focus:text-fcBlue transition-colors duration-700"
          title="Follow on Twitter"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <FontAwesomeIcon className="w-20 h-20" icon={faTwitter} />
        </a>
        <a
          href="https://www.instagram.com/almost_purrfect_games/"
          className="block text-fcDark hover:text-fcBlue focus:text-fcBlue transition-colors duration-700"
          title="Follow on Instagram"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <FontAwesomeIcon className="w-20 h-20" icon={faInstagram} />
        </a>
      </nav>
    </div>
  </main>
)
