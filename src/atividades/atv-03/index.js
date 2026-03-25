import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function Atividade03() {

    const [numero, setNumero] = useState(0);

    function handleMais() {
            
        setNumero = numero + 1;
    }

    const [numero2, setNumero2] = useState(0);

    function handleMenos() {
            
        setNumero2 = numero2 - 1;
    }

    const [numero3] = useState(0);

    function handleZerar() {
            
        numero3 = 0;
    }

    return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Exemplo 3</Text>
        <Text style={styles.texto}>Variáveis e State</Text>

        <Text style={styles.valor}>{numero}</Text>

            <TouchableOpacity style={styles.botao} onPress={handleMais}>
                
                <Text style={styles.txtBotao}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={handleZerar}>
                    <Text style={styles.valor}>{numero2}</Text>
                <Text style={styles.txtBotao}>Zerar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={handleMenos}>
                    <Text style={styles.valor}>{numero3}</Text>
                <Text style={styles.txtBotao}>-</Text>
            </TouchableOpacity>

    </View>
    );
}

export default Atividade03;