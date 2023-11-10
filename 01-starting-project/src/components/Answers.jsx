import { useRef } from "react";

export default function Answer({answers, selectedAnswer, AnswerState ,OnSelect}){
    const shuffledAnswers = useRef(); 
    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
    return (
        <ul id="answers">
        {shuffledAnswers.current.map((answer) => {

          const isSelected = selectedAnswer === answer;
          let cssClasses = '';

          if(AnswerState === 'answered' && isSelected){
              cssClasses = 'selected';
          }
          if((AnswerState === 'correct' || AnswerState === 'wrong') && isSelected ){
              cssClasses =  AnswerState ;
          }
          return (
          <li key={answer} className="answer">
            <button onClick={() => OnSelect(answer)} className={cssClasses}>
              {answer}
            </button>
          </li>)
}
)}
      </ul>
    );
}