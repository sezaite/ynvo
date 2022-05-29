
import React, {useState, useEffect} from 'react';
import { Container, SectionWrapper, Typography, Image, Loader, Box, FlexWrapper } from 'components';
import {QuizNav} from './sections';
import {QuizCardCheckbox, QuizCardRadio } from './elements';
import { useSelector } from 'react-redux';
import { fetchQuestions } from 'state/thunks';
import { useAppDispatch } from 'state/store';
import { selectCurrentQuestion, selectQuizQuestion, selectStatus } from 'state/selectors';
import { QuestionState } from 'state/types';
import { DefaultButton } from 'components/buttons/DefaultButton';
import { decrementCurrentQuestion } from 'state/slice';
import styled from 'styled-components/macro'
import { CalculatingResults } from './sections/CalculatingResults';




const Quiz: React.FC = () => {
const dispatch = useAppDispatch();
const status = useSelector(selectStatus);
const currentStep = useSelector(selectCurrentQuestion);
const questions = useSelector(selectQuizQuestion);
const [currentQuestion, setCurrentQuestion] = useState<QuestionState>();
const [showCalculations, setShowCalculations] = useState(false);
const totalQuestions = questions.length;
const [isLast, setIsLast] = useState(false);
const [count, setCount] = useState(0);



useEffect(() => {
    dispatch(fetchQuestions());
}, []);



  useEffect(() => {
    setCurrentQuestion(questions[currentStep]);
    setCount(1);
}, [status, currentStep]);

useEffect(()=> {
  if (count) {
    if ((totalQuestions - currentStep) < 2){
      setIsLast(true);
    }
   
    ((totalQuestions - currentStep) < 1) && setShowCalculations(true);
  }
 
}, [currentQuestion])


  return (
      <SectionWrapper backgroundColor='primary'>
            {
            
              status == 'success' && currentQuestion ? 
            <>
              <AbsoluteImageLines src="shape1" alt="decoration shape"></AbsoluteImageLines>
              <AbsoluteImageCircle src="shape2" alt="decoration shape"></AbsoluteImageCircle>
                <QuizNav totalQuestions={totalQuestions} currentStep={currentStep}/> 
                
                    <Container>
                      <Typography type="h3" textAlign="center" mb="s60">{currentQuestion['question']}</Typography>
                    
                      {
                        currentQuestion.type == "checkbox" ?
                        <Container>
                              <QuizCardCheckbox isLast={isLast} questionData={currentQuestion}></QuizCardCheckbox>
                        </Container>
                      
                        :
                        <Container>
                          <QuizCardRadio isLast={isLast} questionData={currentQuestion}/>
                        </Container>
                      }
                    </Container>
            </>
              :
              <CalculatingResults></CalculatingResults>
            }
</SectionWrapper> 

  )
}

export default Quiz

export const AbsoluteImageLines = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0%, -50%);
  z-index: 2;
`
export const AbsoluteImageCircle = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  transform: translate(-50%, -50%);
  z-index: 2;

`
