import React, {ReactNode} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

interface Props {
  children: ReactNode
}
export default function Home({children}:Props) {
  return (
    <>
      <Head>
        <title>Movie API</title>
      </Head>
      {children}
    </>
  )  
}