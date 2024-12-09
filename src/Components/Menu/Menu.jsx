import { useState } from 'react'
import React from 'react'
import arrow_down from './../../Assets/arrow_down.svg'
import arrow_up from './../../Assets/arrow_up.svg'
import './Menu.scss'
export default function Menu(props) {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleToggle = () => {
        setIsOpen((prev) => !prev);
      };
  
return (
    <div className='menu'>
        <div className='menu_header'>
            <button className="button_circle" onClick={handleToggle}>
                {isOpen ?  <img src={arrow_up} alt="" /> : <img src={arrow_down} alt="" />}
            </button>
            <div className='menu_title'>{props.title}</div>
        </div>
      {isOpen && <p className='menu_info'>{props.info}</p>}
    </div>
  )
}
