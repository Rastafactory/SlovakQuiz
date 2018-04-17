import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    render() {
        return(
            <View >
                <Header headerText="Authentication"/>
                <Text>SlovakQuiz</Text>
                <LoginForm/>
            </View>
        );
    }
}

export default App;