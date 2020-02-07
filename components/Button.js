import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

function Button(props) {

    return (
        <TouchableOpacity style={[styles.button, props.style]}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 5,
        width: 125,
        height: 45,
        padding: 10,

    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export default Button;