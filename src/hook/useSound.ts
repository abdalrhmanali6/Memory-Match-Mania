
let queue=false

const useSound=(audioPath:string)=>{
    
    if(queue){return} 

    queue=true

    requestAnimationFrame(()=>{
        let audio=new Audio(audioPath)
        audio.play()
        queue=false
    })
}


export default useSound