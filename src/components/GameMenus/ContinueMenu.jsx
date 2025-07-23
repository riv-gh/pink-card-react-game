import React, { useState } from 'react'
import Menu from '../UI/Menu/Menu'
import { translator } from '../../utils/translator'


const UpdateMenu = ({newGame, translationFunc}) => {

  const [continueMenuShow, setContinueMenuShow] = useState(false)


  const continueMenuStruct = [
    {
      name: 'Continue',
      action: () => {
        setContinueMenuShow(false)
      },
    },
    {
      name: 'New Game',
      action: newGame,
    },
  ]


  return (
    <Menu
        visible={continueMenuShow}
        setVisible={setContinueMenuShow}
        header={'Сontinue or New Game?'}
        menuStruct={continueMenuStruct}
        translationFunc={translationFunc}
      />
  )
}

export default UpdateMenu