import React, { useState } from 'react';
import type { budget } from './budgetsSlice';

interface BudgetsViewProps {
    budgets: budget[];
    add: (budget: budget) => void;
    remove: (index: number) => void;
};

const BudgetsViewWeb = ({ budgets, add, remove }: BudgetsViewProps) => {
    const [newBudget, setNewBudget] = useState('');

    return (
        <div>
            <ul>
                {budgets.map((budget, index) => (
                    <li key={index}>
                        {budget.name}
                        <button onClick={() => remove(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <label htmlFor="new-budget">New Budget Name</label>
            <input id="new-budget" type="text" onChange={e => setNewBudget(e.target.value)} value={newBudget} />
            <button onClick={() => add({ name: newBudget })}>Add</button>
        </div>
    );
};

export default BudgetsViewWeb;