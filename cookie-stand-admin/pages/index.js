import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Header  from './Header'
import Main from './Main'
import Footer from './Footer'


export default function Home() {

  return (
    <div className=''>
      <Head>
        <title>Cookie Stand Admin</title>
        <meta name="description" content="App to handle admin cookies " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='flex flex-col py-4 space-y-8 items-center'>
        <Main />
      </main>
      
      <Footer />
       
    </div>
  )
}
