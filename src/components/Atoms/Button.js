import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../../themes/colors';
import Icon from 'react-native-vector-icons/AntDesign';
export default function Button(props) {
  const {title, onPress, customStyles, textStyles, disabled, icon} = props;
  return (
    <View>
      <TouchableOpacity
        style={
          customStyles
            ? {...styles.container, ...customStyles}
            : styles.container
        }
        onPress={onPress}
        testID={`${title}-primary-button`}
        disabled={disabled}>
        {icon ? (
          <View style={styles.placeholderIcon}>
            {/* <Icon
              style={styles.placeholderIcon}
              color={'black'}
              name={icon}
              size={25}
            /> */}
            <Image
              style={styles.addParticipantImage}
              source={icon}
               resizeMode="contain"
            />
          </View>
        ) : (
          <></>
        )}
        <Text
          style={
            textStyles
              ? {...styles.textStyles, ...textStyles}
              : styles.textStyles
          }>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: hp('5.6'),
    width: wp('90'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,

    // backgroundColor: colors.blue2,
  },
  textStyles: {
    color: colors.white,
    fontSize: 20,
  },
  placeholderIcon: {
    top: 1,
right:7,
    // width: 4,
    // height: 4,
  },
  addParticipantImage:{

    width: 30,
    height: 30,
  }
});
