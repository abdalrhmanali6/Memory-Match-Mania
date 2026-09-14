import { RefreshCcw } from "lucide-react";

type props={
    ResetGame:()=>void
}
const Resetbutton = ({ResetGame}:props) => {
  return (
    <button onClick={ResetGame}
    className="flex group text-white gap-3 px-4 py-2 bg-linear-to-r from-sky-400 to-blue-400 hover:opacity-90 cursor-pointer active:opacity-80 rounded-3xl transition">
        <span className="group-hover:-rotate-185 duration-300"><RefreshCcw /></span>
        Reset Game
    </button>
  )
}

export default Resetbutton