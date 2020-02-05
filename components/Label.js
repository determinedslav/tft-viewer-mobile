import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

function Label(props) {
    return(
        <Text style={styles.label}>{props.text}</Text>
    )
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        marginVertical: 10,
    }
})

export default Label;