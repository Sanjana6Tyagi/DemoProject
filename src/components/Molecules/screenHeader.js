import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../../themes/colors';
import images from '../../assets/images';
import Icon from 'react-native-vector-icons/Entypo';

export const ScreenHeader = props => {
  const {
    title,
    containerStyle,
    titleStyle,
    leftView,
    navigation,
    showIcon,
    handlePress,
  } = props;

  return (
    <View
      style={
        containerStyle
          ? {...styles.container, ...containerStyle}
          : {...styles.container}
      }>
      <View
        style={
          leftView ? {...leftView, ...styles.leftView} : {...styles.leftView}
        }>
        {showIcon ? (
          <TouchableOpacity onPress={handlePress}>
            {/* <Icon
              color={colors.titleBlack1}
              style={styles.back}
              size={30}
              name={'back'}
            /> */}
            <Image
              style={styles.addParticipantImage}
              source={images.moreImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}

        <Text
          style={
            titleStyle
              ? {...styles.titleStyle, ...titleStyle}
              : {...styles.titleStyle}
          }>
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wp('2'),
    backgroundColor: colors.white,
  },
  leftView: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    paddingVertical: hp('0.8'),
    //paddingHorizontal: wp('0.6'),
  },

  titleStyle: {
    color: colors.titleBlack1,
    marginLeft: wp('4'),
    fontSize: 20,
    fontWeight: 'bold',
  },
  back: {
    color: colors.black,
  },
  addParticipantImage: {
    height: 32,
    width: 32,
  },
});
