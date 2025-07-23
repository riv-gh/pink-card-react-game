import React from 'react'
import ShareButton from '../UI/Buttons/ShareButton'
// import FacebookButton from '../UI/Buttons/FacebookButton'
import { declOfNum } from '../../utils/formater'
import { translator } from '../../utils/translator'
import cl from './ResultBlock.module.css'


const ResultBlock = ({moves, lang}) => {
  let resultText, resultShare
  switch(lang) {
    case 'ru':
      resultText = `Поздравляем! Вы управились за ${moves} ${declOfNum(moves,['ход','хода','ходов'])}`
      resultShare = `Я справился с Pink Card за ${moves} ${declOfNum(moves,['ход','хода','ходов'])}! А ты сможешь?`
      break
    case 'ua':
      resultText = `Вітаємо! Ви впорались за ${moves} ${declOfNum(moves,['хід','ходи','ходів'])}`
      resultShare = `Я впорався з Pink Card за ${moves} ${declOfNum(moves,['хід','ходи','ходів'])}! А ты зможеш?`
      break
    case 'es':
      resultText = `Ganas en ${moves} movimientos`
      resultShare = `¡Completé la tarjeta rosa en ${moves} movimientos! ¿Puedes lo mismo?`
      break
    case 'fr':
      resultText = `Vous gagnez sur ${moves} coups`
      resultShare = `J'ai terminé Pink Card en coups de ${moves}! Peut tu?`
      break
    default: //en
      resultText = `You win on ${moves} moves`
      resultShare = `I completed Pink Card in ${moves} moves! Can you?`

  }

  //Un juego donde uno puede buscar cartas idénticas y compartir los resultados

  return (
    <div className={cl.resultBlock}>
      <div>{resultText}</div>
      {/* <ShareButton
        shareTitle={'Pink Cards'}
        shareText={resultShare}
        shareDialogTitle={'Share your results'}
      >{translator('Share', lang)}</ShareButton> */}
      {/* <FacebookButton shareText={resultShare}>{translator('Share', lang)}</FacebookButton> */}
    </div>
  )

}

export default ResultBlock