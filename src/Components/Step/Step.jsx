import React from 'react'
import './Step.scss'
import circle from '../../Assets/circle.svg'
import step1 from '../../Assets/step1.svg'

export default function Step(props) {
  return (
    <div className="step">
      <img className='step_circle' src={circle} alt="" />
      <img className='step_img' src={step1}></img>
      <div>
        <div className='step_title'>{props.step}-этап</div>
        <div className='step_info'>{props.info}</div>
      </div>
    </div>
  )
}
