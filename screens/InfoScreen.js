import React, {useState} from 'react';
import {
    Text,
    StyleSheet,
    View,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import Colors from '../constants/Colors';
import Layout from '../layout/Layout';

const InfoScreen = () => {
    return (
        <Layout>
            <View>
                <Text>
                    Testo;
                </Text>
            </View>
        </Layout>
    )
}

export default InfoScreen;