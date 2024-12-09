import React from 'react'
import logo from '../../Assets/logo.svg'
import Button from '../Button/Button'
import './Header.scss'


export default function Header() {
  return (
    <div className='header'>
      <div className='header_logo'>
        <img src={logo}></img>
        <div>Кетоконазол</div>
      </div>  
      <div className='header_info'>
          <p>Шампунь</p>
          <p>Крем</p>
          <p>Полезная информация</p>
          <p>Где купить</p>
      </div>
      <div className='header_part'>
      <p><span className='grey'>Ру</span>/Қз</p>
      <Button className="button" text="Купить сейчас"></Button>
      </div>
        
    </div>
  )
}
