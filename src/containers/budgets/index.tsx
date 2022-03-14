import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import type { RootState } from '../../store';
import BudgetsView from './budgets';
import { addBudget, removeBudget, budget } from './budgetsSlice';

const Budgets = () => {
    const budgets = useAppSelector((state: RootState) => state.budgets.budgets);
    const dispatch = useAppDispatch();

    const handleAddBudget = (budget: budget) => dispatch(addBudget(budget));
    const handleRemoveBudget = (index: number) => dispatch(removeBudget(index));

    return (
        <BudgetsView budgets={budgets} add={handleAddBudget} remove={handleRemoveBudget} />
    );
};

export default Budgets;