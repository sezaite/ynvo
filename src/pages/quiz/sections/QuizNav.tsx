import { Box, Container, FlexWrapper, Typography } from 'components'
import { DefaultButton } from 'components/buttons/DefaultButton';
import React from 'react';
import { decrementCurrentQuestion } from 'state/slice';
import { useAppDispatch } from 'state/store';
import styled from 'styled-components/macro';

interface NavProps {
  totalQuestions: number;
  currentStep: number;
}

export const QuizNav:React.FC<NavProps> = ({totalQuestions, currentStep}) => {
    const dispatch = useAppDispatch();
    const handleBack = () => {
    dispatch(decrementCurrentQuestion());
  }

  return (
    <Box backgroundColor='primary' pt="s24">
      <Container>
        <QuizNavigation>
          <QuizProgress style={{width: `${ ((currentStep + 1)* 100) / 5}%`}}></QuizProgress>
        </QuizNavigation>
        <FlexWrapper justifyContent="space-between">
          {
            currentStep > 0 ? <DefaultButton backgroundColor='transparent' color='dark' type="button" onClick={handleBack}>Back</DefaultButton> : ""
          }
          <Typography>
            {currentStep + 1} / {totalQuestions}
          </Typography>
        </FlexWrapper>
      </Container>
    </Box>
  )
}

const QuizNavigation = styled(Box)`
  width: 100%;
  border-radius: 6.25rem;
  height: 1.375rem;
  margin-bottom: 1.25rem;
  background-color: ${({ theme }) => theme.colors.light};
  position: relative;
`

const QuizProgress = styled(Box)`
  position: absolute;
  background-color:  ${({ theme }) => theme.colors.accent};
  height: 100%;
  transition: all 0.3 ease in;
  top: 0;
  left: 0;
  border-radius: 6.25rem;
  
  
`

