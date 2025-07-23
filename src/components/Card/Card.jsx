import React from 'react'
import cl from './Card.module.css'

const Card = ({id, image, isOpen, isDealt, hide, onClick}) => {
  return (
    <div id={id} className={[
      cl.card,
      isOpen ? cl.open : '' ,
      !isDealt ? cl.noDealt : '',
      hide ? cl.hide : '',
    ].join(' ')} onClick={onClick}>    
      {/* {id.split('_')[1]}   */}
      <div className={cl.image}>
        {image}
      </div>
    </div>
  )
}

export default Card