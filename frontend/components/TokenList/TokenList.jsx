import React from 'react'
import Styles from './TokenList.module.css'
import Image from 'next/image'
import images from '../../assets'


const TokenList = ({tokenDate, setOpenTokenBox}) => {
  const data = [1,2,3,4,5,6,7]
  return (
    <div className={Styles.TokenList}>
      <p className={Styles.TokenList_Close} onClick={() => {
        setOpenTokenBox(false)
      }}>
        <Image src={images.Close} alt="close" width={50} height={30} />
      </p>
      <div className={Styles.TokenList_Title}>
        <h2>Your Token List</h2>
      </div>
      {data.map((item, index) => (
        <div className={Styles.TokenList_Box}>
          <div className={Styles.TokenList_Box_Info}>
            <p className={Styles.TokenList_Box_Info_Symbol}>
              <Image src={images.ETH} alt="btc" width={30} height={30} />
            </p>
            <p>
              <span>34</span> ETH COIN
            </p>
          </div>
        </div>
      )
        )}
    </div>
  )
}

export default TokenList