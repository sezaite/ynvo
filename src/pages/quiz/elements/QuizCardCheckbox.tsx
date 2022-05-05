import { Typography } from 'components';
import React from 'react'
import { QuizCardStyled } from './QuizCardStyled'

export interface QuizCardProps {
    question?: string;
    answers?: Array<string>;
    caption?: string;
}

const QuizCardCheckbox: React.FC<QuizCardProps> = ({question, answers, caption}) => {
  return (
    <QuizCardStyled backgroudColor='deepBlue'>
        <Typography type='h3'>{question}</Typography>
        <Typography type='caption12'> { caption ? caption : 'Select multiple answers'}</Typography>

    </QuizCardStyled>
  )
}

export default QuizCardCheckbox