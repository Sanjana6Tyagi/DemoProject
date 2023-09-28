import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScreenHeader} from '../../components/Molecules/screenHeader';
import LinearGradient from 'react-native-linear-gradient';
import {userDetails} from '../../common/redux/home/selectors';
import {useSelector} from 'react-redux';
export default function ParticipantContainer() {
  const navigation = useNavigation();
  const data = useSelector(userDetails);
  console.log(data, 'selectors');
  useEffect(() => {
    if (data) {
      console.log(data, 'selectorsdata');
    }
  }, [data]);

  return (
    <View style={{flex: 1}}>
      <ScreenHeader title={'Participants'} showIcon navigation={navigation} />

      <LinearGradient
        colors={['#c4dfde', '#e5f9f8', '#c4dfde']}
        start={{x: 1, y: 1}}
        end={{x: 0.7, y: 0.3}}
        style={{flex: 1}}></LinearGradient>
    </View>
  );
}
