import { StatusBar, Box, Heading, Center, Alert,HStack,VStack,IconButton, Text, View } from "native-base";
import React from 'react'
import { Footer } from '../../base'

const Feed = ({navigation}) => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Box safeAreaTop />
      <Center my="auto" flex="1">
        <Heading fontSize="xl" p="4" pb="3">
          Feed
        </Heading>
        <Alert status="error">
          <VStack space={2} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} justifyContent="space-between">
              <HStack space={2} flexShrink={1}>
                <Alert.Icon mt="1" />
                <Text fontSize="md" color="coolGray.800">
                  Under Development
                </Text>
              </HStack>
            </HStack>
          </VStack>
        </Alert>
      </Center>
      <Footer navigation={navigation} />
    </>
  );
}

export default Feed