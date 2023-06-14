import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {scale} from 'react-native-size-matters';

const ColorContainer = ({bgColor}) => {
  return (
    <View style={[styles.animationBoxes, {backgroundColor: bgColor}]}>
    </View>
  )
}

const styles = StyleSheet.create({
    animationBoxes: {
        height: scale(81),
        width: scale(49),
        borderRadius: scale(10),
    },
});

export default ColorContainer