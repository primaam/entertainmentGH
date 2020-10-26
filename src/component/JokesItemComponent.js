import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class JokesItem extends React.Component{
    constructor(props){
        super(props);
    }

    // render ya
    render (){
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemPertanyaan}>{this.props.pertanyaan}</Text>
                <Text style={styles.itemJawaban}>{this.props.jawaban}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
      backgroundColor: 'white',
      borderRadius: 15,
      margin: 10,
      padding: 20,
      alignItems: 'stretch',
      height: 130,
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.5,
      shadowRadius: 15,
    },
    itemPertanyaan: {
      fontFamily: 'sego-ui',
      fontSize: 18,
      fontWeight: 'bold',
    },
    itemJawaban: {
      fontFamily: 'sego-ui',
      fontSize: 18,
      fontStyle: 'italic',
    },
  });
    