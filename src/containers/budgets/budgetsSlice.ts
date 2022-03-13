import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type budget = {
    name: string
};

interface BudgetsState {
    budgets: budget[]
};

const initialState: BudgetsState = {
    budgets: []
};

export const budgetsSlice = createSlice({
    name: 'budgets',
    initialState,
    reducers: {
        addBudget: (state, action: PayloadAction<budget>) => {
            state.budgets.push(action.payload);
        },
        removeBudget: (state, action: PayloadAction<number>) => {
            state.budgets.splice(action.payload, 1);
        }
    }
});

export const { addBudget, removeBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;