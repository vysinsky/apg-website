import React from 'react'
import Link from 'next/link'

export default function FastcubePage() {
  return (
    <div className="flex flex-col flex-1 min-h-full justify-between items-center text-center">
      <h1 className="font-display text-3xl px-10 pt-10 pb-2 md:py-14">
        <Link href="/">
          <a className="text-fcDark underline">Almost Purrfect Games</a>
        </Link>
        &nbsp;-&nbsp;
        <span className="text-fcGreen">FastCube</span>
      </h1>
      <img
        src="/fastcube/logo.jpg"
        alt="Almost Purrfect Games Logo"
        className="w-1/2 md:w-1/4 lg:w-1/6 max-w-md"
        width="512"
        height="512"
      />
      <a
        className="w-1/2 md:w-1/4 lg:w-1/6 max-w-md"
        target="_blank"
        rel="noreferrer nofollow"
        href="https://play.google.com/store/apps/details?id=games.almost_purrfect.fastcube&utm_source=apg-website&utm_campaign=apg-website&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
      >
        <img
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        />
      </a>
      <small className="text-xs">
        Google Play and the Google Play logo are trademarks of Google LLC.
      </small>
      <h2 className="font-display text-xl px-10 pt-2 pb-10 md:py-14">
        Infinite runner game for Android.
      </h2>
      <section className="flex flex-wrap justify-around">
        <img
          className="max-w-sm p-4"
          src="/fastcube/main.jpg"
          alt="FastCube Main menu screen"
        />
        <img
          className="max-w-sm p-4"
          src="/fastcube/gameplay.jpg"
          alt="FastCube Gameplay screen"
        />
        <img
          className="max-w-sm p-4"
          src="/fastcube/pause.jpg"
          alt="FastCube Pause menu"
        />
        <img
          className="max-w-sm p-4"
          src="/fastcube/game-over.jpg"
          alt="FastCube Game over screen"
        />
      </section>
      <h3 className="font-display text-md px-10 py-2">
        <Link href="/games/fastcube/privacy">
          <a>Privacy policy</a>
        </Link>
      </h3>
    </div>
  )
}
