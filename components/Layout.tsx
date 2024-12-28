import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import React, { FC, PropsWithChildren } from 'react'

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <main className="flex flex-col h-screen overflow-hidden">
    <div className="flex-grow overflow-auto overflow-x-hidden">{children}</div>
    <footer className="w-full flex-none px-2 py-5 shadow-inner text-center bg-white">
      <h3 className="font-display text-sm">Follow us on social</h3>
      <nav className="flex w-full max-w-2xl justify-around align-middle m-auto pt-10 text-6xl">
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
          href="https://x.com/almost_purrfect"
          className="block text-fcDark hover:text-fcBlue focus:text-fcBlue transition-colors duration-700"
          title="Follow on X"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <FontAwesomeIcon className="w-20 h-20" icon={faXTwitter} />
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
    </footer>
  </main>
)
