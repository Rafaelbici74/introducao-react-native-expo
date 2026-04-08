import { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";

import styles from "../atv-05/styles";

export default function Atividade05(){

    const [numero, setNuemero] = useState('');
    const [numero2, setNuemero2] = useState('');
    const [mostrarNumero, setMostrarNumero] = useState('');

    const soma = numero + numero2;
    const multiplicacao = numero * numero2;
    const divisao = numero / numero2;
    const subtracao = numero - numero2;

    function handleExibirResultado(){

        

    }
}