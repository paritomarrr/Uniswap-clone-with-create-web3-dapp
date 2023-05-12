import React, {useState} from 'react'
import Styles from './SearchToken.module.css'
import Image from 'next/image'
import images from '../../assets'
const SearchToken = ({openToken, tokens, tokenData}) => {
  const [active, setActive] = useState(1)
  const coin = [
    {
      img: images.ETH,
      name: 'ETH',
    },{
      img: images.DAI,
      name: 'DAI',
    },{
      img: images.USDC,
      name: 'USDC',
    },{
      img: images.USDT,
      name: 'USDT',
    },{
      img: images.WBTC,
      name: 'WBTC',
    },{
      img: images.WETH,
      name: 'WETH',
    }
  ]
  return (
    <div className={Styles.SearchToken}>
      <div className={Styles.SearchToken_Box}>
        <div className={Styles.SearchToken_Box_Heading}>
          <h4>Select a Token</h4>
          <Image src={images.Close} alt='Close' width={50} height={30} onClick={() => {
            openToken(false)
          } } />
        </div>
        <div className={Styles.SearchToken_Box_Search}>
          <div className={Styles.SearchToken_Box_Search_Image}>
            <Image src={images.Search} alt='Search' width={20} height={20} />
          </div>
          <input type="text" placeholder="Search name or paste address" />
        </div>
        <div className={Styles.SearchToken_Box_Tokens}>
          {coin.map((item, index) => (
            <span key={index+1} className={active == index + 1? `${Styles.active}`: ""} onClick={() =>  {setActive(index+1) , tokens({name: item.name, image: item.img })}}>
              <Image src={item.img || images.ETH} alt='image' width={30} height={30} />
              {item.name || "ETH"}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchToken 