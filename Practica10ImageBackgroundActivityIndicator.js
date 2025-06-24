//Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';


export default function App() {
return (
    <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }}
        style={styles.background}
        resizeMode="cover"
    >
        <View style={styles.overlay}>
            <Text style={styles.Text}>Bienvenido a la App</Text>
        </View>
    </ImageBackground>
);
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent:'center'
    },

    overlay:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 20,
        borderRadius: 10,
        alignSelf: 'center'
    },

    text: {
        color:'white',
        fontSize: 24
    }

});