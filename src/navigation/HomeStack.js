import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import ParticipantScreen from '../screens/Home/ParticipantScreen';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Participants" component={ParticipantScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
