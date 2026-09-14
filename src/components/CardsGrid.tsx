import { useEffect, useRef, useState, type Dispatch,type SetStateAction} from "react";
import Card from "./Card";
import type{CardRefHandle} from "../types/Card"
import Win from "./Win";
import useSound from "../hook/useSound"
type props={
gridSize:number
setMatch:Dispatch<SetStateAction<number>>
setMoves:Dispatch<SetStateAction<number>>
deck:string[]
stopTimer:()=>void
Start:boolean
}

const CardsGrid = ({gridSize,setMatch,setMoves,deck,stopTimer,Start}:props) => {

  const [win,setWin]=useState(false)
  const cardRefs = useRef<(CardRefHandle | null)[]>([]);
  
  const firstCard=useRef<(CardRefHandle | null)>(null)
  const secondCard=useRef<CardRefHandle | null>(null)
  const lockBoard=useRef<boolean>(false)

  const handleCardClick=(idx:number)=>{
    const card=cardRefs.current[idx]
    if(lockBoard.current||!card||card.isFlipped||!Start){
      return
    }
    
    card.flip()
    if(!firstCard.current){
      firstCard.current=card
      return
    }

    secondCard.current=card
    lockBoard.current=true
    setMoves((prev: number) => prev + 1);
    

    if(firstCard.current.icon==secondCard.current.icon){
      setMatch((prev)=>{
        const nextMatch=prev+1
        if(nextMatch===deck.length/2){
          stopTimer()
          setWin(true)
          useSound("/audio/winner.mp3")
        }
        return nextMatch
      }
      )
      lockBoard.current=false
      firstCard.current=null
      secondCard.current=null
      
    }else{
      setTimeout(()=>{
        firstCard.current?.unFlip()
        secondCard.current?.unFlip()

        firstCard.current=null
        secondCard.current=null
        lockBoard.current=false
      },1000)
    }
  }

  useEffect(()=>{
      if(Start){
        const cards=cardRefs.current
        lockBoard.current=true
        cards.forEach((card)=>{
          card?.flip()
          setTimeout(()=>{
              card?.unFlip()
               lockBoard.current=false
          },3000)
        })
      }
  },[Start])
 
  return (
    <div className="flex-1 min-h-0 w-full flex items-center justify-center relative">
      <div 
        className="grid gap-2 aspect-square max-h-full max-w-full w-auto h-auto"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${gridSize}, minmax(0, 1fr))`,
          height: '100%',
        }}
      >
        {
          deck.map((icon,idx)=>(
            <Card key={idx}  icon={icon} gridSize={gridSize} ref={(el)=>{cardRefs.current[idx]=el}}
            onClick={()=>handleCardClick(idx)}/>
          ))
        }
      </div >
      {win && <Win/>}
    </div>
  )
}

export default CardsGrid