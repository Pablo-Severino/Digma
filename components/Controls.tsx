import Image from 'next/image'

import cursor from '../public/controls/cursor.svg'
import hand from '../public/controls/hand.svg'

import maker from '../public/controls/maker.svg'
import ellipse from '../public/controls/ellipse.svg'
import sheet from '../public/controls/sheet.svg'
import up from '../public/controls/up.svg'

import styled from '../styles/Control.module.css'

function Controls() {
  return (
    <main className={styled.container}>
      <div className={styled.tool}>
        <Image className={styled.cursor} src={cursor} alt="cursor" />
        <Image className={styled.hand} src={hand} alt="hand" />
      </div>
      <div className={styled.design}>
        <div className={styled.maker}>
          <Image className={styled.pencil} src={maker} alt="maker" />
        </div>
        <Image className={styled.up1} src={up} alt="up" />
        <div className={styled.ellipse}>
          <Image className={styled.circle} src={ellipse} alt="ellipse" />
        </div>
        <Image className={styled.up2} src={up} alt="up" />
        <div className={styled.sheets}>
          <Image className={styled.sheet} src={sheet} alt="sheet" />
        </div>
        <Image className={styled.up3} src={up} alt="up" />
      </div>
    </main>
  )
}

export default Controls;