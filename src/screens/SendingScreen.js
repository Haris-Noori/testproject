import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters';
import Toast from 'react-native-simple-toast';

const SendingScreen = ({navigation}) => {
  return (
    <View style={styles.parent}>
      <View style={styles.topContainer}>
        <Text style={styles.heading}>Sending Money...</Text>
        <Text style={styles.description}>Ensure that the two mobile devices are within 5 cm and both have NFC connectivity.</Text>
      </View>
      <View style={styles.animationContainer}>
        <View style={[styles.animationBoxes, {backgroundColor: '#A010A3'}]} />
        <View style={[styles.animationBoxes, {backgroundColor: '#FE07C8'}]} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress={() => {
            Toast.show('Cancelled successfully', Toast.SHORT);
            navigation.navigate('Receiving');
          }}
          style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scale(16),
  },
  topContainer: {
    alignItems: 'center',
    marginTop: scale(20),
  },
  heading: {
    fontSize: scale(20),
    color: '#000000',
  },
  description: {
    textAlign: 'center',
    fontSize: scale(10),
    color: '#838383'
  },
  animationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '50%',
  },
  animationBoxes: {
    height: scale(81),
    width: scale(49),
    borderRadius: scale(10),
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: scale(20),
    width: '100%'
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: '#A010A3',
    height: scale(44),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(25),
  },
  buttonText: {
    fontSize: scale(20),
    color: '#A010A3'
  }
});

export default SendingScreen;