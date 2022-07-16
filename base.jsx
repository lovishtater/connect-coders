import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme, theme as nbTheme } from "native-base";
// import StarterIntro from "./screens/StarterIntro";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Contest from "./screens/Contests";
import MyContests from "./screens/Contests/myContests";
import {
  VStack,
  Box,
  HStack,
  Icon,
  Link,
  Button,
  Image,
  Hidden,
  Text,
  IconButton,
  Center,
  FormControl,
  Stack,
  Input,
  FlatList,
  Heading,
  Pressable,
  Avatar,
  Spacer,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
const routes = [
    {
        id: 0,
        name: "Feed",
        screen: "feed",
        icon: <MaterialCommunityIcons name={"home"} />
    },
    {
        id: 1,
        name: "Contests",
        screen: "allContests",
        icon: <MaterialIcons name="search" />
    },
    {
        id: 2,
        name: "My Contests",
        screen: "myContests",
        icon: <MaterialCommunityIcons name={"clock"} />
    },
    {
        id: 3,
        name: "Profile",
        screen: "profile",
        icon: <MaterialCommunityIcons name={"account"} />
    }
]

const Footer = ({ navigation }) => {
    const currRoute = useRoute();
  return (
    <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
      {routes.map((route) => (
        <Pressable
          key={route.id}
          cursor="pointer"
          opacity={currRoute.name === route.screen ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => { route.screen != currRoute.name && navigation.navigate(route.screen) }}>
          <Center>
            <Icon mb="1" as={route.icon} color="white" size="sm" />
            <Text color="white" fontSize="12">
              {route.name}
            </Text>
          </Center>
        </Pressable>
      ))}
    </HStack>
  );
};

export{ Footer};
