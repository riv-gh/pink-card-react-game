import React from 'react'
import cl from './Button.module.css'

const LinkButton = ({children, className, ...props}) => {
  return (
    <a {...props} className={[cl.btn, className].join(' ')}>
      {children}
    </a>
  )
}

export default LinkButton