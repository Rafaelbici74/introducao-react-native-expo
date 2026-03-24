import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const colors = {
  primary: '#484d97',
  primaryDark: '#2f3466',
  primaryLight: '#6b70b8',
  textDark: '#1e1e2f',
  background: '#f5f6ff',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderWidth: RFPercentage(0.2),
    borderColor: colors.primaryLight,
    padding: RFPercentage(1),
    borderRadius: RFPercentage(1.2),
    width: '95%',
    alignItems: 'center',
    marginBottom: RFPercentage(1),
    flexDirection: 'row',
  },

  imagem: {
    width: RFPercentage(10),
    height: RFPercentage(10),
    resizeMode: 'contain',
    marginRight: RFPercentage(1),
  },

  containerItens: {
    flex: 1,
    justifyContent: 'center',
  },

  titulo: {
    fontSize: RFPercentage(2),
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: RFPercentage(0.3),
    textAlign: 'center',
  },

  descricao: {
    fontSize: RFPercentage(1.7),
    color: colors.textDark,
    marginBottom: RFPercentage(0.3),
    fontFamily: 'italic',
    paddingRight: RFPercentage(0.2),
  },

  preco: {
    fontSize: RFPercentage(2.2),
    fontWeight: 'bold',
    color: colors.primaryDark,
    textAlign: 'center',
  },
});

export default styles;