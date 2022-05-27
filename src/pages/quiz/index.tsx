
import React, {useState, useEffect} from 'react';
import { Container, SectionWrapper, Typography } from 'components';
import { Loader } from './elements/Loader';
import {QuizNav} from './sections';
import {QuizCardCheckbox, QuizCardRadio } from './elements';
import { useSelector } from 'react-redux';
import { fetchQuestions } from 'state/thunks';
import { useAppDispatch } from 'state/store';
import { selectCurrentQuestion, selectQuizQuestion, selectStatus } from 'state/selectors';
import { QuestionState } from 'state/types';
import { DefaultButton } from 'components/buttons/DefaultButton';
import { decrementCurrentQuestion } from 'state/slice';




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

const handleBack = () => {
  dispatch(decrementCurrentQuestion());
}

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
    <>
   {
     status == 'success' && currentQuestion ? 
     <>
     {
       currentStep > 0 ? <DefaultButton type="button" onClick={handleBack}>Back</DefaultButton> : ""
     }
      <QuizNav totalQuestions={totalQuestions} currentStep={currentStep}/> 
        <SectionWrapper>
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
        </SectionWrapper> 
    </>
     :
    <Loader/>
   }

</>
  )
}

export default Quiz
