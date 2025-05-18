import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function Result({ route, navigation }) {
  const { score, total } = route.params;

  const getFeedback = () => {
    const ratio = score / total;
    if (ratio === 1) return "Perfeito! Você é um mestre do Minecraft!";
    if (ratio >= 0.7) return "Muito bom! Você conhece bem o jogo.";
    if (ratio >= 0.4) return "Nada mal! Mas dá pra melhorar.";
    return "Ops... tá na hora de minerar mais conhecimento!";
  };

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Resultado</Text>
        <Text style={styles.score}>
          Você acertou {score} de {total} perguntas!
        </Text>

        <Text style={styles.feedback}>{getFeedback()}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Voltar ao Início</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    padding: 20,
    textShadowColor: "#000",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
  },
  title: {
    fontFamily: "Minecraft",
    fontSize: 32,
    color: "#fff",
    marginBottom: 20,
  },
  score: {
    fontFamily: "Minecraft",
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#5E8C31",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#3E5C1F",
  },
  buttonText: {
    fontFamily: "Minecraft",
    fontSize: 20,
    color: "#fff",
  },
  feedback: {
    fontFamily: "Minecraft",
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
});
