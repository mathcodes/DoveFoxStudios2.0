import Head from 'next/head'
import Nav from '@components/Nav'
import Footer from '@components/Footer'
import ServicesComponent from '@components/ServicesComponent'

export default function Services() {
  return (
    <div>
      <Head>
        <title>DoveFox Studios</title>
        <link rel="icon" href="https://www.jonchristie.net/favicon.png" />
      </Head>
      <Nav />
      <ServicesComponent />
      <Footer />
    </div>
  )
}
