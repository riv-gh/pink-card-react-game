import React, { useEffect, useState } from 'react'
import CardTable from './components/CardTable/CardTable'
import ResultBlock from './components/ResultBlock/ResultBlock'
import Modal from './components/UI/Modal/Modal'
import Button from './components/UI/Buttons/Button'
import Menu from './components/UI/Menu/Menu'
import './styles/App.css'
import { translator } from './utils/translator'


import UpdateMenu from './components/GameMenus/UpdateMenu'


const allEmojiArr = [
  '😀','😃','😄','😁','😆','😅',
  '🤣','😂','🙂','🙃','😉','😊',
  '😇','🥰','😍','🤩','😘','😗',
  '😚','😙','😋','😛','😜','🤪',
  '😝','🤑','🤗','🤭','🤫','🤔',
  '🤐','🤨','😐','😑','😶','😏',
  '😒','🙄','😬','🤥','😌','😔',
  '😪','🤤','😴','😷','🤒','🤕',
  '🤢','🤮','🤧','🥵','🥶','🥴',
  '😵','🤯','🤠','🥳','😎','🤓',
  '🧐','😕','😟','🙁','☹️','😮',
  '😯','😲','😳','🥺','😦','😧',
  '😨','😰','😥','😢','😭','😱',
  '😖','😣','😞','😓','😩','😫',
  '🥱','😤','😡','😠','🤬','😈',
  '👿','😺','😸','😹','😻','😼',
  '😽','🙀','😿','😾',
].sort (()=> Math.random ()-0.5)

const nowVersion = 1.3
const hideTimout = 1000
const resultTimeout = 500

