import Image from 'next/image'

import menu from '../public/navbar/menu.svg'
import down from '../public/navbar/down.svg'
import timer from '../public/navbar/timer.svg'
import vote from '../public/navbar/vote.svg'
import templates from '../public/navbar/templates.svg'
import comment from '../public/navbar/comment.svg'
import avatar from '../public/navbar/avatar.svg'
import zoomin from '../public/navbar/zoom-in.svg'
import zoomout from '../public/navbar/zoom-out.svg'

import styled from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <nav className={styled.nav}>
      <div className={styled.function1}>
        <div className={styled.menu}>
          <Image className={styled.logo} src={menu} alt="logo" />
          <Image className={styled.down1} src={down} alt="down" />
        </div>
        <div className={styled.timer}>
          <Image className={styled.clock} src={timer} alt="timer" />
        </div>
        <div className={styled.vote}>
          <Image className={styled.box} src={vote} alt="vote" />
        </div>
        <div className={styled.templates}>
          <Image className={styled.template} src={templates} alt="templates" />
        </div>
        <div className={styled.comments}>
          <Image className={styled.comment} src={comment} alt="comments" />
        </div>
      </div>

      <div className={styled.function2}>
        <span>
          <p>Drafts /</p>
        </span>
        <p>{"Design critique - MyPortifolio"}</p>
        <Image className={styled.down2} src={down} alt="down" />
      </div>

      <div className={styled.function3}>
        <Image src={avatar} alt="avatar" />
        <button className={styled.share}>Share</button>
        <div className={styled.zoom}>
          <span className={styled.zoomin}>
            <Image src={zoomin} alt="zoom-in" />
          </span>
          <button className={styled.percent}>
            <div>50%</div>
            <Image src={down} alt="Down" />
          </button>
          <span className={styled.zoomout}>
            <Image src={zoomout} alt="zoom-out" />
          </span>
        </div>
      </div>
    </nav>
  )
}


export default Navbar