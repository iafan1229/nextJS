import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Header/>
    <Layout>
     <Component {...pageProps} />
    </Layout>
    <Footer/>
  </>

  )
  

}
