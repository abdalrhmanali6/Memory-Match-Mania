import { forwardRef, useImperativeHandle, useState } from "react";
import type{CardProps,CardRefHandle} from "../types/Card"
import useSound from "../hook/useSound"


const Card = forwardRef<CardRefHandle,CardProps>(({ icon, gridSize,onClick}: CardProps,ref) => {
  const [isFlipped, setFlipped] = useState(false);

  let TextBase =
    {
      4: "text-4xl sm:text-5xl",
      6: "text-3xl sm:text-4xl",
      8: "text-2xl sm:text-3xl",
    }[gridSize] || "text-4xl";

    TextBase=TextBase+"w-full h-full backface-hidden flex justify-center items-center  absolute inset-0"
 

 useImperativeHandle(ref,()=>(
  {
    flip:()=>{
    setFlipped(true)
    useSound("/audio/flipcard.mp3")
    },
    unFlip:()=>{setFlipped(false)},
    get isFlipped(){
      return isFlipped
    },
    get icon(){
      return icon
    }
  }
 ))
  return (
    <div 
      className="w-full h-full aspect-square perspective-1000 cursor-pointer select-none" 
      onClick={onClick}
    >
      <div  className={`w-full relative h-full transform-style-3d ${isFlipped&&`rotate-y-180`} duration-300 transition-all`}>
        {/*Front*/}
        <div className={` bg-white border border-gray-400 ${TextBase} hover:border-sky-400 hover:-translate-y-1 transition-all duration-300`}
        >
              ?
        </div>
        {/*Back*/}
        <div className={` bg-sky-200 border border-sky-400 ${TextBase} rotate-y-180`}
        >
              {icon}
        </div>
      </div>
    </div>
  );
});

export default (Card);