import { Box, Container, FlexWrapper, Typography, BackButton } from 'components'
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
    <Box pt="s24" zIndex='upperElement' position='relative'>
      <Container>
        <QuizNavigation>
          <QuizProgress style={{width: `${ ((currentStep + 1)* 100) / 5}%`}}></QuizProgress>
        </QuizNavigation>
        <FlexWrapper justifyContent="space-between">
          {
            currentStep > 0 ? <BackButton backgroundColor='transparent' color='dark' type="button" onClick={handleBack}>Back</BackButton> : ""
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
  position: relative;
  width: 100%;
  border-radius: 6.25rem;
  height: 1.375rem;
  margin-bottom: 1.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 1px 22px 5px rgb(179 167 167 / 26%)
`

const QuizProgress = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3 ease in;
  background-color:  ${({ theme }) => theme.colors.accent};
  height: 100%;
  border-radius: 6.25rem;
  
  
`

