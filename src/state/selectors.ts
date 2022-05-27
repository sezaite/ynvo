import { AppState } from './types';

export const selectCurrentQuestion = (state: AppState) => state.quiz.currentQuestion;
export const selectQuizQuestion = (state: AppState) => state.quiz.questions;
export const selectStatus = (state: AppState) => state.quiz.status;