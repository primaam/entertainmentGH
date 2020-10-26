import React from 'react';
import {StyleSheet, Image, Linking, TouchableOpacity} from 'react-native';

export default class PromotionItem extends React.Component{
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
                <Image source= {{uri: this.props.Image}} style={styles.imageCarousel}/>
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
    imageCarousel:{
        width: 300,
        height: 170,
        borderRadius: 15,
    },
});