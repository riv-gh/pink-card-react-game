import React from 'react'
import Button from '../Buttons/Button'
import cl from './Modal.module.css'

const Modal = ({children, header, visible, setVisible, showClose = true, fullScreen = false}) => {

  return (
    <div
      className={[cl.myModal, visible?cl.active:'', fullScreen?cl.fullScreen:''].join(' ')}
      onClick={() => {
        if(!fullScreen) {
          setVisible(false)
        }
      }}
    >
      <div
        className={[cl.myModalContent, visible?cl.active:''].join(' ')}
        onClick={(e) => e.stopPropagation()}
      >
        <header>{header}</header>
        <div>{children}</div>
        {
          showClose
            ? <Button onClick={() => setVisible(false)}>Close</Button>
            : ''
        }
      </div>
    </div>
  )
}

export default Modal