import Nav from '@/components/Nav'
import '@/styles/globals.css'
import {Analytics} from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Nav></Nav>
      <Component {...pageProps} />

      <Analytics/>
    </>


  ) 
}
