import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme, theme as nbTheme } from "native-base";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Contest from "./screens/Contests";
import MyContests from "./screens/Contests/myContests";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Feed from "./screens/Feed";
import Profile from "./screens/Profile";
const theme = extendTheme({
  colors: {
    primary: nbTheme.colors.violet,
  },
});

const Drawer = createDrawerNavigator();

export default function App() {
  const user = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
     console.log(e);
    }
  };
  const [userData, setUserData] = React.useState(user());
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        {!userData ? (
          <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
            <Drawer.Screen name={"SignUp"} component={SignUp} />
            <Drawer.Screen name={"SignIn"} component={SignIn} />
          </Drawer.Navigator>
        ) : (
          <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="contest">
            <Drawer.Screen name={"feed"} component={Feed} />
            <Drawer.Screen name={"allContests"} component={Contest} />
            <Drawer.Screen name={"myContests"} component={MyContests} />
            <Drawer.Screen name={"profile"} component={Profile} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
