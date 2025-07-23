import React from 'react'
import LinkButton from './LinkButton'
import FacebookIcon from '../icons/Facebook/FacebookIcon'
import cl from './Button.module.css'

const FacebookButton = ({
  children,
  shareText,
  shareService='facebook', //заготовка под несколько
  shareFrom='play.google.com/store/apps/details?id=com.kiloo.subwaysurf'
}) => {
  let link = 'about:blank'
  let icon = ''
  switch(shareService) {
    case 'facebook':
      link = `https://www.facebook.com/sharer/sharer.php?u=${shareFrom}&quote=${encodeURI(shareText)}`
      icon = <FacebookIcon/>
      break
    default:
      link = 'about:blank'
  }
  return (
    <LinkButton
      target="_blank"
      href={link}
      className={cl.shareBtn}
    >
      {icon}
      <div>{children}</div>
    </LinkButton>
  )
}

export default FacebookButton