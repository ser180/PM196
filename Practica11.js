import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ActivityIndicator,
  Button,
  Alert,
  SafeAreaView,
  Platform,
  TextInput,
  Switch,
  Image
} from "react-native";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  const mostrarAlerta = () => {
    if (!nombre || !email) {
      Platform.OS === 'web'
        ? window.alert("Por favor, completa todos los campos.")
        : Alert.alert("Alerta", "Por favor, completa todos los campos.");
      return;
    }

    if (!aceptaTerminos) {
      Platform.OS === 'web'
        ? window.alert("Debes aceptar los términos y condiciones.")
        : Alert.alert("Términos", "Debes aceptar los términos y condiciones.");
      return;
    }

    const datos = `Nombre: ${nombre}\nEmail: ${email}`;
    Platform.OS === 'web'
      ? window.alert(`Registro exitoso\n${datos}`)
      : Alert.alert("Registro exitoso", datos, [
          { text: "OK", onPress: () => limpiarFormulario() }
        ]);
  };

  const limpiarFormulario = () => {
    setNombre("");
    setEmail("");
    setAceptaTerminos(false);
  };

  if (loading) {
    return (
      <View style={styles.splash}>
        <Image
          source={{ uri: 'https://w7.pngwing.com/pngs/198/839/png-transparent-fate-grand-order-fate-stay-night-fate-zero-shirou-emiya-pokemon-go-pokemon-go-leaf-logo-symmetry.png' }}
          style={{ width: 100, height: 100, marginBottom: 20 }}
        />
        <Text style={styles.splashText}>Cargando...</Text>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={{ uri: 'https://th.bing.com/th/id/R.32a45c3a2067f1c054f57851be5060ad?rik=1z4zq2lP4tWWmg&pid=ImgRaw&r=0' }}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar style="auto" />

      <SafeAreaView style={styles.container}>
        <View style={styles.formulario}>
          <Text style={styles.titulo}>Registro de usuario</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre Completo *"
            value={nombre}
            onChangeText={setNombre}
          />

          <TextInput
            style={styles.input}
            placeholder="Email *"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={styles.switchContainer}>
            <Switch
              value={aceptaTerminos}
              onValueChange={setAceptaTerminos}
            />
            <Text style={{ marginLeft: 10 }}>Acepto los términos y condiciones</Text>
          </View>

          <Button title="Registrarse" onPress={mostrarAlerta} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center'
  },
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  splashText: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  formulario: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 49,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  }
});
