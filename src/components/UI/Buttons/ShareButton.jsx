import React from 'react'
import Button from './Button'
import ShareIcon from '../icons/Share/ShareIcon'
import cl from './Button.module.css'

import { Share } from '@capacitor/share'

const ShareButton = ({
  children,
  shareTitle,
  shareText,
  shareDialogTitle,
  shareUrl='https://play.google.com/store/apps/details?id=com.eightbitfox.pinkcard'
}) => {
  return (
    <Button
      onClick={async ()=>{
      await Share.share({
        title: shareTitle,
        text: shareText,
        url: shareUrl,
        dialogTitle: shareDialogTitle,
      })}}
      className={cl.shareBtn}
    >
      <ShareIcon/>
      <div>{children}</div>
    </Button>
  )
}

export default ShareButton