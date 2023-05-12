import React from 'react'
import Styles from './Toggle.module.css'


const Toggle = ({label}) => {
  return (
    <div className={Styles.Toggle}>
      <div className={Styles.Toggle_Switch_Box}>
        <input type="checkbox" className={Styles.Toggle_CheckBox} name={label} id={label} />
        <label htmlFor={label} className={Styles.Toggle_Label}>
          <span className={Styles.Toggle_Inner}></span>
          <span className={Styles.Toggle_Switch}></span>
        </label>
      </div>
    </div>
  )
}

export default Toggle