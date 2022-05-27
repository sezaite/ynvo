import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { combineReducers, CombinedState, AnyAction } from 'redux';
import quizSlice from './slice';
import { QuizState } from './types';
import { persistReducer, persistStore } from 'redux-persist';
import localStorage from 'redux-persist/es/storage';
import sessionStorage from 'redux-persist/es/storage/session';

export interface RootState {
	quiz: QuizState;
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
	quiz: quizSlice,
});

export const rootReducer = (state: any, action: AnyAction) =>
	combinedReducer(state, action);

const persistConfig = {
	key: 'quiz_data',
	storage: sessionStorage,
	blacklist: ['config'],
	whitelist: ['quiz'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(
		{serializableCheck: false}
	),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();