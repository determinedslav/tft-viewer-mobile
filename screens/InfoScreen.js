import React, {useState} from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    Picker,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';
import Layout from '../layout/Layout';
import Button from '../components/Button';

const InfoScreen = () => {
    return (
        <Layout>
            <View style = {Styles.styles.container}>
                <Text style = {styles.title}>Create your own statistics</Text>
                <View style = {Styles.styles.rowContainer}>
                <Picker style = {[Styles.styles.input, Styles.styles.flex1]}>
                    <Picker.Item label="EU Nordic and East" value="euna1" />
                    <Picker.Item label="EU West" value="euw1" />
                </Picker>
                </View>
                <View style = {Styles.styles.rowContainer}>
                <TextInput placeholder = "Username" style ={[Styles.styles.input, Styles.styles.flex1]}/>
                </View>
                <View style = {Styles.styles.rowContainer}>
                <Picker style = {[Styles.styles.input, Styles.styles.flex3]}>
                    <Picker.Item label="Iron" value="Iron" />
                    <Picker.Item label="Bronze" value="Bronze" />
                </Picker>
                <Picker style = {[Styles.styles.input, Styles.styles.flex1]}>
                    <Picker.Item label="I" value="I" />
                    <Picker.Item label="II" value="II" />
                    <Picker.Item label="III" value="III" />
                    <Picker.Item label="IV" value="IV" />
                </Picker>
                </View>
                <View style = {Styles.styles.rowContainer}>
                <TextInput placeholder = "Wins" style ={[Styles.styles.input, Styles.styles.flex2]}/>
                <Text style = {styles.text}>Wins</Text>
                <TextInput placeholder = "LP" style ={[Styles.styles.input, Styles.styles.flex2]}/>
                <Text style = {styles.text}>LP</Text>
                </View>
                <Button style = {styles.button} title="Create"/>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    text: {
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: 'bold',
        flex: 1,
    },
    button: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        marginTop: 30,
        alignSelf: 'center',
    },
});

export default InfoScreen;