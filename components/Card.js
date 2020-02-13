import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';

function Card(props) {

    return (
        <View style = {styles.cardContainer}>
            <Text style = {styles.text}>{props.region}</Text>
            <Text style = {[styles.text, styles.textName]}>{props.name}</Text>
            <Text style = {styles.text}>{props.rank} {props.division}</Text>
            <Text style = {styles.text}>{props.wins} Wins {props.lp}LP</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: Colors.containerBackground,
        padding: 10,
        borderColor: Colors.headerBackground,
        borderWidth: 5,
        borderRadius: 5,
        marginBottom: 15,
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 3,
    },
    textName: {
        fontSize: 22,
        marginBottom: 30,
    },
});
export default Card;