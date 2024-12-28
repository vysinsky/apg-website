import React from 'react'
import Link from 'next/link'

export default function FastcubePrivacyPage() {
  return (
    <div className="flex flex-col flex-1 min-h-full justify-between items-center text-center">
      <h1 className="font-display text-3xl px-10 pt-10 pb-2 md:py-14">
        <Link href="/" className="text-fcDark underline">
          Almost Purrfect Games
        </Link>
        &nbsp;-&nbsp;
        <Link href="/games/fastcube" className="text-fcDark underline">
          FastCube
        </Link>
        &nbsp;-&nbsp;
        <span className="text-fcGreen">Privacy Policy</span>
      </h1>
      <section className="container p-20">
        <p>
          <Link href="/games/fastcube" className="underline text-fcBlue">
            FastCube
          </Link>{' '}
          is developed by{' '}
          <Link href="/" className="underline text-fcBlue">
            Almost Purrfect Games
          </Link>
          . I know privacy and security is important to user of FastCube and
          this Privacy Policy will help you understand what information we
          collect, why we need it, and what we do with it. By using FastCube you
          agree to this policy.
        </p>

        <h2 className="font-display text-xl p-10" id="analytics">
          Analytics
        </h2>
        <p>
          In order to improve FastCube I may collect usage statistics, such as
          the number of users, how often they play etc. FastCube uses Google
          Analytics for Firebase to collect this analytics data and you can{' '}
          <a
            className="underline text-fcBlue"
            href="https://policies.google.com/technologies/partner-sites"
          >
            find more information here
          </a>
          .
        </p>

        <h2
          className="font-display text-xl p-10"
          id="google-play-games-services"
        >
          Google Play Games Services
        </h2>
        <p>
          To bring the best social experience including leaderboards and
          achievements, FastCube integrates with Google Play Games Services
          (GPGS). Login to GPGS is optional. To get more information about using
          data{' '}
          <a
            className="underline text-fcBlue"
            href="https://developers.google.com/games/services/terms"
          >
            find more information here
          </a>
          .
        </p>

        <h2 className="font-display text-xl p-10" id="crash-logs">
          Crash Logs
        </h2>
        <p>
          I do our best to find and fix software bugs before publishing new
          versions of the app. But, realistically, some bugs will slip through
          and may cause the FastCube app to crash. If this happens the app may
          send a crash log to help us find and fix the bug! FastCube uses Google
          Crashlytics to collect crash logs and you can{' '}
          <a
            className="underline text-fcBlue"
            href="https://firebase.google.com/support/privacy"
          >
            find more information here
          </a>
          .
        </p>

        <h2 className="font-display text-xl p-10" id="childrens-privacy">
          Children’s Privacy
        </h2>
        <p>
          You must be 13 years of age or older to use FastCube. I do not
          knowingly collect personal information from children under 13.
          Moreover, if you are younger than 18, then your parent or legal
          guardian must read and accept this Privacy Policy on your behalf.
        </p>

        <h2
          className="font-display text-xl p-10"
          id="changes-to-this-privacy-policy"
        >
          Changes to this Privacy Policy
        </h2>
        <p>
          I may update this Privacy Policy from time to time and will notify you
          of any changes by publishing the new policy on this page. Any changes
          are effective immediately on publishing and you are advised to review
          this page periodically.
        </p>

        <h2 className="font-display text-xl p-10" id="contact-me">
          Contact Me
        </h2>
        <p>
          Feel free to contact me at{' '}
          <a
            className="underline text-fcBlue"
            href="mailto:michal@almost-purrfect.games"
          >
            michal@almost-purrfect.games
          </a>{' '}
          if you have any questions!
        </p>
      </section>
    </div>
  )
}
