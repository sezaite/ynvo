
import React, {useState, useEffect} from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import useFetch from 'components/hooks/useFetch';
import { ContainerLG, Container, SectionWrapper } from 'components';
import { Loader } from './elements/Loader';
import { theme } from 'styles/theme';
import QuizCardCheckbox from './elements/QuizCardCheckbox';
import {QuizFooter, QuizNav, MainQuizSection} from './sections';
import { QuizQuestionType } from 'typings/generalTypes';


const Quiz: React.FC = () => {
    const [quizData, setQuizData] = useState<Array<QuizQuestionType>>([]);//nezinau, ar sito prireiks
    const { data, isFetching, error } = useFetch(`page-data/quiz/quiz.json`);

    const [currentQuestion, setCurrentQuestion] = useState<number>(0);

    useEffect(() => {
        if (data !== null) {
            setQuizData(data)
        }
    }, [data]);
  return (
      <>
    <QuizNav/> 
        {isFetching ? <Loader/> : <MainQuizSection currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} quizData={quizData}></MainQuizSection>}
    <QuizFooter/>
    </>
  )
}

export default Quiz
