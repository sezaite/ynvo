import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { fetchQuestions } from "./thunks";
import { QuizState, QuestionState, AnswerType, SelectedAnswersType } from "./types";

export const initialState: QuizState = {
  questions: [],
  currentQuestion: 0,
  status: "idle",
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setAnswers: (state, actions: PayloadAction<QuestionState>) => {
                if (actions.payload) {
                   state.questions[actions.payload.id - 1] = {
                       ...actions.payload
                   }
                }
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

export const { setAnswers, incrementCurrentQuestion, decrementCurrentQuestion } = quizSlice.actions;
export default quizSlice.reducer;


