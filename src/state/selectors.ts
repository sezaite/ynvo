import { AppState } from './types';

export const selectCurrentQuestion = (state: AppState) => state.quiz.currentQuestion;
export const selectQuizAnswersData = (state: AppState) => state.quiz.questions;