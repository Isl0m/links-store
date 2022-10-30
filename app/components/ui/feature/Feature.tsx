import React from 'react'
import s from './Feature.module.scss'
type Props = {
    text:string;
    icon: string;
  }

function Feature({icon,text}: Props) {
  return (
    <li className={s.feature}>
    <div className={s.icon}>
    <span className="material-icons-outlined">{icon}</span>
    </div>
    <h4>{text}</h4>
    </li>
  )
}

export default Feature
