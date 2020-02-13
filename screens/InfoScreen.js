import React, {useState} from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    Picker,
} from 'react-native';

import { useDispatch } from 'react-redux';
import {setStats} from '../redux/actions/stats';
import Colors from '../constants/Colors';
import Layout from '../layout/Layout';
import Button from '../components/Button';

const InfoScreen = () => {

    const [region, setRegion] = useState('EU Nordic and East');
    const [name, setName] = useState('');
    const [rank, setRank] = useState('IRON');
    const [division, setDivision] = useState('I');
    const [wins, setWins] = useState('');
    const [lp, setLp] = useState('');

    const dispatch = useDispatch();

    function create() {
        const newItem = {
            region,
            name,
            rank,
            division,
            wins,
            lp,
        };
        const newStats = [newItem] 
        dispatch(setStats(newStats));
    }

    return (
        <Layout>
            <View style = {styles.container}>
                <Text style = {styles.title}>Create your own statistics</Text>
                <View style = {styles.rowContainer}>
                    <Picker selectedValue={region} onValueChange={value=>setRegion(value)} style = {[styles.input, styles.flex1]}>
                        <Picker.Item label="EU Nordic and East" value="EU Nordic and East" />
                        <Picker.Item label="EU West" value="EU West" />
                    </Picker>
                </View>
                <View style = {styles.rowContainer}>
                    <TextInput placeholder = "Username" value={name} onChangeText={text=>setName(text)} style ={[styles.input, styles.flex1]}/>
                </View>
                <View style = {styles.rowContainer}>
                    <Picker selectedValue={rank} onValueChange={value=>setRank(value)} style = {[styles.input, styles.flex3]}>
                        <Picker.Item label="IRON" value="IRON" />
                        <Picker.Item label="BRONZE" value="BRONZE" />
                    </Picker>
                    <Picker selectedValue={division} onValueChange={value=>setDivision(value)} style = {[styles.input, styles.flex1]}>
                        <Picker.Item label="I" value="I" />
                        <Picker.Item label="II" value="II" />
                        <Picker.Item label="III" value="III" />
                        <Picker.Item label="IV" value="IV" />
                    </Picker>
                </View>
                <View style = {styles.rowContainer}>
                    <TextInput placeholder = "Wins" value={wins} onChangeText={text=>setWins(text)} style ={[styles.input, styles.flex2]}/>
                    <Text style = {styles.text}>Wins</Text>
                    <TextInput placeholder = "LP" value={lp} onChangeText={text=>setLp(text)} style ={[styles.input, styles.flex2]}/>
                    <Text style = {styles.text}>LP</Text>
                </View>
                <Button onPress ={create} style = {styles.button} title="Create"/>
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
    flex1: {
        flex: 1,
    },
    flex2: {
        flex: 2,
    },
    flex3: {
        flex: 3,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.borderLight,
        borderRadius: 5,
        backgroundColor: Colors.inputBackground,
        padding: 5,
        marginHorizontal: 10,
    },
    rowContainer: {
        flexDirection: 'row',  
        marginTop: 20,
    },
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