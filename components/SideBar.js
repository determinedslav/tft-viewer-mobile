import React, {Component} from "react";
import {View, StyleSheet, FlatList, Image} from "react-native";
import Constants from "expo-constants";
import SidebarItem from "./SidebarItem";
import {FontAwesome, Entypo} from '@expo/vector-icons';
import Colors from '../constants/Colors';

class SideBar extends Component {

    renderSidebarMenu = () => {
        return <FlatList
            data={menuItems}
            renderItem={({item}) => <SidebarItem
                item={item}
                navigation={this.props.navigation}
            />}
            keyExtractor={item => item.route}
        />
    }
    render = () =>
        <View style={styles.sidebar}>
            <View style={styles.headerContainer}>
                <Image
                    style={{ width: '100%', height: 120 }}
                    source={require('../assets/images/drawer_header.png')}
                />
            </View>
            {this.renderSidebarMenu()}
        </View>
}

export default SideBar;

const styles = StyleSheet.create({
    sidebar: {
        flex: 1,
        backgroundColor:  Colors.containerBackground,
    },
    headerContainer: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: Colors.headerBackground,
        borderBottomWidth: 1,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
    }
});
const menuItems = [
    {
        name: "Home",
        route: "Home",
        icon: <FontAwesome
            style={styles.icon}
            name="home"
            size={16}
            color="#ffffff"/>,
    },
    {
        name: "Card Generator",
        route: "Info",
        icon: <Entypo
            style={styles.icon}
            name="edit"
            size={16}
            color="#ffffff"/>,
    },
    /*{
        name: "User",
        route: "User",
        icon: <Entypo
            style={styles.icon}
            name="user"
            size={16}
            color="#ffffff"/>,
    },*/

];