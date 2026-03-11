import { View, Text, Image } from 'react-native';

import styles from './styles';
import { RFPercentage } from 'react-native-responsive-fontsize';

function Atividade01() {
    return (
        <View style={styles.container} >
            <Text style={styles.titulo} >Atividade 1</Text>
            <Text style={styles.texto}>
                Aula de React Native expo
            </Text>
            <Text style={styles.texto2}>Um texto qualquer a mais</Text><br></br>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                   source={require('../../../assets/greenfn.jpg')}
                    style={{
                        width: 200,
                        height: 200,
                        borderWidth: 10,
                        borderColor: '#fff',
                        borderRadius: 50
                    }}
                />
            </View>
            <Text style={styles.textoDesc}>GREEN extFN</Text>

        </View>
    );
}

export default Atividade01;