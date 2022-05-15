import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, {AxiosResponse} from 'axios';


const url = "https://raw.githubusercontent.com/sezaite/ynvo-quiz-data/main/data.json";
const fetchQuestionsPrefix = 'quiz/GET_QUESTIONS';

 export const fetchQuestions = createAsyncThunk(fetchQuestionsPrefix, async () => {
         try {
             const {data}: AxiosResponse = await axios.get(url);
             return data;
         } catch (e) {
             //pagalvoti error handlinima
             console.log(e);
         }

     }
 );

 