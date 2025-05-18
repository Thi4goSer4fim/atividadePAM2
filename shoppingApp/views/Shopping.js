import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const products = [
  {
    id: "1",
    name: "iPhone 16 128GB",
    price: 5999,
    image:
      "https://horizonplay.fbitsstatic.net/img/p/apple-iphone-16-128gb-tela-super-retina-xdr-6-1-cor-preto-152183/338786-1.jpg?w=670&h=670&v=202502142012",
  },
  {
    id: "2",
    name: "Fone JBL Bluetooth",
    price: 299,
    image:
      "https://fastshopbr.vtexassets.com/arquivos/ids/498166/0-JBLLIVE770PTO-PRD-1500-1.jpg?v=638702103996270000",
  },
  {
    id: "3",
    name: "Notebook Dell Inspiron",
    price: 3799,
    image: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/174937",
  },
  {
    id: "4",
    name: 'Smart TV 50"',
    price: 2699,
    image:
      "https://gbarbosa.vtexassets.com/arquivos/ids/234908-800-auto?v=638361690589270000&width=800&height=auto&aspect=true",
  },
  {
    id: "5",
    name: "PlayStation 5",
    price: 4299,
    image:
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/72/1072362_console-playstation-5-sony-cfi2014b01x-slim-digital-bundle-1-ssd-1tb-2-jogos-10010671_z1_638572558058663269.webp",
  },
];

export default function Shopping() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.FlatList}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  FlatList: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    elevation: 2,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 12,
  },
  price: {
    fontSize: 16,
    color: "#008000",
    marginTop: 4,
  },
});
