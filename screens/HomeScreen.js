import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from "react-redux";
import API from '../remote';

import Layout from '../layout/Layout';

const HomeScreen = () => {    
    return ( 
        <Layout>
            <View>
                <Text>
                    Hello World
                </Text>
            </View>
        </Layout>     
    )
}
export default HomeScreen;