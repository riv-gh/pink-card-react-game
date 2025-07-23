import React from 'react'
import Modal from '../Modal/Modal'
import Button from '../Buttons/Button'
import LinkButton from '../Buttons/LinkButton'
import cl from './Menu.module.css'

const Menu = ({visible, setVisible, header, menuStruct, translationFunc=(text)=>text, inline=false, fullScreen=false}) => {
   
  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      header={translationFunc(header)}
      showClose={false}
      fullScreen={fullScreen}
    >
      <div className={ [inline ? cl.inlineMenu : cl.menu, fullScreen?cl.fullScreen:''].join(' ') }>
        {
          menuStruct.map((menuItem) => {
            if (menuItem.link) {
              return (
                <div key={menuItem.name}>
                  <LinkButton target="_blank" href={menuItem.link}>{translationFunc(menuItem.name)}</LinkButton>
                </div>
              )
            }
            return (
              <div key={menuItem.name}>
                <Button onClick={menuItem.action}>{translationFunc(menuItem.name)}</Button>
              </div>
            )
          })
        }
      </div>
    </Modal>
  ) 
}

export default Menu