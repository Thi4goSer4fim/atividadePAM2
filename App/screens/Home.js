import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo à πzzaria!</Text>
      <Text style={styles.subtitle}>A melhor pizza da cidade está aqui.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7E0",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFB000",
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    marginTop: 10,
  },
});
