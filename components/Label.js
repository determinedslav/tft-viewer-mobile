import React from 'react';
import { Text, StyleSheet } from 'react-native';

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