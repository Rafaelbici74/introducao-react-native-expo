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
        const tmpImc = peso / (altura * altura);
        setImc(tmpImc);
    }

    function imcStatus() {
        if (imc < 18.5) {
            setStatus('Abaixo do peso');
        } 
        else if (imc > 18.5 && imc < 24.9) {
            setStatus('Peso normal');
        } 
        else if (imc > 25 && imc < 29.9) {
            setStatus('Sobrepeso');
        } 
        else if (imc > 30 && imc < 34.9) {
            setStatus('Obesidade grau 1');
        } 
        else if (imc > 35 && imc < 39.9) {
            setStatus('Obesidade grau 2');
        } 
        else if (imc > 40) {
            setStatus('Obesidade grau 3');
        }
        else {
            setStatus('Você não é humano?');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Calculo ade IMC</Text>
            <View style={styles.ladoalado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso}/>
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura}/>
            </View>

            <Text style={styles.imc}>{isNaN(imc) ? mensErro : imc.toFixed(2)}</Text>

            <Text calcular2={setStatus} style={styles.txtMensagem}>{status}</Text>
            <Botao calcular={handleCalcularImc} calcular2={imcStatus}>Calcular</Botao>
        </View>
    )
}