// 1. Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const Texto = () => {
  const [contenido, setContenido] = useState('Hola Mundo') // Desetructuración de useState
  const actualizaTexto = () => { setContenido('State Modificado') } //Cambia el estado o sea el texto
  return (
    <Text onPress={actualizaTexto}> {contenido} </Text> // Se agrega onPress que al presionar el texto manda a llamar actulizar contenido 
  )
}

export default function App() { //Ejecuta o crea la vista del proyecto

  const [contenidoB, setContenidoB] = useState('Touch me');
  const actualizaTextoB = () => { setContenidoB('You already Touch me')};

  return (

    <View style={styles.container}>
      <StatusBar style="auto" />

      <Texto>"Hola"</Texto>
      <Texto>"Mundo"</Texto>
      <Texto>React Native</Texto>

      <Button title= {contenidoB} onPress={actualizaTextoB}></Button>


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
