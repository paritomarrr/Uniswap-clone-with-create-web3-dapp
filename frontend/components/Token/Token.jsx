import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Styles from './Token.module.css'

import images from '../../assets'
import {Toggle} from '../index'
const Token = ({setOpenSettings}) => {
  return (
   <div className={Styles.Token}>
        <div className={Styles.Token_Box}>
            <div className={Styles.Token_Box_Heading}>
                <h4>Settings</h4>
                <Image src={images.Close} alt='Close' width={50} height={30} onClick={() => {setOpenSettings(false)}} />
            </div>
            <p className='Styles.Token_Box_Para'>
                Slippage Tolerance{""}
                <Image src={images.Lock} alt="img" height={20} width={20} />
            </p>
            
            <div className={Styles.Token_Box_Input}>
                <button>Auto</button>
                <input type="text" placeholder='0.10%' />
            </div>
            <p className='Styles.Token_Box_Para'>
                Slippage Tolerance{""}
                <Image src={images.Lock} alt="img" height={20} width={20} />
            </p>
            <div className={Styles.Token_Box_Input}>
              
                <input type="text" placeholder='30' />
                <button>minutes</button>
            </div>
            <h2>Interface Setting</h2>
            <div className={Styles.Token_Box_Toggle}>
                <p clsasName={Styles.Token_Box_Para}>Transaction Deadline</p>
                <Toggle label="No" />
            </div>
            </div>   
   </div>
  )
}

export default Token