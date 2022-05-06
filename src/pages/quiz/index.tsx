
import React, {useState, useEffect} from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import useFetch from 'components/hooks/useFetch';
import { ContainerLG, Container, SectionWrapper } from 'components';
import { Loader } from './elements/Loader';
import { theme } from 'styles/theme';
import QuizCardCheckbox from './elements/QuizCardCheckbox';



const Quiz: React.FC = () => {

    const [quizData, setQuizData] = useState<Array<object>>();
    const { data, isFetching, error } = useFetch(`page-data/quiz/quiz.json`);

    useEffect(() => {
        if (data !== null) {
            setQuizData(data);
            console.log(quizData);
        }
    }, [data]);
    
    return (
            <SectionWrapper backgroundColor='primaryquiz'>
            {isFetching ? <Loader></Loader> : <QuizCardCheckbox></QuizCardCheckbox>}
            <Container backgroundColor='secondary'></Container>
            <ContainerLG backgroundColor='deepblue'></ContainerLG>
            </SectionWrapper>
           
    )
  
}

export default Quiz