import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import DetailScreen from '@/screens/Detail/DetailScreen';
import {HomeScreen} from '@/screens/Home/HomeScreen';
import {RootStackParamList, RootStackRoutes} from '@/types/stackRoutes';

enableScreens();
const Stack = createStackNavigator<RootStackParamList>();

export function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={RootStackRoutes.Home} component={HomeScreen} />
      <Stack.Screen name={RootStackRoutes.Detail} component={DetailScreen} />
    </Stack.Navigator>
  );
}
