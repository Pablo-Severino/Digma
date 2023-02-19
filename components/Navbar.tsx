import Image from 'next/image'

import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { SelectItem } from '@radix-ui/react-select';

import menu from '../public/navbar/menu.svg'
import timer from '../public/navbar/timer.svg'
import vote from '../public/navbar/vote.svg'
import templates from '../public/navbar/templates.svg'
import comment from '../public/navbar/comment.svg'

import styled from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <nav className={styled.nav}>
      <div className={styled.function1}>
        <Image className={styled.menu} src={menu} alt="logo" />
        <Image className={styled.timer} src={timer} alt="timer" />
        <Image className={styled.vote} src={vote} alt="vote" />
        <Image className={styled.templates} src={templates} alt="templates" />
        <Image className={styled.comment} src={comment} alt="comments" />
      </div>
    </nav>
  )
}


export default Navbar