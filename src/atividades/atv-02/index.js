import { View, Text, Image } from 'react-native'; 

import styles from './styles';
import img2 from '../../../assets/greenfn.jpg';
import img3 from '../../../assets/espaco.jpg';
import img4 from '../../../assets/especial.jpg';
import Card from './cards';

function Atividade02 () {
    return(
            <View style={styles.container}>

                <Text style={styles.titulo}>Atividade 2</Text>

                <Card

                    img2
                    titulo= {'Movimento 1: '}
                    img= {img2}
                    preco={'Preço: 500 AURAS!'}
                    descricao={'ENTERRADA PRO MAX PLUS...'}
                />

                <Card
                
                    img3
                    titulo={'Movimento 2: '}
                    img={img3}
                    preco={'1700 AURAS!'}
                    descricao={'Moon Dunk...'}

                />

                <Card
                
                    img4
                    titulo={'Movimento 3: '}
                    img={img4}
                    preco={'TODAS AS SUAS AURAS!!!'}
                    descricao={'Dunk DIVINO'}

                />


            </View>

    )
}

export default Atividade02;