import Image from 'next/image'

import cursor from '../public/controls/cursor.svg'
import hand from '../public/controls/hand.svg'

import maker from '../public/controls/maker.svg'
import ellipse from '../public/controls/ellipse.svg'
import sheet from '../public/controls/sheet.svg'

import styled from '../styles/Control.module.css'

function Controls() {
  return (
    <main className={styled.container}>
      <div className={styled.tool}>
        <Image className={styled.cursor} src={cursor} alt="cursor" />
        <Image className={styled.hand} src={hand} alt="hand" />
      </div>
      <div className={styled.design}>
        <div className={maker}>
          <Image src={maker} alt="maker" />
        </div>
        <div className={ellipse}>
          <Image src={ellipse} alt="ellipse" />
        </div>
        <div className={sheet}>
          <Image src={sheet} alt="sheet" />
        </div>
      </div>
    </main>
  )
}

export default Controls;