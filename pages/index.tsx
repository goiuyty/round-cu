import Head from 'next/head'
import Main from '../components/main'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Roundcube webmail :: welcome to Roundecube Webmail</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://webmail.supremecluster.com/skins/elastic/images/logo.svg?s=1593860317" />
      </Head>
      <Main/>
    </>
  )
}
