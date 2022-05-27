import { Box, Container, Typography } from 'components'
import React from 'react'

interface NavProps {
  totalQuestions: number;
  currentStep: number;
}

export const QuizNav:React.FC<NavProps> = ({totalQuestions, currentStep}) => {
  return (
    <Container>
      <Box>
        <Typography>
           {currentStep + 1} / {totalQuestions}
        </Typography>
      </Box>
    </Container>
  )
}

