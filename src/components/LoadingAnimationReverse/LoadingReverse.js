import { Animated, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-react-native';

const LoadingReverse = () => {

    const animationProgress = useRef(new Animated.Value(0));

    useEffect(() => {
        animationProgress.current.setValue(1);
        Animated.timing(animationProgress.current, {
            toValue: 0,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, []);

  return (
    <Lottie 
        source={require('../../assets/loading_dots_pink.json')}
        progress={animationProgress.current}
        loop={true}
    />
  );
}

export default LoadingReverse