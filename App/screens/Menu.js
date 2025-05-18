// screens/Menu.js
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const pizzas = [
  { id: "1", name: "Calabresa", description: "Calabresa, cebola e queijo" },
  {
    id: "2",
    name: "Quatro Queijos",
    description: "Mussarela, provolone, parmesão e catupiry",
  },
  {
    id: "3",
    name: "Frango com Catupiry",
    description: "Frango desfiado com catupiry",
  },
  {
    id: "4",
    name: "Portuguesa",
    description: "Presunto, ovo, cebola, azeitona, ervilha e queijo",
  },
  {
    id: "5",
    name: "Margherita",
    description: "Mussarela, tomate e manjericão fresco",
  },
  {
    id: "6",
    name: "Napolitana",
    description: "Mussarela, tomate, alho e orégano",
  },
  {
    id: "7",
    name: "Toscana",
    description: "Linguiça toscana, cebola roxa e pimentão",
  },
  {
    id: "8",
    name: "Bacon Lovers",
    description: "Bacon crocante e queijo derretido",
  },
  {
    id: "9",
    name: "Vegetariana",
    description: "Tomate, cebola, pimentão, champignon e azeitona",
  },
  {
    id: "10",
    name: "Pepperoni",
    description: "Fatias de pepperoni com queijo derretido",
  },
  {
    id: "11",
    name: "Mexicana",
    description: "Carne moída, pimenta jalapeño e cheddar",
  },
  {
    id: "12",
    name: "Carne Seca",
    description: "Carne seca desfiada com cebola caramelizada",
  },
  {
    id: "13",
    name: "Brócolis com Bacon",
    description: "Brócolis cozido e cubos de bacon",
  },
  { id: "14", name: "Atum", description: "Atum, cebola e azeitona" },
  {
    id: "15",
    name: "Caprese",
    description: "Tomate, mussarela de búfala e manjericão",
  },
  {
    id: "16",
    name: "Alho e Óleo",
    description: "Laminas de alho dourado e azeite",
  },
  {
    id: "17",
    name: "Camarão",
    description: "Camarões temperados com catupiry",
  },
  {
    id: "18",
    name: "Cheddar com Calabresa",
    description: "Calabresa fatiada e creme de cheddar",
  },
  {
    id: "19",
    name: "Presunto e Queijo",
    description: "Presunto cozido e mussarela",
  },
  {
    id: "20",
    name: "Romeu e Julieta",
    description: "Queijo mussarela com goiabada (pizza doce)",
  },
];

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={pizzas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Detalhes", { pizza: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7E0",
    padding: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFB000",
  },
  desc: {
    fontSize: 14,
    color: "#555",
  },
});
