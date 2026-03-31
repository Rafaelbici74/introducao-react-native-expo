import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function Atividade03() {

    const [numero, setNumero] = useState(0);

    function handleMais() {
            
        setNumero(numero + 1);
    }

    function handleMenos() {
            
        setNumero(numero - 1);
    }

    function handleZerar() {
            
        setNumero(0);
    }
 

    return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Atividade 3</Text>
        <Text style={styles.texto}>Variáveis e State</Text>
        <Text style={styles.valor}>{numero}</Text>

        <View style={styles.container2}>
        
            <TouchableOpacity style={styles.botao} onPress={handleMais}>               
                <Text style={styles.txtBotao}>+1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={handleZerar}>
                <Text style={styles.txtBotao}>Zerar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={handleMenos}>
                <Text style={styles.txtBotao}>-1</Text>
            </TouchableOpacity>
        </View>

    </View>
    );
   }
export default Atividade03;