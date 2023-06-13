import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters';
import fonts from '../../assets/fonts/fonts';

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
        color: '#000000',
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
        color: '#838383'
      },
});

export default ScreenHeading