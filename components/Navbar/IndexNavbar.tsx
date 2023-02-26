import Image from 'next/image'
import Link from 'next/link';

import logo from '../../public/navbar/logo.svg';

import styled from '../../styles/IndexNavbar.module.css'

function IndexNavbar() {
  return (
    <nav className={styled.nav}>
      <Image src={logo} alt="logo" />
      <div className={styled.auth}>
        <Link href="/auth/login">
          <p className={styled.login}>Log In</p>
        </Link>
        <Link href="/auth/signup">
          <li className={styled.button}>Get Started</li>
        </Link>
      </div>
    </nav>
  )
}

export default IndexNavbar