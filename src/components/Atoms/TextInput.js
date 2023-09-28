import {View, TextInput as Input, Text} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../themes/colors';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default function TextInput(props) {
  const {
    onChangeText,
    multiline,
    placeholder,
   label,
    keyboardType,
    numberOfLines,
    onBlur,
    value,
    errorText,
    inputFieldStyles,
    onFocus,
    icon,
    iconStyle,

    labelStyle,
  } = props;

  return (
    <View>
      <Text style={{color: 'white', fontSize: 15}}>{label}</Text>
      <Input
        style={[styles.textInput, inputFieldStyles]}
        placeholder={placeholder}
        placeholderTextColor={colors.warmGrey}
        onChangeText={onChangeText}
        onBlur={onBlur}
       
        multiline={multiline || false}
        numberOfLines={multiline && numberOfLines ? numberOfLines : undefined}
        value={value || undefined}
        keyboardType={keyboardType}
        onPressOut={onFocus}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: colors.white,
    borderBottomWidth: 1.33,
    fontSize: wp('3.35%'),
   paddingLeft:7,
    color: colors.black,
  //  height: hp('4%'),
   width:wp('70%'),
    borderRadius: 4,
   backgroundColor: 'white',
  },
});
