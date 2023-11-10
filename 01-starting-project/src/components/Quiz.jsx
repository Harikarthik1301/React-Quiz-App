import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import tropyimg from "../assets/quiz-complete.png";
import Questions from "./Questions.jsx";

export default function Quiz() {

  const [userAnswers, setUserAnswers] = useState([]);

  const [AnswerState, setAnswerState] = useState('');

  const activeQuestionIndex = AnswerState === '' ? userAnswers.length : userAnswers.length - 1 ;

  const questionNumber = activeQuestionIndex + 1;

  const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;

  //function that sets the slected useranswer
  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(
    SelectedAnswer
  ) {
    setAnswerState('answered');
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, SelectedAnswer];
    });
 setTimeout(() => {
    if (SelectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
        setAnswerState('correct');
    }else {
        setAnswerState('wrong');
    }
    setTimeout(() => {
        setAnswerState('');
    },2000);
 },1000);
  },
  [activeQuestionIndex]);

  const handleSkipUnAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

  if (isQuizCompleted) {
    return (
      <div id="summary">
        <img src={tropyimg} alt="tropy" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Questions 
      key={activeQuestionIndex}
      questionText={QUESTIONS[activeQuestionIndex].text}
       answers={QUESTIONS[activeQuestionIndex].answers} 
      OnSelectAnswer={handleSelectedAnswer}
      selectedAnswer={userAnswers[userAnswers.length - 1]}
      AnswerState={AnswerState}
      OnSkipUnAnswer={handleSkipUnAnswer}
      questionNumber={questionNumber}/>
    </div>
  );
}
