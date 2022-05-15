import { rootReducer } from "./store";
import { Statuses } from "typings/generalTypes";
import { store } from "./store";


// export type QuestionTypes = "checkbox" | "radio";

export interface AnswerType {
    id: number,
    answer: string,
    isSelected: boolean,
}

export interface QuestionState {
    id: number,
    type: "checkbox" | "radio",
    question: string,
    caption?: string,
    answers: AnswerType[],
}

export interface QuizState {
    currentQuestion: number,
    status: Statuses,
    questions: QuestionState[],
}

export type AppState = ReturnType<typeof store.getState>;