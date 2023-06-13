/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, View, Text, StyleSheet} from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={Styles.parent}>
      <View>
        <Text>Pyng Mobile App by Haris</Text>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
});

export default App;
