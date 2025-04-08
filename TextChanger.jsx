import React from 'react'
import { useState, useEffect } from 'react'

const TextChanger = () => {
  
    const texts = ["Hi, I'm Himanshu","Hi, I'm Himanshu","Hi, I'm Himanshu"]
    const [currenText, setCurrenText] = useState("")

    const [endValue, setendValue] = useState(true);
    const [isForward, setIsForward] = useState(true);
    const [index, setIndex] = useState(0); 


    useEffect(()=>{
      
        const intervalId = setInterval(()=>{
            setCurrenText(texts[index].substring(0, endValue));
            if(isForward){
                setendValue((prev)=>prev+1);
            }else{
                setendValue((prev)=>prev-1);
            }

            if(endValue>texts[index].length+10){
                setIsForward(false)
            }

            if(endValue < 2.1){
                setIsForward(true)
                setIndex((prev)=>prev&texts.length)
            }

        }, 50);

        return()=>clearInterval(intervalId)

    },[endValue,isForward,index,texts])

    return (
    <div className='transition ease duration-300'>{currenText}</div>
  )
}

export default TextChanger