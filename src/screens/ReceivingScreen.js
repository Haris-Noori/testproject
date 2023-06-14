import { View, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import { scale } from 'react-native-size-matters';
import ScreenHeading from '../components/ScreenHeading/ScreenHeading';
import Button from '../components/Button/Button';
import LoadingAnimation from '../components/LoadingAnimation/LoadingAnimation';
import ColorContainer from '../components/ColorContainer/ColorContainer';
import * as Colors from '../assets/colors/Colors';

const ReceivingScreen = ({navigation}) => {

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
      <ScreenHeading heading={'Receiver Mode'} />
      
      <View style={styles.animationContainer}>
        {showAnimation ? <LoadingAnimation progressValue={1} animationValue={0} /> : null}
        <ColorContainer bgColor={Colors.brandSecondary} />
        <ColorContainer bgColor={Colors.brandPrimary} />
      </View>
      
      <View style={styles.buttonContainer}>
      <Button btnText={'End'} btnName={'ReceivingScreen'} navigation={navigation} />
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
});

export default ReceivingScreen;