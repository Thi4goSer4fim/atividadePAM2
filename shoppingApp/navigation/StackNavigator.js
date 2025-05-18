import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../views/Login";
import Home from "../views/Home";
import Shopping from "../views/Shopping";
import Sale from "../views/Sale";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Comprar" component={Shopping} />
      <Stack.Screen name="Vender" component={Sale} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
