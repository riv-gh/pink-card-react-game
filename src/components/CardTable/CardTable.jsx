import React from 'react'
import { useState } from 'react';
import Card from '../Card/Card';
import cl from './CardTable.module.css'

const CardTable = ({
  cardState, setCardState,
  moves, setMoves,
  movesStop, setMovesStop,
  win, winClick,
  interruptTimeout,
  hideDealtCards,
  screenRatio
}) => {
  const CardClick = (event) => {
    const id = event.target.id || event.target.parentNode.id
    if (movesStop) {
      clearTimeout(interruptTimeout)
      setMovesStop(false)
    }
    const newCardState = !movesStop
    ? cardState
    : cardState.map(card => {
      if (card.open && !card.dealt) {
        card.open = false
      }
      return card
    })

    setCardState(
      newCardState.map((card) => {
        if (card.id===id) {
          if(!card.open) {
            setMoves(moves+1)
            card.open = true
            return card
          }
        }
        return card
      })
    )
  }

  return (
    <div className={[cl.cardTable, (screenRatio<1.8)?cl.square:''].join(' ')}
      onClick={(event) => {
        event.preventDefault()
        if (win)
          winClick()
      }}
    >
      {
        cardState.map(card => 
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            isOpen={card.open}
            isDealt={card.dealt}
            onClick={CardClick}
            hide={hideDealtCards&&card.dealt}
          />
        )
      }
    </div>
  )
}

export default CardTable