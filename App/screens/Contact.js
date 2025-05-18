import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.info}>Telefone: (11) 1234-5678</Text>
      <Text style={styles.info}>Endereço: Rua das Pizzas, 456</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFB000",
  },
  info: {
    fontSize: 16,
    marginTop: 10,
  },
});
