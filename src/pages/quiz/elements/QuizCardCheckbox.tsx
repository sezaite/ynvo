import React, { useEffect, useState } from 'react'
import { QuestionState, AnswerType } from 'state/types';
import { QuizCardStyled, QuizSelectOption } from '.';
import {GridWrapper, Typography} from '../../../components';
import {incrementCurrentQuestion, setAnswers} from 'state/slice';
import { useAppDispatch } from 'state/store';
import { DefaultButton } from 'components/buttons/DefaultButton';

interface QuizStyled {
  questionData: QuestionState;
  setCurrentStep?: React.Dispatch<React.SetStateAction<number>>;
  isLast: boolean;
  }
  
export const QuizCardCheckbox: React.FC<QuizStyled> = ({questionData, isLast}) => {
  const [question, setQuestion] = useState(questionData);
  const [answers, setQuizAnswers] = useState(questionData.answers);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const dispatch = useAppDispatch();
  const onClickOption = (selectedID:number) => {
  setQuizAnswers((prevState)=> {
    return prevState.map((answer) => {
      const updatedAnswer = {...answer};
      if (selectedID == answer.id) {
        if (answer.isSelected) {
          updatedAnswer.isSelected = false;
        } else {
          updatedAnswer.isSelected = true;
        }
      }
      return updatedAnswer;
    })
  });
}

useEffect(()=> {
  setQuestion(questionData);
  setQuizAnswers(questionData.answers);
}, [questionData]);

   useEffect(()=>{
    setQuestion((prevState) => {
      const updatedState = {...prevState};
      updatedState.answers = answers;
      return updatedState;
    });
    answers.find((answer) => answer.isSelected) ? setIsButtonDisabled(false) : setIsButtonDisabled(true);
  }, [answers]);

  useEffect(()=>{
    dispatch(setAnswers(question));
  }, [question]);

const submitQuestion = () => {
  !isButtonDisabled && dispatch(incrementCurrentQuestion());
}


  return (
    <QuizCardStyled backgroundColor='light'>
      <Typography textAlign="center" mb="s24">{questionData.caption ? questionData.caption : "Select as many as you want"}</Typography>
      <GridWrapper gridGap="16px" gridTemplateColumns={questionData.answers.length > 3 ? "1fr 1fr" : "1fr"}> 
      {
     question.answers.map(({ answer, id, isSelected })=>(
          <QuizSelectOption isSelected={isSelected} key={id} option={answer} id={id} onClickOption={onClickOption}></QuizSelectOption>
      ))
        }
        </GridWrapper>

      <DefaultButton mt='s24' px='s40' mx='auto' isDisabled={isButtonDisabled} type="button" onClick={submitQuestion}>{isLast? "Find my scent" : "Next"}</DefaultButton>

    </QuizCardStyled>
  )
}
