import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import { scale } from 'react-native-size-matters';
import LoadingAnimation from '../components/LoadingAnimation/LoadingAnimation';
import ScreenHeading from '../components/ScreenHeading/ScreenHeading';
import Button from '../components/Button/Button';
import ColorConatiner from '../components/ColorContainer/ColorConatiner';

const SendingScreen = ({navigation}) => {

  const [showAnimation, setShowAnimation] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <View style={styles.parent}>
      <ScreenHeading heading={'Sending Money...'} />
      
      <View style={styles.animationContainer}>
        {showAnimation ? <LoadingAnimation progressValue={0} animationValue={1} /> : null}
        <ColorConatiner bgColor={'#A010A3'} />
        <ColorConatiner bgColor={'#FE07C8'} />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button btnText={'Cancel'} btnName={'SendingScreen'} navigation={navigation} />
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
  buttonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: scale(20),
    width: '100%'
  },
});

export default SendingScreen;