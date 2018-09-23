import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import {Text} from 'react-native'
import { connect } from 'react-redux';

class MenuPage extends Component {

    static navigationOptions = {
        title: 'Menu',
        headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
      }

    render() {
        return (
            <Card>
                <CardSection>
                    <Text>Hello from MENU</Text>
                    <Button onPress={() => this.props.navigation.navigate('Login')}>
                        Back to Log In
                    </Button>
                    <Text>{this.props.email}</Text>
                </CardSection>
            </Card>
        );
    }
}

// Map to state a connect treba spravit vsade, kde chcem narabat so statom
const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        email: state.auth.email
    };
}

export default connect(mapStateToProps, {})(MenuPage);