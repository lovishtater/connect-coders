import React, { useEffect } from "react";
import {
  VStack,
  Box,
  HStack,
  Text,
  Center,
  StatusBar,
  Stack,
  FlatList,
  Heading,
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Footer } from "../../base";
import moment from "moment";
export default function Contests(props) {
  // const router = useRouter(); //use incase of Nextjs
    useEffect(() => {
        loadData();
    }, []);
    const [data, setData] = React.useState([{
        name: "Johns Doe",
        
    }]);
    const [error, setError] = React.useState(null);
    const [organisation, setOrganisation] = React.useState([]);

    const loadData = async() => {
        await fetch('https://kontests.net/api/v1/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json()).then(response => {
            setData(response);
        }).catch(error => {
            setError(error);
            console.log(error);
        });
    }

    const filterData = (organisations) => {
        data.filter(item => {
            if (organisations.includes(item.site)) {
                return item;
            }
        }
        )
    }
    
   const convertDuration = (duration) => {
       if (duration < 60) {
        return `${duration} seconds`;
       }else if (duration < 86400) {
         var hours = parseInt(duration / 3600);
         var minutes = parseInt((duration % 3600) / 60);
         return hours + " hours " + minutes + " minutes ";
       } else {
         var days = parseInt(duration / 86400);
         var hours = parseInt((duration % 86400) / 3600);
         return days + " days " + hours + " hours ";
       }
    }



  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Box safeAreaTop />
      <Center my="auto" flex="1">
        <Heading fontSize="lg" p="4" pb="3">
          Inbox
        </Heading>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box alignItems="center">
              <Box
                maxW="80"
                minW={80}
                mb="2"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1">
                <Stack p="4">
                  <Stack space={2}>
                    <Heading size="sm" ml="-1">
                      {item.name}
                    </Heading>
                    <Text fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                      {item.site} - {convertDuration(item.duration)}
                    </Text>
                  </Stack>
                  <HStack space={2}>
                    <VStack space={2}>
                      <Text fontSize="xs">{item.start_time}</Text>
                      <Text fontSize="xs">{item.end_time}</Text>
                    </VStack>
                    <Text fontSize="xs">{item.duration}</Text>
                  </HStack>
                  <HStack alignItems="center" space={4} justifyContent="space-between"></HStack>
                </Stack>
              </Box>
            </Box>
          )}
          keyExtractor={(item) => item.start_time + item.name}
        />
      </Center>
      <Footer screen="contest" navigation={props.navigation} />
    </>
  );
}
