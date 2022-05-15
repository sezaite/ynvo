import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { fetchQuestions } from "./thunks";
import { QuizState, QuestionState, AnswerType } from "./types";

const initialState: QuizState = {
  questions: [],
  currentQuestion: 0,
  status: "idle",
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setAnswers: (state: any, actions: PayloadAction<AnswerType>) => {
           
        },
        incrementCurrentQuestion: (state) => {
            state.currentQuestion++;
        },
        decrementCurrentQuestion: (state) => {
            state.currentQuestion--;
        }

    },
    extraReducers: (builder) => {
		builder.addCase(
			fetchQuestions.fulfilled,
			(state: any, action: PayloadAction<QuizState['questions']>) => {
				if (action.payload) {
					state.questions = action.payload;
					state.status = 'success';
				}
			}
		);
		builder.addCase(fetchQuestions.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(fetchQuestions.rejected, (state) => {
			state.status = 'error';
		});
		
	},
}); 

export const { incrementCurrentQuestion, decrementCurrentQuestion } = quizSlice.actions;
export default quizSlice;


