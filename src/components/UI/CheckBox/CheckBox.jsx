import React from 'react'
import cl from './CheckBox.module.css'

const CheckBox = ({checked, setChecked, label, children}) => {

  return (
    <div 
      className={cl.checkBox}
      onClick={()=>{
        setChecked(!checked)
      }}
    >
      <span className={checked ? cl.checked : ''}>{checked ? '✔' : ' '}</span>
      <div>{label ? label : children}</div>
    </div>
  )
}

export default CheckBox