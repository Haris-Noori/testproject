import { View, Text, Animated, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-react-native';

const LoadingAnimation = () => {

    const animationProgress = useRef(new Animated.Value(0));

    useEffect(() => {
        const animation = Animated.timing(animationProgress.current, {
            toValue: 1,
            duration: 4000,
            easing: Easing.linear,
            useNativeDriver: false,
        });

        const loopAnimation = Animated.loop(animation);
        loopAnimation.start();

        return () => {
            loopAnimation.stop();
        };
    }, []);

    useEffect(() => {});

  return (
    <Lottie 
        source={require('../../assets/animation.json')}
        progress={animationProgress.current}
        loop
    />
  );
}

export default LoadingAnimation