import { useState } from "react";
import { View, Text, Pressable, TextInput } from 'react-native';

import styles from "../atv-05/styles";

export default function Atividade05() {

    //Const para guardar numeros digitados e total
    const [numero, setNumero] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [total, setTotal] = useState(0);

    // Operações
    function handleSoma() {
        setTotal(parseFloat(numero) + parseFloat(numero2));
    }

    function handleDivi() {
        setTotal(parseFloat(numero) / parseFloat(numero2));
    }

    function handleMulti() {
        setTotal(parseFloat(numero) * parseFloat(numero2));
    }

    function handleSubt() {
        setTotal(parseFloat(numero) - parseFloat(numero2));
    }

    function handleZerar() {

        setNumero(0);
        setNumero2(0);
        setTotal(0);
    }

    return (
        <View styles={styles.container}>
            <Text style={styles.titulo}> Exemplo 5 </Text>

            <TextInput
                onChangeText={setNumero}
                value={numero.toString()}
                style={styles.txtEntrada}
            />

            <TextInput

                onChangeText={setNumero2}
                value={numero2.toString()}
                style={styles.txtEntrada}
            />

            <Text style={styles.txtSaida} readOnly={true}>Total</Text>
            <Text style={styles.txtTotal} readOnly={true}>{total}</Text>


            <View style={styles.container2}>
                <Pressable
                    onPress={() => handleSoma()}
                    style={styles.button}
                >
                    <Text style={styles.textLabel}>+</Text>
                </Pressable>

                <Pressable
                    onPress={() => handleMulti()}
                    style={styles.button}
                >
                    <Text style={styles.textLabel}>x</Text>
                </Pressable>

                <Pressable
                    onPress={() => handleDivi()}
                    style={styles.button}
                >
                    <Text style={styles.textLabel}>/</Text>
                </Pressable>

                <Pressable
                    onPress={() => handleSubt()}
                    style={styles.button}
                >
                    <Text style={styles.textLabel}>-</Text>
                </Pressable>

                <Pressable
                    onPress={() => handleZerar()}
                    style={styles.button}
                >
                    <Text style={styles.textLabel}>Zerar</Text>
                </Pressable>
            </View>
        </View>
    );
}

