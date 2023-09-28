import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {colors} from '../../themes/colors'

export const APSafeAreaView = props => {
  const {style, children} = props;

  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
