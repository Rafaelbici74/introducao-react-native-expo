import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        backgroundColor: '#fafafa',
        padding: RFValue(8),
        width: '100%',
        borderRadius: RFValue(20),
    },
    container2:{
        flexDirection: 'row',
        justifyContent: 'space-between', // ou 'center', 'space-around'
},
    titulo: {
        margin: RFValue(6),
        fontSize: RFValue(28),
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'deepskyblue',
    },
    txtSaida: {
        margin: RFValue(6),
        fontSize: RFValue(20),
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'deepskyblue',
    },
    txtEntrada: {
        borderWidth: RFValue(4),
        textAlign: 'center',
        fontSize: RFValue(20),
        borderColor: '#1E90FF',
        // height: 50, 
        color: 'deepskyblue',
        borderRadius: RFValue(10),
        //   marginTop: RFValue(10), 
        padding: RFValue(10),
        marginBottom: RFPercentage(2),
    },
    button: {
        backgroundColor: 'deepskyblue',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: RFValue(100),
        margin: RFValue(1),
        width: RFValue(50),
        alignItems: 'center',
    },
    buttonTouch: {
        backgroundColor: '#fff',
    },
    textButton: {
        fontSize: RFValue(28),
        color: '#fafafa',
        textAlign: 'center',
    },
    textLabel: {
        fontSize: RFValue(15),
        fontWeight: 'bold',
        color: '#0e273f',
    },
    txtTotal: {
        color: '#1E90FF',
        fontWeight: 'bold',
        borderWidth: RFValue(2),
        borderRadius: RFValue(4),
        textAlign: 'center',
        fontSize: RFPercentage(3),
        marginBottom: RFValue(7),
    },
});

export default styles;