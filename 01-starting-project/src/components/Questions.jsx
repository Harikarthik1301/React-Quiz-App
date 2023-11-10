import QuestionTimer from "./QuestionTimer";
import Answer from "./Answers";
import QUESTIONS from "../questions.js";

export default function Questions({
    questionText,
     answers,
      OnSelectAnswer, 
      selectedAnswer,
      AnswerState,
      OnSkipUnAnswer,
      questionNumber}){

    return(
        <div id="question">
        <h2>Question no : {`${questionNumber}/${QUESTIONS.length}`}</h2>
        <QuestionTimer timeout={10000} OnTimeout={OnSkipUnAnswer} />
        <h2>{questionText}</h2>
       <Answer 
       answers={answers}
       selectedAnswer={selectedAnswer}
       AnswerState={AnswerState}
       OnSelect ={OnSelectAnswer}/>
      </div>
    );
}