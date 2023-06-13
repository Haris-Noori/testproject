import { View, Text, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'

const LoadingAnimation = () => {

    const animationProgress = useRef(new Animated.Value(0));

    useEffect(() => {
    
    }, []);

  return (
    <View>
      <Text>LoadingAnimation</Text>
    </View>
  )
}

export default LoadingAnimation