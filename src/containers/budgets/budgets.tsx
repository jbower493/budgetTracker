import React from 'react';
import type { budget } from './budgetsSlice';

const BudgetsViewWeb = () => {

    const budgets: budget[] = [
        {
            name: 'Food'
        },
        {
            name: 'Utilities'
        },
        {
            name: 'Transport'
        },
        {
            name: 'Going out'
        }
    ]

    return (
        <ul>
            {budgets.map((budget, index) => (<li key={index}>{budget.name}</li>))}
        </ul>
    );
};

export default BudgetsViewWeb;