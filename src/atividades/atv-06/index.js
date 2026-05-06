import { useState } from "react";
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from "../atv-06/styles";

export default function Atividade06() {

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const [status,setStatus] = useState('');
    const mensErro = 'Valores inseridos da forma incorreta';

    function handleCalcularImc(){
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        const tmpImc = pesoNum / (alturaNum * alturaNum);
        setImc(tmpImc);

        let msg = '';

        if (tmpImc < 18.5) {
            msg = 'Abaixo do peso';
        } 
        else if (tmpImc > 18.5 && tmpImc < 24.9) {
            msg = 'Peso normal';
        } 
        else if (tmpImc > 25 && tmpImc < 29.9) {
            msg = 'Sobrepeso';
        } 
        else if (tmpImc > 30 && tmpImc < 34.9) {
            msg = 'Obesidade grau 1';
        } 
        else if (tmpImc > 35 && tmpImc < 39.9) {
            msg = 'Obesidade grau 2';
        } 
        else if (tmpImc > 40) {
            msg = 'Obesidade grau 3';
        }
        else {
            msg = 'Você não é humano?';
        }

        setStatus(msg);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Calculo ade IMC</Text>

            <View style={styles.ladoalado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso}/>
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura}/>
            </View>

            <Text style={styles.imc}>{isNaN(imc) ? mensErro : imc.toFixed(2)}</Text>

            <Text style={[styles.imc, styles.txtMensagem]}>{status}</Text>

            <Botao calcular={handleCalcularImc}>Calcular</Botao>
        </View>
    );
}