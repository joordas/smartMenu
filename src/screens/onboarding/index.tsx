import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Center,
  ScrollView,
} from 'native-base';
import React from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function Onboarding({
  navigation,
}: {
  //   navigation: NativeStackNavigationProp;
  navigation: any;
}) {
  return (
    <Box safeArea flex={1}>
      <Image
        width={null}
        height={525}
        alt="illustration of a smartphone with smartMenu app opened"
        source={require('./img/onboarding.png')}
      />
      <Box px={12} justifyContent="center" alignItems={'center'}>
        <Heading fontWeight={500} color={'primary.900'} size={'lg'}>
          Full contactless experience
        </Heading>
        <Text mt={14} fontSize={'md'} color={'primary.400'} textAlign="center">
          From ordering to paying, that&apos;s all contactless
        </Text>
      </Box>
      <ScrollView />
      <Center>
        <Button width={'80%'} variant="ghost">
          Sign up later
        </Button>
        <Button onPress={() => navigation.navigate('Signup')} width={'80%'}>
          Get started
        </Button>
      </Center>
    </Box>
  );
}
