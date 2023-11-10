import { useEffect, useState } from "react";

export default function QuestionTimer({timeout ,OnTimeout}) {

   const [remainingTime , setRemainingTime] = useState (timeout);

   useEffect(()=>{
    const Timer = setTimeout( OnTimeout , timeout);
    return ()=>{
        clearTimeout(Timer);
    }
   },[timeout , OnTimeout]);

   useEffect(() => {
    const interval = setInterval(() => {
    setRemainingTime((prevRemainingTime) => prevRemainingTime -100);
    }, 100);

    return ()=>{
        clearInterval(interval);
    }
   } ,[]);
    
    return <progress id="question-time"  max={timeout} value={remainingTime}/>;
}