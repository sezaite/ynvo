
import React, {useState, useEffect} from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import useFetch from 'components/hooks/useFetch';
import { ContainerLG, Container, SectionWrapper } from 'components';
import { Loader } from './elements/Loader';
import { theme } from 'styles/theme';
import QuizCardCheckbox from './elements/QuizCardCheckbox';
import {QuizFooter, QuizNav, MainQuizSection} from './sections';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuestions } from 'state/thunks';
import { useAppDispatch } from 'state/store';
import { DefaultButton } from 'components/buttons/DefaultButton';
import { selectCurrentQuestion } from 'state/selectors';
import { incrementCurrentQuestion, decrementCurrentQuestion } from 'state/slice';



const Quiz: React.FC = () => {
const dispatch = useAppDispatch();
const currentQuestion = useSelector(selectCurrentQuestion);

const incre = ()=> {
  console.log(currentQuestion);
  dispatch(incrementCurrentQuestion());
}

const decre = ()=> {
  console.log(currentQuestion);
  dispatch(decrementCurrentQuestion());
}
  
  useEffect(() => {
		dispatch(fetchQuestions());
   
	}, []);



  return (
      <>
    <QuizNav/> 
    <DefaultButton onClick={() => incre()}>
					Increment
				</DefaultButton>
    <QuizFooter/>
    <DefaultButton onClick={() => decre()}>
					Decrement
				</DefaultButton>
    <QuizFooter/>
    </>
  )
}

export default Quiz
