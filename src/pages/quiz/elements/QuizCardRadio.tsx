import React from 'react'
import { QuizCardStyled } from './QuizCardStyled'
import { QuizQuestionType }  from '../../../typings/generalTypes';
import {Typography} from '../../../components';

interface QuizStyled {
  questionData: QuizQuestionType;
  }

const QuizCardRadio: React.FC<QuizStyled> = ({questionData}) => {
  console.log("hi")
  return (
    <QuizCardStyled backgroundColor='secondary'>
      <Typography type="h3">{questionData.question}</Typography>
      <Typography>{questionData.caption ? questionData.caption : "Pick the one which suits you best"}</Typography>
    </QuizCardStyled>
  )
}

export default QuizCardRadio