import React from "react";
import {
    View, 
    StyleSheet, 
    TextInput,
    Text
} from "react-native";
import Layout from "../layout/Layout";
import Colors from '../constants/Colors';
import Button from '../components/Button';
import Label from '../components/Label';

const UserSreen = () => {

    return (
        <Layout>
            <View style={styles.container}>
                <Text style = {styles.title}>Login to your account</Text>
                <Label text = "Username:"/>
                <TextInput style ={styles.input}/>
                <Label text = "Password:"/>
                <TextInput secureTextEntry={true} style ={styles.input}/>
                <Button onPress={console.log('pressed')} style={styles.button} title="Login" />
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
        marginHorizontal: 10,
    },
    button: {
        borderColor: Colors.primary,
        backgroundColor: Colors.primary,
        alignSelf: 'flex-end', 
        marginTop: 20,
    },    
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});

export default UserSreen;