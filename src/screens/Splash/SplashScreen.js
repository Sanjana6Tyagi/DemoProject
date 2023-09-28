import React from 'react';

import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
import images from '../../assets/images';

//import {ASSafeAreaView} from '../components/Atoms/safeAreaView';
import LottieView from 'lottie-react-native';

export const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LottieView source={images.splash} autoPlay={true} loop={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
