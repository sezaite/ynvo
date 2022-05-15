import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
// import { combineReducers, CombinedState, AnyAction } from 'redux';
import { QuizState } from './types';
import quizSlice from './slice';
import { useDispatch } from 'react-redux';


export interface RootState {
    quiz: QuizState;
}

// const combinedReducer = combineReducers<CombinedState<RootState>>({
//    quiz: quizSlice.reducer,
// });

// export const rootReducer = (state: any, action: AnyAction) => {
//     combinedReducer(state, action);
// }

export const store = configureStore({
    reducer: {
        quiz: quizSlice.reducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

