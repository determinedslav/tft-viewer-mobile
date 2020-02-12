import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';
import Label from '../components/Label';
import Button from '../components/Button';

function Card(props) {

    return (
        <View style = {styles.container}>
            <View style = {styles.buttonContainer}>
                <Button onPress={props.onPress} style = {styles.buttonDelete} title="X"/>
            </View>
            <View style = {styles.textContainer}>
                <Text style = {[styles.text, styles.textRegion]}>{props.region}</Text>
                <Text style = {[styles.text, styles.textName]}>{props.name}</Text>
                <Text style = {styles.text}>{props.rank} {props.division}</Text>
                <Text style = {styles.text}>{props.wins} Wins {props.lp}LP</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.containerBackground,
        padding: 10,
        borderRadius: 5,
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        marginBottom: 0,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 3,
    },
    textRegion: {
        fontSize: 22,
        marginBottom: 10,
    },
    textName: {
        fontSize: 22,
        marginBottom: 30,
    },

    buttonUpdate: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        flex: 1,
        marginRight: 100,
        
    },
    buttonDelete: {
        backgroundColor: Colors.danger,
        borderColor: Colors.danger,
        alignSelf: "flex-end",
        width: 25,
        height: 25,
        padding: 0,
    } 
});
export default Card;