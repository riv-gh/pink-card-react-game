import React from 'react'
import cl from './MenuButton.module.css'

const Button = ({children, className, state, ...props}) => {
  console.log(cl)
  console.log(state)
  console.log(cl[state])
  return (
    <button {...props} className={[cl.btn, cl['state'], className].join(' ')} type="button">
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default Button