const App = () => {

  const [cardState, setCardState] = useState(JSON.parse(localStorage.getItem('cardState')) ||[])
  const [moves, setMoves] = useState(+localStorage.getItem('moves') || 0)
  const [movesStop, setMovesStop] = useState(false)
  const [win, setWin] = useState(!!localStorage.getItem('win') || false)
  const [menuShow, setMenuShow] = useState(false)
  const [continueMenuShow, setContinueMenuShow] = useState(false)
  const [langMenuShow, setLangMenuShow] = useState(false)
  const [resultShow, setResultShow] = useState(false)

  // const [hideDealtCards, setHideDealtCards] = useState(false)
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  
  const [interruptTimeout, setInterruptTimout] = useState(null)
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en')

  const t = (str) => {
    return translator(str, lang)
  }

  useEffect(()=>{
    const openCards = cardState.filter(card => card.open && !card.dealt)
    if (openCards.length>=2) {
      if (openCards[0].image === openCards[1].image) {
        const openCardsIds = openCards.map(card => card.id)
        setCardState(
          cardState.map(card => (openCardsIds.includes(card.id))? {...card, dealt: true} : card)
        )
      }
      else {
        setMovesStop(true)
        setInterruptTimout(
          setTimeout(()=>{
            setInterruptTimout(null)
            setCardState(
              cardState.map((card,i,cardArr) => {
                if (!card.dealt)
                  card.open = false
                return card
              })
            )
            setMovesStop(false)
          }, hideTimout)
        )  
      }
      setWin(cardState.length === cardState.filter(card => card.open).length)
    }
  },[cardState])  

  useEffect(() => {
    if (win && endTime === null) {
      const end = Date.now()
      setEndTime(end)
      console.log(((end-startTime)/1000).toFixed(1))
    }
    // next coment to use [] useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [win, endTime])

  const newGame = () => {
    const cardImageInGame = [ ]
    allEmojiArr
      .sort (()=> Math.random ()-0.5)
      .slice(0,8)
      .forEach(image=>{
        cardImageInGame.push(image)
        cardImageInGame.push(image)
      })
    
    setCardState(
      cardImageInGame
      .sort (()=> Math.random ()-0.5)
      .map((image,i) => {
        return {
          id: `cardId_${i}`,
          image: image,
          open: false,
          dealt: false
        }
      })
    )
    setMoves(0)
    setWin(false)
    setMenuShow(false)
    setContinueMenuShow(false)
    setResultShow(false)
    setStartTime(Date.now())
    setEndTime(null)
  }

  useEffect(() => { 
    if (win)
      setTimeout(()=>{
        setResultShow(true)
        localStorage.clear()
        localStorage.setItem('lang', lang)
      },resultTimeout)
    localStorage.setItem('win', win ? 'win' : '')
  },[win, lang])

  useEffect(() => {
    if (localStorage.getItem('lang') === null) {
      setLangMenuShow(true)
    }
    localStorage.setItem('lang', lang)
  },[lang])

  useEffect(() => {
    if (moves>0 && cardState.filter(cardItem => cardItem.open).length) {
      setContinueMenuShow(true)
    }
    else {
      newGame()
    }

    // next coment to use cardState in [] useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const menuStruct = [
    {
      name: 'Continue',
      action: ()=>{setMenuShow(false)},
    },
    {
      name: 'New Game',
      action: newGame,
    },
    {
      name: 'Language',
      action: ()=>{setLangMenuShow(true)},
    },
    {
      name: 'My GitHub',
      link: 'https://github.com/riv-gh',
    },
  ]

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

  const languageMenuStruct = [
    ['English', 'en'],
    ['Русский', 'ru'],
    ['Українська', 'ua'],
    ['Español', 'es'],
    ['Francés', 'fr'],
  ].map(el => {
    return {
      name: el[0],
      action: () =>{
        setLang(el[1])
        setLangMenuShow(false)
      }
    }
  })

  useEffect(() => {
    localStorage.setItem('cardState', JSON.stringify(cardState))
  }, [cardState])
  
  useEffect(() => {
    localStorage.setItem('moves', moves)
  }, [moves])

  const [screenRatio, setScreenRaito] = useState(window.innerWidth/window.innerHeight)
  function handleResize() {
    setScreenRaito(window.innerWidth/window.innerHeight)
    // console.log(window.innerWidth/window.innerHeight)
  }
  window.addEventListener('resize', handleResize)

  return (
    <div className="App">
      <header>
        <span>😉 Pink Card</span>
        <Button type="button" onClick={async() => setMenuShow(true)}>☰</Button>
      </header>
      <CardTable
        cardState={cardState} setCardState={setCardState}
        moves={moves} setMoves={setMoves}
        movesStop={movesStop}
        setMovesStop={setMovesStop}
        win = {win}
        winClick = {() => {
          setResultShow(!resultShow)
        }}
        interruptTimeout={interruptTimeout}
        // hideDealtCards={hideDealtCards}
        screenRatio={screenRatio}
      />
      <footer>
        <span className={['move', lang, (screenRatio<1.4)?'rotated_landscape':''].join(' ')}>{`${t('Moves')}: ${moves}`}</span>
      </footer>
      <Menu
        visible={menuShow}
        setVisible={setMenuShow}
        header={'Menu'}
        menuStruct={menuStruct}
        translationFunc={t}
        fullScreen={true}
      />
      <Menu
        visible={continueMenuShow}
        setVisible={setContinueMenuShow}
        header={'Сontinue or New Game?'}
        menuStruct={continueMenuStruct}
        translationFunc={t}
      />
      <Menu
        visible={langMenuShow}
        setVisible={setLangMenuShow}
        header={t('Language')}
        menuStruct={languageMenuStruct}
        inline={true}
      />
      <UpdateMenu version={nowVersion} translationFunc={t}/>
      <Modal
        visible={resultShow}
        setVisible={setResultShow}
        header={t('Results')}
        showClose={false}
      >
        <ResultBlock moves={moves} lang={lang}/>
        <Button
          onClick={()=>{
            newGame();
          }}
        >
          {t('Play Again')}
        </Button>
      </Modal>
    </div>
  );
}

export default App;
