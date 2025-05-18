import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Home";
import Menu from "./screens/Menu";
import Contact from "./screens/Contact";
import Details from "./screens/Details";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Início"
        screenOptions={{
          headerStyle: { backgroundColor: "#FFB000" },
          headerTintColor: "#fff",
          drawerActiveTintColor: "#FFB000",
        }}
      >
        <Drawer.Screen name="Início" component={Home} />
        <Drawer.Screen name="Cardápio" component={Menu} />
        <Drawer.Screen name="Contato" component={Contact} />
        <Drawer.Screen name="Detalhes" component={Details} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
