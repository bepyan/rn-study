// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate("Details")}
    />
  </View>
);

const DetailsScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Details Screen</Text>
    <Button
      title="Go to Details... again"
      onPress={() => navigation.push("Details")}
    />
    <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    <Button title="Go back" onPress={() => navigation.goBack()} />
    <Button
      title="Go back to first screen in stack"
      onPress={() => navigation.popToTop()}
    />
  </View>
);

const { Navigator, Screen } = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={HomeScreen} options={{ title: "Overview" }} />
        <Screen name="Details" component={DetailsScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
