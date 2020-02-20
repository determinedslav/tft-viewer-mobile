import React from "react";
import {
    View, 
    StyleSheet, 
    TextInput,
    Text,
    ActivityIndicator
} from "react-native";
import {setLoading} from '../redux/actions/loading';
import {useSelector, useDispatch} from "react-redux";
import Layout from "../layout/Layout";
import Colors from '../constants/Colors';
import Button from '../components/Button';
import Label from '../components/Label';

const UserSreen = ({navigation}) => {

    const isLoading = useSelector(state => state.loading);
    const dispatch = useDispatch();

    const login = () => {
        dispatch(setLoading(true));
        setTimeout(() =>{
            navigation.navigate('Home');
            dispatch(setLoading(false));
        },2000);
    }

    return (
        <Layout>
            {isLoading ? <ActivityIndicator/> :
            <View style={styles.container}>
                <Text style = {styles.title}>Login to your account</Text>
                <Label text = "Username:"/>
                <TextInput style ={styles.input}/>
                <Label text = "Password:"/>
                <TextInput secureTextEntry={true} style ={styles.input}/>
                <Button onPress={login} style={styles.button} title="Login" />
            </View>
            }
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