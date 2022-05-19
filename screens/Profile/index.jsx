import React, { useEffect } from "react";
import {
  VStack,
  Box,
  HStack,
  Icon,
  Text,
  Link,
  Button,
  Image,
  Hidden,
  IconButton,
  Center,
  FormControl,
  StatusBar,
  Stack,
  Input,
  FlatList,
  Heading,
  Pressable,
  Avatar,
  Spacer,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function OtpVerification(props) {

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Box safeAreaTop />
      <Center my="auto" flex="1">
        <Heading fontSize="xl" p="4" pb="3">
          profile
        </Heading>
      </Center>
    </>
  );
}
