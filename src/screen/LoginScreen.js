
import React from'react';
import {Button} from 'react-native';

export default function LoginScreen(props){
    return (
        <Button onPress={()=> props.navigation.navigate('Main')} title='Masuk'>

        </Button>
    )
    
}