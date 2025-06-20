import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';

const datos = [
  { id: '1', nombre: 'Manzana' },
  { id: '2', nombre: 'Banana' },
  { id: '3', nombre: 'Cereza' },
];

const Item = ({ nombre }) => {
  const [texto, setTexto] = useState(nombre);
  const cambiarTexto = () => setTexto('¡Modificado!');
  return (
    <Text style={styles.itemText} onPress={cambiarTexto}>
      {texto}
    </Text>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={datos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Item nombre={item.nombre} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  itemBox: {
    backgroundColor: '#f9c2ff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 20,
    color: '#000',
  },
});