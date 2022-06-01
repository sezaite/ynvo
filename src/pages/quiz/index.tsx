
import React, {useState, useEffect} from 'react';
import { Container, SectionWrapper, Typography, Loader, Box, AbsoluteImageCircle, AbsoluteImageLines } from 'components';
import {QuizNav, CalculatingResults} from './sections';
import {QuizCardCheckbox, QuizCardRadio } from './elements';
import { useSelector } from 'react-redux';
import { fetchQuestions } from 'state/thunks';
import { useAppDispatch } from 'state/store';
import { selectCurrentQuestion, selectQuizQuestion, selectStatus, selectIsQuizCompleted } from 'state/selectors';
import { QuestionState } from 'state/types';
import { navigate } from 'gatsby';


const Quiz: React.FC = () => {
const dispatch = useAppDispatch();
const status = useSelector(selectStatus);
const isQuizCompleted = useSelector(selectIsQuizCompleted);
const currentStep = useSelector(selectCurrentQuestion);
const questions = useSelector(selectQuizQuestion);
const [currentQuestion, setCurrentQuestion] = useState<QuestionState>();
const [showCalculations, setShowCalculations] = useState(false);
const totalQuestions = questions.length;
const [isLast, setIsLast] = useState(false);
const [count, setCount] = useState(0);



useEffect(() => {
    isQuizCompleted ? navigate('/summary') : dispatch(fetchQuestions());
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
   if ((totalQuestions - currentStep) < 1) {
    setShowCalculations(true);
   }
  }
 
}, [currentQuestion])


  return (
      <SectionWrapper height='100vh' background='lightGradient' overflow='hidden'>
            {
            
              status == 'success' && currentQuestion ? 
            <>
              <AbsoluteImageLines width='100%' src="shape1" alt="decoration shape"></AbsoluteImageLines>
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
              showCalculations ? <CalculatingResults></CalculatingResults> : <Box width='5rem' height='5rem' mx='auto'><Loader></Loader></Box>
              
            }
</SectionWrapper> 

  )
}

export default Quiz

