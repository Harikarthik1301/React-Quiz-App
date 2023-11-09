import { useState } from "react";
import QUESTIONS from '../questions.js'
import tropyimg from '../assets/quiz-complete.png'

export default function Quiz(){

    const [userAnswers , setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const questionNumber = activeQuestionIndex + 1;

    const isQuizCompleted = activeQuestionIndex  === QUESTIONS.length;

    //function that sets the slected useranswer
    function handleSelectedAnswer(SelectedAnswer) {
        setUserAnswers((prevUserAnswer)=>{
            return [...prevUserAnswer , SelectedAnswer];
        });
    }

    if(isQuizCompleted){
 return(
    <div id="summary">
        <img src={tropyimg} alt="tropy"/>
        <h2>Quiz Completed</h2>
    </div>
 );
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() -0.5);

    return(
        <div id="quiz">
        <div id="question">
            <h2>Question no : {`${questionNumber}/${QUESTIONS.length}`}</h2>
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers" >
               {shuffledAnswers.map((answer) =>(
                <li key={answer} className="answer">
                    <button onClick={() => handleSelectedAnswer(answer)}>{answer}</button>
                </li>
               ))}
            </ul>
        </div>
        </div>
    );
}