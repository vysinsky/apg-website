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
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
