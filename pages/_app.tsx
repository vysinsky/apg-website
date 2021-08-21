import Head from 'next/head'

import '../styles/global.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookSquare,
  faPinterest,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {
  faBars,
  faGamepad,
  faHome,
  faQuestion,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { Layout } from '../components/Layout'

library.add(
  faFacebookSquare,
  faTwitter,
  faBars,
  faTimes,
  faPinterest,
  faHome,
  faQuestion,
  faGamepad,
)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Almost Purrfect Games</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
