import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Picker,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from "react-redux";
import {setStats, deleteStat} from '../redux/actions/stats';
import {setLoading} from '../redux/actions/loading';
import Remote from '../remote';
import Layout from '../layout/Layout';
import Colors from '../constants/Colors';
import API from '../constants/Api'
import Label from '../components/Label';
import Button from '../components/Button';
import Card from '../components/Card';

const HomeScreen = () => {    

    const [selectedValue, setSelectedValue] = useState('java');
    const [region, setRegion] = useState('eun1');
    const [regionFull, setRegionFull] = useState('EU Nordic and East');
    const [name, setName] = useState(' ');
    const [nameId, setNameId] = useState(' ');
    const [errorMessage, setErrorMessage] = useState(' ');

    const stats = useSelector(state => state.stats);
    const isLoading = useSelector(state => state.loading);
    const dispatch = useDispatch();

    const setRegionState = (value) => {
        setRegion(value);
        console.log(value);
        switch(value) {
            case 'eun1':
                setRegionFull('EU Nordic and East');
                break;
            case 'euw1':
                setRegionFull('EU West');
                break;
            default:
              return 'Error';
          }
    };
    
    const getStats = async () => {
        console.log(region + name + nameId);
        dispatch(setLoading(true));
        const responseName = await Remote.get(API.protocol + region + API.apiLink + API.nameApi + name + API.key);
        if(responseName && responseName.hasOwnProperty('data')){
            setNameId(responseName.data.id)
            setTimeout(() =>{},1000);
            const responseStats = await Remote.get(API.protocol + region + API.apiLink + API.statsApi + nameId + API.key);
            console.log(region + name + nameId);
                if(responseStats && responseStats.hasOwnProperty('data')){
                    const newerCards = responseStats.data.map(item=>{
                        return {
                            region: regionFull,
                            name: item.summonerName,
                            rank: item.tier,
                            division: item.rank,
                            wins: item.wins,
                            lp: item.leaguePoints,
                        }
                    });
                    console.log(newerCards);
                    setTimeout(() =>{
                        dispatch(setStats(newerCards));                     
                        dispatch(setLoading(false));
                    },1000);
                } 
            } 
    };

    const renderCard = ({item: card}) => {
        return <Card 
                    region={card.region}
                    name={card.name}
                    rank={card.rank}
                    division={card.division}
                    wins={card.wins}
                    lp={card.lp}
                    //onPress={()=>handleDelete(card)}
                />
    }

    return ( 
        <Layout>
            <View style={styles.container}>
                <Label text = "Enter username:"/>
                <TextInput onChangeText={text=>setName(text)} style ={styles.input}/>
                <Label text = "Select region:"/>
                <Picker 
                    selectedValue = {selectedValue} 
                    onValueChange = {value => {
                        setSelectedValue(value);
                        setRegionState(value);
                    }} 
                    style = {styles.picker}
                >
                    <Picker.Item label="EU Nordic and East" value="eun1" />
                    <Picker.Item label="EU West" value="euw1" />
                </Picker>
                <Text style={styles.error}>{errorMessage}</Text>
                <Button onPress={getStats} style={styles.button} title="Search" />
            </View>
            {isLoading ? <ActivityIndicator/> :
            <FlatList 
                data={stats}
                renderItem={renderCard}
                keyExtractor={(_, index)=>`card_${index}`}
                />
            }
        </Layout>     
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.containerBackground,
        padding: 15,
        borderRadius: 5,
        marginBottom: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.borderLight,
        borderRadius: 5,
        backgroundColor: Colors.inputBackground,
        padding: 5,
    },
    picker: {
        backgroundColor: Colors.inputBackground,
    },
    error: {
        color: Colors.danger,
        marginVertical: 10,
    },
    button: {
        borderColor: Colors.borderLight,
        backgroundColor: Colors.inputBackground,
        alignSelf: 'flex-end', 
    }

})

export default HomeScreen;