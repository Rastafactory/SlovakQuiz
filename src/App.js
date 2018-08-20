import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import reducers from './reducers'

class App extends Component {

    componentWillMount() {
        // Initialize Firebase
        firebase.initializeApp({
            apiKey: 'AIzaSyDZ3amtKqYBs_dUHw4ZUSBHQ1jvXnvu4_o',
            authDomain: 'slovakquiz-65826.firebaseapp.com',
            databaseURL: 'https://slovakquiz-65826.firebaseio.com',
            projectId: 'slovakquiz-65826',
            storageBucket: 'slovakquiz-65826.appspot.com',
            messagingSenderId: '881355837024'
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View >
                    {/* <Header headerText="Authentication" /> */}
                    <Text>SlovakQuiz</Text>
                    {/* <LoginForm /> */}
                </View>
            </Provider>
        );
    }
}

export default App;