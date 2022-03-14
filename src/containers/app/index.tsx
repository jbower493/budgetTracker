import React from 'react';
import { store } from '../../store';
import { Provider } from 'react-redux';
import AppView from './app';

const App = () => {
    return (
        <Provider store={store}>
            <AppView />
        </Provider>
    );
}

export default App;