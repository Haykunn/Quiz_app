import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";
import QuestionCard from "./components/QuestionCard";
import { QuestionsState, Difficulty } from "./API";

// css
import { AllStyle, Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))
  // console.log(questions)

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestion = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestion);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) setScore((prev) => prev + 1)
      // Saving answer in array for useranswers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }

  };

  const nextQuestion = () => {
    const next = number + 1;

    if (next === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(next);
    }

  };

  return (
    <> 
    <AllStyle/>
    <Wrapper>
      <h1> Quizz App ! </h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          {" "}
          Start !
        </button>
      ) : null}
      {!gameOver ? <p className="score"> Score : {score} </p> : null}
      {loading && <p>Loading question ..</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>
        Next question{" "}
      </button>
      ) : null }
      
    </Wrapper>
    </>
  );
}

export default App;
