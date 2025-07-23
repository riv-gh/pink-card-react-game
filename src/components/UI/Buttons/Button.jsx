import React from 'react'
import cl from './Button.module.css'

const Button = ({children, className, ...props}) => {
  return (
    <button {...props} className={[cl.btn, className].join(' ')} type="button">
      {children}
    </button>
  )
}

export default Button