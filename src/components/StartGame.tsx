import type { Dispatch } from "react";

type props={
    setStart:Dispatch<boolean>
    startTimer:()=>void
}
const StartGame = ({setStart,startTimer}:props) => {

  const handleClick=()=>{
    setStart(true)
    startTimer()
  }
  return (
    <button className="flex  text-white gap-3 px-4 py-2 bg-linear-to-r from-sky-600 to-blue-700 hover:opacity-90 cursor-pointer active:opacity-80 rounded-3xl transition"
    onClick={handleClick}>
        StartGame
    </button>
  )
}

export default StartGame