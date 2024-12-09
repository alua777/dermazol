import React from 'react'
import './Card.scss'

export default function Card(props) {
  return (
    <div className='card'>

      <div className='card_number'>{props.number}</div>
      <div className='card_info'>
        <div className='card_info_title'>{props.title}</div>
        <div className='card_info_text'>
        {props.info1}
        {props.info2}
          
        </div>
      </div>
    </div>
  )
}
