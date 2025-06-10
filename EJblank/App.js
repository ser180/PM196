import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

 const Texto= ()=>{ //Hereda todo lo que tiene el teto
    return(
      <Text> Hola Mundo desde React Native</Text>
    )
  }

export default function App() { //Ejecuta o crea la vista del proyecto
  return (

    <View style={styles.container}>
      
      <Texto></Texto>
      <StatusBar style="auto" />
      <Texto></Texto>
      <Button title="Touch me" />
      <Texto></Texto>

    </View>
  );
}

const styles = StyleSheet.create({ // Zona de estilo o maquillaje 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
