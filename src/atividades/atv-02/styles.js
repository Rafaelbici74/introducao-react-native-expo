import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const colors = {
  primary: '#484d97',
  primaryDark: '#2f3466',
  primaryLight: '#6b70b8',
  background: '#f5f6ff',
  textDark: '#1e1e2f',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: RFPercentage(1),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  titulo: {
    fontSize: RFPercentage(2.8),
    fontWeight: 'bold',
    marginTop: RFPercentage(1),
    marginBottom: RFPercentage(1),
    paddingVertical: RFPercentage(0.6),
    width: '95%',
    textAlign: 'center',
    color: colors.primary,
    borderWidth: RFPercentage(0.25),
    borderColor: colors.primary,
    borderRadius: RFPercentage(1.2),
    backgroundColor: '#ffffff',
  },

  imagem: {
    width: '90%',
    height: RFPercentage(15),
    resizeMode: 'contain',
    marginBottom: RFPercentage(1),
  },

  imagem2: {
    width: RFPercentage(8),
    height: RFPercentage(8),
    alignSelf: 'flex-start',
    marginTop: RFPercentage(0.5),
  },
});

export default styles;