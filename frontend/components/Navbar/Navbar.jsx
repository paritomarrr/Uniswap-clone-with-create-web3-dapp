import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// internal imports 
import Styles from "./Navbar.module.css"
import images from '../../assets'
import { Modal, TokenList } from '../index'

const Navbar = () => {
  const menuItems = [
    {
      name: "Swap",
      link: "/"
    },
    {
      name: "Tokens",
      link: "/"
    },
    {
      name: "NFTs",
      link: "/"
    }
  ]
  // state 
  const [openModal, setOpenModal] = useState(false)
  const [openTokenBox, setOpenTokenBox] = useState(false)

  return (
    (
      <div className={Styles.navbar}>
        <div className={Styles.Navbar_Box}>
          {/* logo */}
          <div className={Styles.Navbar_Box_Left}>
            <div className={Styles.Navbar_Box_Left_Logo}>
              <Image src={images.logo} alt="logo" width={50} height={50} />
            </div>
            <div className={Styles.Navbar_Box_Left_Menu}>
              {menuItems.map((item, index) => (
                <Link key={index + 1} href={{ pathname: `${item.name}, query: ${item.link}` }}>
                  <p className={Styles.Navbar_Box_Left_Menu_Item}>{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
          {/* middle */}
          <div className={Styles.Navbar_Box_Middle}>
            <div className={Styles.Navbar_Box_Middle_Search}>
              <div className={Styles.Navbar_Box_Middle_Search_Img}>
                <Image src={images.Search} alt="search" width={20} height={20} />
              </div>
              <input type="text" placeholder="Search tokens and NFT collections" />
            </div>
          </div>
          {/* right */}
          <div className={Styles.Navbar_Box_Right}>
            <div className={Styles.Navbar_Box_Right_Box}>
              <div className={Styles.Navbar_Box_Right_Box_Img}>
                <Image src={images.ETH} alt="Ether" width={30} height={30} />
              </div>
              <p>Network Name</p>
            </div>
            <button onClick={() => { setOpenModal(true)}}>Address</button>
            {openModal && <Modal setOpenModal={setOpenModal} connectWallet="Connect" />}
          </div>
        </div>

        {/* tokenlist component  */}
        {openTokenBox && (<TokenList tokenData="hey" setOpenTokenBox={setOpenTokenBox} />)}
      </div>
    )
  )
}

export default Navbar