import {
    StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors'

const styles = StyleSheet.create({
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
});
export default {
    styles
};
