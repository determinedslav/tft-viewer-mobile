import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Picker,
} from 'react-native';
import {useSelector, useDispatch} from "react-redux";
import {setStats, deleteStat} from '../redux/actions/stats';
import {setLoading} from '../redux/actions/loading';
import Remote from '../remote';
import Layout from '../layout/Layout';
import Colors from '../constants/Colors';
import API from '../constants/Api'
import Label from '../components/Label';
import Button from '../components/Button';
import Card from '../components/Card';

const HomeScreen = () => {    

    const stats = useSelector(state => state.stats);
    const isLoading = useSelector(state => state.loading);
    const dispatch = useDispatch();

    const region = 'eun1';
    const name = 'blackheart10';
    var nameId;

    const setId = (id) => {
        nameId = id;
    };

    const getStats = async () => {
        dispatch(setLoading(true));
        const responseName = await Remote.get(API.protocol + region + API.apiLink + API.nameApi + name + API.key);
        if(responseName && responseName.hasOwnProperty('data')){
            const newCards = responseName.data;
            console.log(newCards);
            setId(newCards.id)
            setTimeout(() =>{
                //dispatch();
                //dispatch(setLoading(false));
            },1000);
        }
        const responseStats = await Remote.get(API.protocol + region + API.apiLink + API.statsApi + nameId + API.key);
        if(responseStats && responseStats.hasOwnProperty('data')){
            const newerCards = responseStats.data;
            console.log(newerCards);
            setTimeout(() =>{
                //dispatch();
                dispatch(setLoading(false));
            },1000);
        }
    };

    useEffect(()=>{
        getStats();
    }, []);

    return ( 
        <Layout>
            <View style={styles.container}>
                <Label text = "Enter username:"/>
                <TextInput style ={styles.input}/>
                <Label text = "Select region:"/>
                <Picker style ={styles.picker}>
                    <Picker.Item label="EU Nordic and East" value="eun1" />
                    <Picker.Item label="EU West" value="euw1" />
                </Picker>
                <Button style={styles.button} title="Search" />
            </View>
            <Card region = "EU Nordic and East" name = "BlackHeart10" rank = "Platinum" division = "II" wins = "13" lp = "5"/>
        </Layout>     
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.containerBackground,
        padding: 15,
        borderRadius: 5,
        marginBottom: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.borderLight,
        borderRadius: 5,
        backgroundColor: Colors.inputBackground,
        padding: 5,
    },
    picker: {
        backgroundColor: Colors.inputBackground,
    },
    button: {
        borderColor: Colors.borderLight,
        backgroundColor: Colors.inputBackground,
        marginTop: 20,
        alignSelf: 'flex-end', 
    }

})

export default HomeScreen;