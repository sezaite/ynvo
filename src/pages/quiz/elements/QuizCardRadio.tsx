import React, { useEffect, useState } from 'react'
import { QuestionState, AnswerType } from 'state/types';
import { QuizCardStyled, QuizSelectOption } from '.';
import {GridWrapper, Typography} from '../../../components';
import {incrementCurrentQuestion, decrementCurrentQuestion, setAnswers} from 'state/slice';
import { theme } from 'styles/theme';
import { selectCurrentQuestion, selectQuizQuestion } from 'state/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch } from 'state/store';
import { DefaultButton } from 'components/buttons/DefaultButton';

interface QuizStyled {
  questionData: QuestionState;
  setCurrentStep?: React.Dispatch<React.SetStateAction<number>>;
  isLast: boolean;
  }
  
export const QuizCardRadio: React.FC<QuizStyled> = ({questionData, isLast}) => {
  const [question, setQuestion] = useState(questionData);
  const [answers, setQuizAnswers] = useState(questionData.answers);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const dispatch = useAppDispatch();
  const onClickOption = (selectedID:number) => {
  setIsButtonDisabled(false);
  setQuizAnswers((prevState)=> {
    return prevState.map((answer) => {
      const updatedAnswer = {...answer};
      selectedID == answer.id ? updatedAnswer.isSelected = true : updatedAnswer.isSelected = false;
      return updatedAnswer;
    })
  });

  !isLast && dispatch(incrementCurrentQuestion());
}

const finishQuiz = () => {
  dispatch(incrementCurrentQuestion());
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
    })
  }, [answers]);

   useEffect(()=>{
    dispatch(setAnswers(question));
  }, [question]);




  return (
    <QuizCardStyled backgroundColor='primary' border='1px solid red'>
      <Typography textAlign="center" mb="s24">{questionData.caption ? questionData.caption : "Pick the one which suits you best"}</Typography>
      <Typography>{questionData.id}</Typography>
      <GridWrapper gridGap="16px" gridTemplateColumns={questionData.answers.length > 3 ? "1fr 1fr" : "1fr"}> 
      {
     question.answers.map(({ answer, id, isSelected })=>(
      
          <QuizSelectOption isSelected={isSelected} key={id} option={answer} id={id} onClickOption={onClickOption}></QuizSelectOption>
      ))
        }
        </GridWrapper>
        {
        isLast &&  <DefaultButton isDisabled={isButtonDisabled} type="button" onClick={finishQuiz}>Finish quiz</DefaultButton>
        }



    </QuizCardStyled>
  )
}
