import React, {useState} from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    Picker,
} from 'react-native';

import {useDispatch} from 'react-redux';
import {setStats} from '../redux/actions/stats';
import Colors from '../constants/Colors';
import Layout from '../layout/Layout';
import Button from '../components/Button';

const InfoScreen = () => {

    const [message, setMessage] = useState(' ');

    const [region, setRegion] = useState('EU Nordic and East');
    const [name, setName] = useState('');
    const [rank, setRank] = useState('IRON');
    const [division, setDivision] = useState('I');
    const [wins, setWins] = useState('0');
    const [lp, setLp] = useState('0');

    const dispatch = useDispatch();

    const validate = () => {
        if (name.length < 4 || name.length > 16) {
            setMessage("Summoner names are between 4 and 16 symbols long");
        } else if (isNaN(lp) || isNaN(wins)) {
            setMessage("Use a number for wins and lp");
        } else if (lp > 100) {
            setMessage("You can't have more than 100 lp");
        } else {
            create();
        }
    };

    const create = () => {
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
        setMessage("New card created")
        setTimeout(() =>{
            setMessage(" ")
        },5000);
    };

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
                        <Picker.Item label="SILVER" value="SILVER" />
                        <Picker.Item label="GOLD" value="GOLD" />
                        <Picker.Item label="PLATINUM" value="PLATINUM" />
                        <Picker.Item label="DIAMOND" value="DIAMOND" />    
                    </Picker>
                    <Picker selectedValue={division} onValueChange={value=>setDivision(value)} style = {[styles.input, styles.flex1]}>
                        <Picker.Item label="I" value="I" />
                        <Picker.Item label="II" value="II" />
                        <Picker.Item label="III" value="III" />
                        <Picker.Item label="IV" value="IV" />
                    </Picker>
                </View>
                <View style = {styles.rowContainer}>
                    <TextInput placeholder = "Wins" value={wins} onChangeText={text=>setWins(parseInt(text, 10))} style ={[styles.input, styles.flex2]}/>
                    <Text style = {styles.text}>Wins</Text>
                    <TextInput placeholder = "LP" value={lp} onChangeText={text=>setLp(parseInt(text, 10))} style ={[styles.input, styles.flex2]}/>
                    <Text style = {styles.text}>LP</Text>
                </View>
                <Text style = {styles.message}>{message}</Text>
                <Button onPress ={validate} style = {styles.button} title="Create"/>
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
    message: {
        alignSelf: 'center',
        fontSize: 16,
        marginTop: 20,
    },
    button: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        marginTop: 30,
        alignSelf: 'center',
    },
});

export default InfoScreen;