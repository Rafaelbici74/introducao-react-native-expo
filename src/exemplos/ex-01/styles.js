import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#acbee0',
        // margin: 20, 
        padding: 20,
        flex: 1,
        borderRadius: 20,
    },
    titulo: {
        fontSize: 30,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 50,
    },
    texto: {
        fontSize: 18,
        width: '100%',
        textAlign: 'center',
    },
});

export default styles;
