import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React, {useEffect, useState} from 'react'
import {scale} from 'react-native-size-matters';
import Toast from 'react-native-simple-toast';
import fonts from '../../assets/fonts/fonts';
import * as Colors from '../../assets/colors/Colors';

const Button = ({btnText, btnName, navigation}) => {

    const [toastText, setToastText] = useState('');
    const [navigate, setNavigation] = useState('');

    useEffect(() => {
        if(btnName == 'SendingScreen') {
            setToastText("Cancelled successfully");
            setNavigation("Receiving");
        } else {
            setToastText("Ended successfully");
            setNavigation("Sending");
        }
    }, []);

  return (
    <TouchableOpacity 
        onPress={() => {
            Toast.show(toastText, Toast.SHORT);
            navigation.replace(navigate);
        }}
          style={styles.parent}>
        <Text style={styles.buttonText}>{btnText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    parent: {
        borderWidth: 1,
        borderColor: Colors.brandPrimary,
        height: scale(44),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(25),
    },
    buttonText: {
        fontSize: scale(20),
        color: Colors.brandPrimary,
        fontFamily: fonts.comRegular
    }
})

export default Button