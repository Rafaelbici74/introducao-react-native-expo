import { View, Text, Image } from 'react-native'; 

import styles from './styles';

function Card({titulo, preco, descricao, img}) {
    return(
        <View style={styles.container}>
            <Image source={img} style={styles.imagem}/>
            <View style={styles.containerItems}></View>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.preco}>{preco}</Text>   
            <Text style={styles.descricao}>{descricao}</Text>
        </View>
        
    );
}

export default Card;