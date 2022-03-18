import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../containers/register/api';
import budgetsReducer from '../containers/budgets/budgetsSlice';

export const store = configureStore({
    reducer: {
        budgets: budgetsReducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;