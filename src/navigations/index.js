import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="MainSatck" component={MainStack} />
    </Stack.Navigator>
  )
}

export default index