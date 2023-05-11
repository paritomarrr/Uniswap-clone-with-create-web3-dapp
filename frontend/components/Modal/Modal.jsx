import React, {useState, useEffect} from 'react'
import Styles from './Modal.module.css'
import images from '../../assets'
import Image from 'next/image'
 
const Modal = ({setOpenModal, connectWallet}) => {
  const walletMenu = ["MetaMask", "Coinbase", "Wallet", "WalletConnect"]
  return (
    <div className={Styles.Modal}>
      <div className={Styles.Modal_Box}>
        <div className={Styles.Modal_Box_Heading}>
          <p>Connect to Wallet</p>
          <div className={Styles.Modal_Box_Heading_Img}>
            <Image src={images.Close} alt="close" width={50} height={30} onClick={() => setOpenModal(false)} />
          </div>
        </div>
        <div className={Styles.Modal_Box_Wallet}>
          {walletMenu.map((item, index) => (
            <p key={index + 1} onClick={() => {
              connectWallet()
            }}>
              {item}
            </p>
            ))}
        </div>
        <p className={Styles.Modal_Box_Para}>
          By connecting a wallet, you agree to Uniswap Labs'<br /> Terms and Conditions and consent to its Privacy Policy.
        </p>
      </div>
    </div>
  )
}

export default Modal