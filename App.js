const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import FluentMdl2calculatorAdditio from "./screens/FluentMdl2calculatorAdditio";
import IPhone14ProMax1 from "./screens/IPhone14ProMax1";
import MdicheckboxMarkedCircle from "./screens/MdicheckboxMarkedCircle";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="FluentMdl2calculatorAddition"
              component={FluentMdl2calculatorAdditio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax1"
              component={IPhone14ProMax1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MdicheckboxMarkedCircle"
              component={MdicheckboxMarkedCircle}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
