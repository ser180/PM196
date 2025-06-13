import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

 const Texto= (props)=>{ //Hereda todo lo que tiene el teto, Realizar el componente dinaminco
  const {contenido}=props 
    return(
      <Text>{contenido}</Text> // Lo que se pase a traves de contenido aparecera en el texto
    )
  }

export default function App() { //Ejecuta o crea la vista del proyecto
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Texto contenido="Hola"></Texto>
      <Texto contenido="mundo"></Texto>
      <Texto contenido="React Native"></Texto>
      
      <Button title="Touch me" />
      

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
