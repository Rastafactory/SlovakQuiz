import React, { Component } from 'react';
// import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import LoginForm from './components/LoginForm';
import MenuPage from './components/MenuPage';
import {createStackNavigator} from 'react-navigation';


export default class App extends Component {

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
        const storeTo = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={storeTo}>
                <AppStackNavigator />
            </Provider>
        );
    }
}

const AppStackNavigator = createStackNavigator({
    Login: LoginForm,
    Home: MenuPage
});