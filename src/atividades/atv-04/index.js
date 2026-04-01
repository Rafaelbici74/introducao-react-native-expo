import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInputComponent } from 'react-native';

import styles from './styles';


export default function Atividade04(){

    const [text, setTexto] = useState ('');
    const [text2, setTexto2] = useState ('');


    function handleExibeMensagem() {
        setTexto(text);
        setTexto2(text2);
    }


    return(

        <View style={styles.container}>

        <Text style={styles.titulo}>Atividade 4</Text>
        


        </View>

    );

}