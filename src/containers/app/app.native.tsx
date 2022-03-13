import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const AppViewNative = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome to the Native App!</Text>
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