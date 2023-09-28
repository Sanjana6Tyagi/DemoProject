import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import TextInput from '../../components/Atoms/TextInput';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenHeader} from '../../components/Molecules/screenHeader';
import Button from '../../components/Atoms/Button';
import images from '../../assets/images';
import {saveUserDetails} from '../../common/redux/home/actions';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

export default function HomeContainer() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [salary, setSalary] = useState('');

  const navigateToParticipants = () => {
    setModalVisible(true);
  };
  const handleDetailsSubmit = () => {
    const body = {
      firstName,
      lastName,
      jobTitle,
      salary,
    };

    dispatch(saveUserDetails(body));
    navigation.navigate('Participants');
  };
  return (
    <View style={{flex: 1}}>
      <ScreenHeader title={'Home'} navigation={navigation} />
      <LinearGradient
        colors={['#c4dfde', '#e5f9f8', '#c4dfde']}
        start={{x: 1, y: 1}}
        end={{x: 0.7, y: 0.3}}
        style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.addParticipantImage}
            source={images.addParticipant}
            resizeMode="contain"
          />
          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={{borderRadius: 6}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <Button
              onPress={navigateToParticipants}
              title={'Add Participants'}
              icon={'account-multiple-plus-outline'}
            />
          </LinearGradient>
        </View>

        <Modal animationType="slide" transparent visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.outerOtp}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.cancelIcon}>
                <Icon1 color="white" name="cancel" size={25} />
              </TouchableOpacity>
            </View>
            <View style={{marginBottom: '3%'}}>
              <TextInput
                onChangeText={setFirstName}
                placeholder={'eg: John'}
                // icon={'shopping-search'}
                label={'First Name'}
                //   inputFieldStyles={{height:viewport.height*0.04,fontSize: viewport.height*0.019,paddingLeft: 35,paddingBottom:"2%"}}
                value={firstName}
                multiline
              />
            </View>

            <View style={{marginBottom: '3%'}}>
              <TextInput
                onChangeText={setLastName}
                placeholder={'eg: Martin'}
                // icon={'shopping-search'}
                label={'Last Name'}
                //   inputFieldStyles={{height:viewport.height*0.04,fontSize: viewport.height*0.019,paddingLeft: 35,paddingBottom:"2%"}}
                value={lastName}
                multiline
              />
            </View>
            <View style={{marginBottom: '3%'}}>
              <TextInput
                onChangeText={setJobTitle}
                placeholder={'eg: developer'}
                // icon={'shopping-search'}
                label={'Job Title'}
                //   inputFieldStyles={{height:viewport.height*0.04,fontSize: viewport.height*0.019,paddingLeft: 35,paddingBottom:"2%"}}
                value={jobTitle}
                multiline
              />
            </View>
            <View style={{marginBottom: '10%'}}>
              <TextInput
                onChangeText={setSalary}
                placeholder={'eg: 6,00,000'}
                // icon={'shopping-search'}
                label={'Salary'}
                keyboardType={'number-pad'}
                //   inputFieldStyles={{height:viewport.height*0.04,fontSize: viewport.height*0.019,paddingLeft: 35,paddingBottom:"2%"}}
                value={salary}
                multiline
              />
            </View>
            <View style={styles.outerCustomButtonView}>
              <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={{borderRadius: 20, width: wp('60')}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}>
                <Button
                  title="Save"
                  onPress={handleDetailsSubmit}
                  customStyles={styles.customButton}
                  disabled={false}
                />
              </LinearGradient>
            </View>
          </View>
        </Modal>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
  },
  addParticipantImage: {
    width: '70%',
  },

  centeredView: {
    height: '70%',

    marginTop: 'auto',
    //justifyContent:'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  outerOtp: {
    // marginTop: viewport.height * 0.01,
  },
  cancelIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',

    paddingBottom: 6,
  },
  customButton: {
    borderRadius: 20,

    width: wp('60'),
  },
});
