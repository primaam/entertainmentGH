import React from 'react';
import HomeScreen from '../screen/HomeScreen';
import OtherPage from '../screen/OtherPage';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator ();

export default function DashboardStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='Other' component={OtherPage}/>
        </Stack.Navigator>
    )
}