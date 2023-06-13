import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import { scale } from 'react-native-size-matters';
import Toast from 'react-native-simple-toast';
import LoadingAnimation from '../components/LoadingAnimation/LoadingAnimation';
import ScreenHeading from '../components/ScreenHeading/ScreenHeading';
import fonts from '../assets/fonts/fonts';

const SendingScreen = ({navigation}) => {

  const [showAnimation, setShowAnimation] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <View style={styles.parent}>
      <ScreenHeading heading={'Sending Money...'} />
      
      <View style={styles.animationContainer}>
        {showAnimation ? <LoadingAnimation /> : null}
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
    color: '#A010A3',
    fontFamily: fonts.comRegular
  }
});

export default SendingScreen;