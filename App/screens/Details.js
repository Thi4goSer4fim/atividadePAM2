import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Details({ route }) {
  const { pizza } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>🍕</Text>
        <Text style={styles.name}>{pizza.name}</Text>
        <Text style={styles.desc}>{pizza.description}</Text>
        <Text style={styles.note}>
          Essa é uma das favoritas do nosso cardápio!
        </Text>
      </View>
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
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
    width: "90%",
  },
  emoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFB000",
    marginBottom: 10,
  },
  desc: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
  },
  note: {
    fontSize: 14,
    color: "#888",
    fontStyle: "italic",
    marginTop: 10,
  },
});
