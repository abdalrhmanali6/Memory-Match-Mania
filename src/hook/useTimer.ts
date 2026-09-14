import { useCallback, useEffect, useRef, useState } from "react";

export const useTimer=()=>{
    const [timer,setTimer]=useState(0)

    const inrevalRef=useRef<ReturnType<typeof setInterval> | null>(null)

    const handleStart=useCallback(()=>{
        if(inrevalRef.current!==null) return

        inrevalRef.current=setInterval(() => {
            setTimer(prev=>prev+10)
        }, 10);
    },[])

    const handleStop=useCallback(()=>{
        if(inrevalRef.current==null)return
        clearInterval(inrevalRef.current)
        inrevalRef.current=null
    },[])

    const handleReset=useCallback(()=>{
       handleStop()
        setTimer(0)
    },[handleStop])

    useEffect(()=>{
        return ()=>{
            if(inrevalRef.current!==null){
                clearInterval(inrevalRef.current)
            }
        }
    },[])
    const minutes=Math.floor(timer/60000).toString().padStart(2,"0")
    const seconds=Math.floor(timer%60000/1000).toString().padStart(2,"0")
    const milliseconds=Math.floor(timer%1000/10).toString().padStart(2,"0")
    const FormatedTime=`${minutes} : ${seconds} . ${milliseconds}`

    return {
        Timer:FormatedTime,
        startTimer:handleStart,
        stopTimer:handleStop,
        resetTimer:handleReset,
    }
}
