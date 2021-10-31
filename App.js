import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/mainScreen";
import Luxury from "./screens/luxury";
import Details from "./screens/details";

const { Navigator, Screen } = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name="mainScreen" component={MainScreen} />
          <Screen name="Luxury" component={Luxury} />
          <Screen name="Details" component={Details} />
        </Navigator>
      </NavigationContainer>
    );
  }
}
