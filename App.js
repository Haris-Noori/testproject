/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaView style={Styles.parent}>
      <NavigationContainer>
        
      </NavigationContainer>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
});

export default App;
