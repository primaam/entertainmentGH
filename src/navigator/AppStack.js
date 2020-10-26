import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainNavigator from './MainNavigator';
import LoginScreen from '../screen/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
const Stack = createStackNavigator();

export default function AppStack (){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={LoginScreen}/>
                <Stack.Screen name='Main' component={MainNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}