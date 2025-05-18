import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Minecraft Quiz</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Quiz")}
        >
          <Text style={styles.buttonText}>Start Quiz</Text>
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
    textShadowColor: "#000",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
  },
  title: {
    fontFamily: "Minecraft",
    fontSize: 36,
    color: "#fff",
    marginBottom: 20,
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
});
