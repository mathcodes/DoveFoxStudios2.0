import Head from 'next/head'
import Nav from '@components/Nav'
import Footer from '@components/Footer'
import ContactForm from '@components/ContactForm'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>DoveFox Studios</title>
        <link rel="icon" href="https://www.jonchristie.net/favicon.png" />
      </Head>
      <Nav />
      <ContactForm />
      <Footer />
    </div>
  )
}
