import { View, Text, StyleSheet, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Detalle({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons name="information-circle-outline" size={60} color="#007BFF" />
      <Text style={styles.title}>Detalles del Usuario</Text>
      <Text style={styles.description}>
        Aquí puedes ver la información detallada del perfil del usuario.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#007BFF',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
});
