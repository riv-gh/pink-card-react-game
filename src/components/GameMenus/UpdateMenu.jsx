import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Menu from '../UI/Menu/Menu'


const UpdateMenu = ({version, translationFunc}) => {
  const [updateMenuShow, setUpdateMenuShow] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/riv-gh/app_versions/main/pink-card')
        setUpdateMenuShow(+(response.data)>version)
      }
      catch { }
    })()
  }, [version])

  const updateMenuStruct = [
    {
      name: 'Update now',
      link: 'https://play.google.com/store/apps/details?id=com.eightbitfox.pinkcard',
    },
    {
      name: 'Next time',
      action: () => {
        setUpdateMenuShow(false)
      },
    }
  ]


  return (
    <Menu
        visible={updateMenuShow}
        setVisible={setUpdateMenuShow}
        header={'Update Avalible!'}
        menuStruct={updateMenuStruct}
        translationFunc={translationFunc}
      />
  )
}

export default UpdateMenu