import { View, Text } from 'react-native';
import type { budget } from './budgetsSlice';

const BudgetsViewNative = () => {

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
        },
        {
            name: 'One for the native'
        }
    ]

    return (
        <View>
            {budgets.map((budget, index) => (<Text key={index}>{budget.name}</Text>))}
        </View>
    );
};

export default BudgetsViewNative;