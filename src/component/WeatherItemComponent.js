import React from 'react';
import {StyleSheet, Linking, TouchableOpacity} from 'react-native';

export default class WeatherItem extends React.Component{
    constructor(props){
        super(props);
    }

    // langsung render
    render (){
        return (
            <TouchableOpacity
                key={this.props.index}
                style= {StyleSheet.itemContainer}
                onPress={()=> {
                    Linking.openURL(this.props.url);
                }}>
            </TouchableOpacity>
        );
    }
}

const styles= StyleSheet.create({
    itemContainer:{
        backgroundColor: 'white',
        borderRadius: 15,
        margin: 10,
        width: 330,
        height: 170,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height:3},
        shadowOpacity: 0.5,
        shadowRadius: 15,
    },
});