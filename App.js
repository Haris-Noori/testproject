/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, View, Text, StyleSheet} from 'react-native';
import RootNavigation from './src/navigations';

const App = () => {
  return (
    <SafeAreaView style={Styles.parent}>
      <RootNavigation />
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
});

export default App;
