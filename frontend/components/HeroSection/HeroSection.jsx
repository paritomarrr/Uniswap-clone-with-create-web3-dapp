import React, {useState, useContext} from 'react'
import Image from 'next/image'

import Styles from './HeroSection.module.css'
import images from '../../assets'
import {Token, SearchToken} from '../index'
const HeroSection = ({accounts, tokenData}) => {
  const [openSettings, setOpenSettings] = useState(false)
  const [openToken, setOpenToken] = useState(false)
  const [openTokensTwo, setOpenTokensTwo] = useState(false)

  const [tokenOne, setTokenOne] = useState({
    name: 'Token One',
    image: ""
  })
  const [tokenTwo, setTokenTwo] = useState({
    name: 'Token Two',
    image: ""
  })
  return (
    <div className={Styles.HeroSection}>
      <div className={Styles.HeroSection_Box}>
        <div className={Styles.HeroSection_Box_Heading}>
          <p>Swap</p>
          <div className={Styles.HeroSection_Box_HEading_Img}>
            <Image src={images.Close} alt='Close' width={50} height={30} onClick={() => {
              setOpenSettings(true)
            }} />
          </div>
        </div>
        <div className={Styles.HeroSection_Box_Input}>
          <input type="text" placeholder="0.0" />
          <button onClick={() => openToken(true)}>
            <Image src={tokenOne.image || images.ETH} width={20} height={20} />
            {tokenOne.name || "ETH"}
            <small>9474</small>
          </button>
        </div>
        <div className={Styles.HeroSection_Box_Input}>
          <input type="text" placeholder="0.0" />
          <button onClick={() => openToken(true)}>
            <Image src={tokenTwo.image || images.ETH} width={20} height={20} />
            {tokenTwo.name || "ETH"}
            <small>9474</small>
          </button>
          {accounts ? (
            <button className={Styles.HeroSection_Box_Btn}>Connect Wallet</button>) : (
            <button className={Styles.HeroSection_Box_Btn} onClick={() => {}}>Swap</button>
          )}
        </div>
        {openSettings && <Token openSettings={openSettings} />}
        {openToken && <SearchToken openToken={openToken} tokens={setTokenOne} tokenData={tokenData} />}

        {openToken && <SearchToken openToken={openToken} tokens={setTokenOne} tokenData={tokenData} />}
      </div>

    </div>
  )
}

export default HeroSection