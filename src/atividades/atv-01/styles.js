import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ab98da',
        // margin: 20, 
        padding: RFPercentage(0),
        flex: 1,
        borderRadius: RFPercentage(20),
    },
    titulo: {
        fontSize: RFPercentage(3),
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: RFPercentage(5),
    },
    texto: {
        fontSize: RFPercentage(2),
        width: '100%',
        textAlign: 'center',
    },
    texto2: {
        fontSize: RFPercentage(1.5),
        width: '100%',
        textAlign: 'right',
        color: '#F00',
        marginTop: RFPercentage(2),
    },
    textoDesc: {
        fontSize: RFPercentage(5),
        fontWeight: 'Bold',
        textAlign: 'center'
    },
    imageEdt: { 
    
    },

});

export default styles;
