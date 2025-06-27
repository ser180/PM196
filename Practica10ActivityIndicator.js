//Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';


export default function App() {

    const [cargando, setCargando] = useState(false);
    const [datos, setDatos] = useState('');

    const SimularCarga = () => {
        setCargando(true);
        setDatos('');

        setTimeout(() => {
            setCargando(false);
            setDatos('Datos cargados correctamente');
        }, 8000);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Activity Indicator :D</Text>
            <Button title='Cargar Datos' onPress={SimularCarga} color='#007AFF'/>

            {cargando && (
                <ActivityIndicator size='large' color='#007AFF' style={styles.loader}/>
            )}

            {datos !== '' && <Text>{datos}</Text>}

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5F5F5',
        alignItems:'center',
        justifyContent: 'center',
        padding:20
    },

    titulo:{
        fontSize: 24,
        fontWeight:'bold',
        marginBottom: 20,
    },

    loader:{
        marginVertical:20,
    }
});