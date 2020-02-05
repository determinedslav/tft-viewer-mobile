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
import Colors from '../constants/Colors';
import Label from '../components/Label';

import Layout from '../layout/Layout';

const HomeScreen = () => {    
    return ( 
        <Layout>
            <View style={styles.container}>
                <Label text = "Enter username:"/>
                <TextInput style ={styles.input}/>
                <Label text = "Select region:"/>
                <Picker style ={styles.picker}>
                    <Picker.Item label="EUNA" value="euna1" />
                    <Picker.Item label="EUW" value="euw1" />
                </Picker>
            </View>
        </Layout>     
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.containerBackground,
        padding: 15,
        borderRadius: 5,
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