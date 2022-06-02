import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, {AxiosResponse} from 'axios';

const url = "https://raw.githubusercontent.com/sezaite/ynvo-quiz-data/main/data.json";

// const url = "page-data/quiz/quiz.json";
const fetchQuestionsPrefix = 'quiz/GET_QUESTIONS';

 export const fetchQuestions = createAsyncThunk(fetchQuestionsPrefix, async () => {
         try {
             const {data}: AxiosResponse = await axios.get(url);
             return data;
         } catch (e) {
             //TODO:apgalvoti error handlinima
             console.log(e);
         }

     }
 );

 