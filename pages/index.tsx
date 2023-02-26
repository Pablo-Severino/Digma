import Head from 'next/head';
import Link from 'next/link';

import IndexNavbar from '@/components/Navbar/IndexNavbar';
import IndexFooter from '@/components/Footer/IndexFooter';

import styled from '../styles/Home.module.css'
import 'reactflow/dist/style.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Digma</title>
      </Head>
      <IndexNavbar />
      <main className={styled.main}>
        <div className={styled.section1}>
          <video aria-label="Nothing great is made alone" role="heading" aria-level="1" src="https://cdn.sanity.io/files/599r6htc/localized/4caa8274fa1a76f5df188b7969c41e2b00890801.mp4" autoplay="" muted="" playsinline="" className={styled.video1}></video>
          <p className={styled.description}>Digma connects everyone in the design process so teams can deliver better products, faster.</p>
          <Link href="/auth/signup">
            <button className={styled.button}>Get Started</button>
          </Link>
        </div>
      </main>
      <IndexFooter />
    </>
  )
}
