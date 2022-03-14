import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Budgets from '../budgets';

const AppViewNative = () => {
    return (
        <View style={styles.container}>
            <Budgets />
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue'
    }
});

export default AppViewNative;