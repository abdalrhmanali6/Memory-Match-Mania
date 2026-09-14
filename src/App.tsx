
import { useState } from 'react';
import './App.css'
import CardsGrid from './components/CardsGrid';
import GridSelector from './components/GridSelector';
import Info from './components/Info';
import Resetbutton from './components/Resetbutton';
import shuffle from "./utils/Shuffle"
import {useTimer} from "./hook/useTimer"
import StartGame from './components/StartGame';
let icons = [
  "🐶",
  "🐱",
  "🦊",
  "🐼",
  "🐸",
  "🦁",
  "🐯",
  "🐨",
  "🐵",
  "🐰",
  "🐻",
  "🐷",
  "🐮",
  "🐷",
  "🐔",
  "🐧",
  "🐦",
  "🦄",
  "🐝",
  "🦋",
  "🐌",
  "🐢",
  "🐙",
  "🦀",
  "🐠",
  "🐬",
  "🐳",
  "🦈",
  "🌸",
  "🌻",
  "🍎",
  "🍕",
  "🍔",
  "🍩",
  "⚽",
  "🚀",
];

function App() {

   const {Timer,startTimer,stopTimer,resetTimer}=useTimer()
   const [gridSize,setGridSize]=useState(4)
  
   const CreateNewDeck=(size:number)=>{

    const GridIcons=size*size/2

    const Shuffledicons=shuffle(icons).slice(0,GridIcons)

    const Deck=[...Shuffledicons,...Shuffledicons]

    return shuffle(Deck)

   }

   
 
   const [deck,setDeck]=useState(CreateNewDeck(gridSize))
   const [moves,setMoves]=useState(0)
   const [match,setMatch]=useState(0)
   const [resetCounter,setResetCounter]=useState(0)
   const [Start,setStart]=useState(false)
   const ReintializeGame=(size:number)=>{
    setGridSize(size)
    setDeck(CreateNewDeck(size))
    setMoves(0)
    setMatch(0)
    setResetCounter(prev=>prev+1)
    resetTimer()
    setStart(false)
   }


  return (
     <div className="flex box-border flex-col items-center justify-center h-screen w-screen gap-3 p-6 overflow-hidden" >
        <h1 className="text-center font-extrabold text-xl sm:text-3xl text-bold shrink-0">Memory Match Mania ✨</h1>
        <GridSelector  onGridSelect={ReintializeGame}/>
        <Info moves={moves} match={match} total={deck.length/2} Timer={Timer} />
        <CardsGrid gridSize={gridSize} deck={deck} setMoves={setMoves} setMatch={setMatch} key={resetCounter}   stopTimer={stopTimer} Start={Start}/>
        <div className="">
            {Start &&<Resetbutton ResetGame={()=>ReintializeGame(gridSize)}/>}
              {!Start && <StartGame setStart={setStart} startTimer={startTimer}/>}
        </div>
     </div>
  )
}

export default App
