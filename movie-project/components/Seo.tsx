import Head from 'next/head'

interface Title{ 
  title: string
}
export default function Seo({title}:Title) {
    return (
      <Head>
        <title>{title}</title>
      </Head>
    )
}