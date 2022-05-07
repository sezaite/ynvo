import { Typography } from 'components';
import React from 'react'
import { QuizCardStyled } from './QuizCardStyled'
import { QuizQuestionType }  from '../../../typings/generalTypes';

interface QuizStyled {
  questionData: QuizQuestionType;
}
//kodel negaliu propso tipizuoti funkcijos viduje? ir turiu kurti interfeisa?
const QuizCardRadio: React.FC<QuizStyled> = ({questionData}) => {
  return (
    <QuizCardStyled backgroundColor='primary'>
      <Typography type="h3">{questionData.question}</Typography>
      <Typography>{questionData.caption ? questionData.caption : "Pick a few"}</Typography>
    </QuizCardStyled>
  )
}

export default QuizCardRadio