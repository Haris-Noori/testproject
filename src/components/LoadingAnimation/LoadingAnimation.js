import { Animated, Easing } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react-native';

const LoadingAnimation = ({progressValue, animationValue}) => {

    const animationProgress = useRef(new Animated.Value(progressValue));

    useEffect(() => {
        const animation = Animated.timing(animationProgress.current, {
            toValue: animationValue,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false,
        });

        const loopAnimation = Animated.loop(animation);
        loopAnimation.start();

        return () => {
            loopAnimation.stop();
        };
    }, []);

  return (
    <Lottie 
        source={require('../../assets/loading_dots_pink.json')}
        progress={animationProgress.current}
        loop
    />
  );
}

export default LoadingAnimation