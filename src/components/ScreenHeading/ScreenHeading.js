import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters';
import fonts from '../../assets/fonts/fonts';
import * as Colors from '../../assets/colors/Colors';

const ScreenHeading = ({heading}) => {
  return (
    <View style={styles.parent}>
        <View style={styles.headingView}>
          <Text style={styles.heading}>{heading}</Text>
        </View>
        <View style={styles.descriptionView}>
          <Text style={styles.description}>Ensure that the two mobile devices are within 5 cm and both have NFC connectivity.</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    parent: {
        alignItems: 'center',
        marginTop: scale(20),
        height: scale(71),
      },
      headingView: {
        width: '100%',
        height: scale(34),
        justifyContent: 'center',
        alignItems: 'center'
      },
      heading: {
        fontSize: scale(20),
        color: Colors.heading,
        fontFamily: fonts.semiBold
      },
      descriptionView: {
        width: '100%',
        height: scale(37),
        justifyContent: 'center',
        alignItems: 'center'
      },
      description: {
        textAlign: 'center',
        fontSize: scale(10),
        color: Colors.text
      },
});

export default ScreenHeading