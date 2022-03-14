import { configureStore } from '@reduxjs/toolkit';
import budgetsReducer from '../containers/budgets/budgetsSlice';

export const store = configureStore({
    reducer: {
        budgets: budgetsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;