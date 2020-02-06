import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Picker,
} from 'react-native';
import {useSelector, useDispatch} from "react-redux";
import API from '../remote';
import Layout from '../layout/Layout';
import Colors from '../constants/Colors';
import Label from '../components/Label';
import Button from '../components/Button';
import Card from '../components/Card';

const HomeScreen = () => {    
    return ( 
        <Layout>
            <View style={styles.container}>
                <Label text = "Enter username:"/>
                <TextInput style ={styles.input}/>
                <Label text = "Select region:"/>
                <Picker style ={styles.picker}>
                    <Picker.Item label="EU Nordic and East" value="euna1" />
                    <Picker.Item label="EU West" value="euw1" />
                </Picker>
                <Button title="Search" />
            </View>
            <Card region = "EU Nordic and East" name = "BlackHeart10" rank = "Platinum" division = "II" wins = "10" lp = "5"/>
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
    }

})

export default HomeScreen;