import { SectionWrapper } from 'components';
import React from 'react'
import QuizCardCheckbox from '../elements/QuizCardCheckbox';
import QuizCardRadio from '../elements/QuizCardRadio';
import QuizCheckboxOption from '../elements/QuizCheckboxOption';
import { QuizQuestionType }  from '../../../typings/generalTypes';

interface QuizWrapProps {
    quizData: Array<QuizQuestionType>;
    currentQuestion: number;
    setCurrentQuestion: React.Dispatch<React.SetStateAction<string>>
}


//REACT.FC naudojimas cia meta keista klaida
export const MainQuizSection = ({quizData, currentQuestion, setCurrentQuestion}: QuizWrapProps) => {
  const question = quizData[currentQuestion];
          switch(question.type) {
              case 'checkbox':
                 return <SectionWrapper backgroundColor='primaryquiz'><QuizCardCheckbox key={question.id} questionData={question}/></SectionWrapper>
                break;
              case 'radio':
                return <SectionWrapper backgroundColor='primaryquiz'><QuizCardRadio key={question.id} questionData={question}/></SectionWrapper>
                break;
              default:
                console.log(`Error: no type`);
            }

        }
  


