type budget = {
    name: string
}

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
        }
    ]

    return (
        <ul>
            {budgets.map((budget, index) => (<li key={index}>{budget.name}</li>))}
        </ul>
    );
};

export default BudgetsViewWeb;