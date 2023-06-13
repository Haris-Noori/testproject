import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SendingScreen from "../screens/SendingScreen";
import ReceivingScreen from "../screens/ReceivingScreen";

const Stack = createNativeStackNavigator();

const RootNavigation = (props) => {

    const AppStack = () => {
        return (
            <Stack.Navigator screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
            }}>
                <Stack.Screen name="Sending" component={SendingScreen} />
                <Stack.Screen name="Receiving" component={ReceivingScreen} />
            </Stack.Navigator>
        );
    }

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="AppSatck" component={AppStack} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation;