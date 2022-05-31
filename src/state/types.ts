// import { rootReducer } from "./store";
import { Statuses } from "typings/generalTypes";
import { rootReducer, store } from "./store";


// export type QuestionTypes = "checkbox" | "radio";



export interface SelectedAnswersType {
    id: number, 
    answers: Array<number>
}

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
    isCompleted: boolean,
    // answers: SelectedAnswersType[],
}

// export type AppState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof rootReducer>