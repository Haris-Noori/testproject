import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {SendingScreen} from "../screens/SendingScreen";
import {ReceivingScreen} from "../screens/ReceivingScreen";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {

    const AppStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Sending" component={SendingScreen} />
                <Stack.Screen name="Receiving" component={ReceivingScreen} />
            </Stack.Navigator>
        );
    }

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="AppSatck" component={AppStack} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation;