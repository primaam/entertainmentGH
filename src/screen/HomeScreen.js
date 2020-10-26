import React from 'react';
import axios from 'axios';
import {StyleSheet, View, Text, FlatList, Image, ScrollView} from 'react-native';
import PromotionItem from '../component/PromotionItemComponent';
import WeatherItem from '../component/WeatherItemComponent';
import JokesItem from '../component/JokesItemComponent';

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            listPromotions: [],
            listJokes: [],
                selectedJokes: {
                    id: '',
                    jokes: ['', ''], 
                },
            listWeather: [],
                selectedWeather: {
                    location: '',
                    short_note: '',
                    suhu: '',
                    kelembaban: '',
                    angin: '',
                    presipitasi: '',
                }
        }
    };
    
    componentDidMount(){
        //call axios
        //carousel
        axios ({
            method: 'GET',
            url: 'http://localhost:5000/promotions',
        })
        .then ((res) =>{
            this.setState ({
                listPromotions: res.data,
            });
        })
        .catch((err) =>{
            console.error('CAROUSEL'); 
        });

        //jokes
        axios ({
            method: 'GET',
            url: 'http://localhost:5000/jokes',
        })
        .then ((res) => {
            this.setState ({listJokes: res.data});
            this.timerJokes = setInterval (() => {
                const randomNumber = Math.floor ( Math.random() * this.state.listJokes.length
                );
                this.setState ({selectedJokes: this.state.listJokes[randomNumber]});
            }, 5000);
        })
        .catch((err) =>{
            console.error('JOKES');  
        });

        //Weather 
        axios ({
            method: 'GET',
            url: 'http://localhost:5000/weather',
        })
        .then ((res) =>{
            this.setState ({listWeather: res.data});
            this.timerWeather = setInterval (() => {
                const randomNumber = Math.floor (Math.random() * this.state.listWeather.length
                );
                this.setState ({selectedWeather: this.state.listWeather[randomNumber]});
            }, 5000);
        })
        .catch((err)=> {
            console.error('WEATHER'); 
        });
    }

    //will unmount nih
    componentWillUnmount(){
        clearInterval(this.timerJokes);
        clearInterval(this.timerWeather);
    }

    //masuk ke render
    render (){
        return (
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.headerImage}>
                        <Image
                            source= {require('/home/prima/glints/projectbelajar/tugas21okt/entertainment/RNproject/img/1.jpg')}
                            style= {styles.profilImage}
                        /> 
                    </View>
                    <View style= {styles.headerTitle}>
                        <Text style= {styles.titleText}> Hi, Prima Anugerah Maharyono</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    {/* carousel */}
                    <FlatList
                        pagingEnabled={true}
                        Horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data= {this.state.listPromotions}
                        renderItem= {({item}) => (
                            <PromotionItem url={item.url} Image={item.preview_image}/>
                        )}
                        keyExtractor = {(item)=> String(item.id)}
                    />
                    {/* jokes */}
                    <View style={styles.itemJokes}>
                        <View style={styles.jokesHeader}>
                            <Text>Jokes For You</Text>
                            <Text>See All</Text>
                        </View>
                        <View>
                            <JokesItem
                            pertanyaan={this.state.selectedJokes.jokes[0]}
                            jawaban= {this.state.selectedJokes.jokes[1]}
                            />
                        </View>
                    </View>
                    {/* Weather */}
                    <FlatList
                        pagingEnabled={true}
                        Horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data= {this.state.listWeather}
                        renderItem= {({item}) => (
                            <WeatherItem url={item.url} Image={item.preview_image}/>
                        )}
                        keyExtractor = {(item, key)=> String(key)}
                    />
                </View>
            </ScrollView>
        );
    }
    
}

const styles= StyleSheet.create ({
    header:{
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white'
    },
    headerImage:{
        marginHorizontal: 10,
    }, 
    profilImage:{
        width: 30,
        height: 30,
    },
    headerTitle:{
        justifyContent: 'center',
    },
    titleText:{
        fontFamily: 'segoe-ui',
        fontWeight: 'bold',
        color: '#3333',
        fontSize: 15,
    },
    body:{
        padding: 10,
        backgroundColor: '#ffffff',
    },
    itemJokes:{
        marginVertical: 10,
    },
    jokesHeader:{
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});