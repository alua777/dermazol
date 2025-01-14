import React from 'react'
import './Button.scss'

export default function Button(props) {
  return (
    <button className={props.className}>{props.text}</button>
  )
}
