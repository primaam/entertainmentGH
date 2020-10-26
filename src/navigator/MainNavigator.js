import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();

import TodoScreen from '../screen/TodoScreen';
import BlankPage from '../screen/BlankPage';
import DashboardStack from '../navigator/DashboardStack';

export default function MainNavigator (){
    return (
        <Tab.Navigator>
            <Tab.Screen name='Dashboard' component={DashboardStack}/>
            <Tab.Screen name='BlankPage' component={BlankPage}/>
            <Tab.Screen name='ToDo' component={TodoScreen}/>
        </Tab.Navigator>
    )
}