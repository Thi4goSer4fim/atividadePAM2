import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

const questions = [
  {
    question: "Qual é o nome do criador do Minecraft?",
    options: ["Notch", "Jeb", "Herobrine", "Steve"],
    answer: "Notch",
    image: require("../assets/images/question01.png"),
  },
  {
    question: "Qual item é necessário para fazer uma picareta de diamante?",
    options: ["Diamante", "Ferro", "Madeira", "Pedra"],
    answer: "Diamante",
    image: require("../assets/images/question2.png"),
  },
  {
    question: "Qual mob explode ao se aproximar do jogador?",
    options: ["Zumbi", "Esqueleto", "Creeper", "Enderman"],
    answer: "Creeper",
    image: require("../assets/images/question3.jpg"),
  },
  {
    question: "Qual dimensão pode ser acessada com obsidiana e um isqueiro?",
    options: ["The End", "Submundo", "Inferno", "Nether"],
    answer: "Nether",
    image: require("../assets/images/question4.jpg"),
  },
  {
    question:
      "Qual encantamento permite respirar debaixo d'água por mais tempo?",
    options: ["Eficiência", "Afinidade Aquática", "Respiração", "Proteção"],
    answer: "Respiração",
    image: require("../assets/images/question5.png"),
  },
  {
    question: "O que acontece se você olhar nos olhos de um Enderman?",
    options: ["Ele foge", "Ele teleporta", "Ele te ataca", "Nada acontece"],
    answer: "Ele te ataca",
    image: require("../assets/images/question6.png"),
  },
  {
    question:
      "Quantos blocos de obsidiana são necessários no mínimo para um portal do Nether funcionar?",
    options: ["14", "10", "8", "12"],
    answer: "10",
    image: require("../assets/images/question7.png"),
  },
  {
    question:
      "Qual dessas criaturas voa e aparece à noite se você não dorme por dias?",
    options: ["Ghast", "Phantom", "Wither", "Slime"],
    answer: "Phantom",
    image: require("../assets/images/question8.png"),
  },
];

export default function Quiz({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    const isCorrect = option === questions[currentQuestion].answer;
    const newScore = isCorrect ? score + 1 : score;

    if (currentQuestion + 1 < questions.length) {
      setScore(newScore);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigation.navigate("Result", {
        score: newScore,
        total: questions.length,
      });
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.question}>
          {questions[currentQuestion].question}
        </Text>
        <Image source={questions[currentQuestion].image} style={styles.image} />
        {questions[currentQuestion].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handleAnswer(option)}
          >
            <Text style={styles.buttonText}>{option}</Text>
          </TouchableOpacity>
        ))}
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
  question: {
    fontFamily: "Minecraft",
    fontSize: 24,
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#5E8C31",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#3E5C1F",
    marginVertical: 5,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Minecraft",
    fontSize: 18,
    color: "#fff",
  },
});
