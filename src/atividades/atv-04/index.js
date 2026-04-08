import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

export default function Atividade04() {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [NomeCompleto, setNomeCompleto] = useState('');

    function handleExibeNome() {
        setNomeCompleto(`${nome} ${sobrenome}`);
        setNome('');
        setSobrenome('');
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Atividade 4</Text>
            <Text style={styles.txt}>{NomeCompleto}</Text>

            <TextInput
                value = {nome}
                onChangeText={setNome}
                placeholder='Nome'
                style={styles.input}
            />

            <TextInput
                value = {sobrenome}
                onChangeText={setSobrenome}
                placeholder='Sobrenome'
                style={styles.input}
            />

            <TouchableOpacity
                onPress={() => handleExibeNome()}
                style={styles.input}
            >
                <Text style={styles.txtBotao}>exibir nome</Text>
            </TouchableOpacity>

        </View>
    );
}