import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScreenHeader} from '../../components/Molecules/screenHeader';
import LinearGradient from 'react-native-linear-gradient';
import {
  userDetails,
  getFavoritesCount,
} from '../../common/redux/home/selectors';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../themes/colors';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/Atoms/Button';
import images from '../../assets/images';

import {
  addToFavourites,
  deleteFromfavourites,
} from '../../common/redux/home/actions';
export default function ParticipantContainer() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const data = useSelector(userDetails);
  const count = useSelector(getFavoritesCount);
  const [modalVisible, setModalVisible] = useState(false);
  const [favorites, setFavorites] = useState([]);
  console.log(data, 'selectors');
  useEffect(() => {
    console.log(data.length, count, 'sanjanaa');

    if (data) {
      //console.log(data, 'selectorsdata');
    }
  }, [data]);

  const AvatarWithInitials = ({initials}) => {
    return (
      <Avatar.Text
        size={50}
        label={initials}
        style={{
          backgroundColor: '#4974a5',
        }}
        labelStyle={{
          bottom: 2,
          fontSize: 22,
          fontWeight: 'medium',
          color: 'white',
        }}
      />
    );
  };

  const handleAddToFavorites = userId => {
    if (favorites.includes(userId)) {
      console.log('if');
      const updatedFavorites = favorites.filter(fav => fav !== userId);
      setFavorites(updatedFavorites);
      dispatch(deleteFromfavourites(userId));
    } else {
      console.log('else');
      const updatedFavorites = [...favorites, userId];
      setFavorites(updatedFavorites);
      dispatch(addToFavourites(userId));
    }
  };
  const handleParticipantList = ({item}) => {
    console.log(item, 'list');

    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            margin: 5,

            padding: 15,
            borderWidth: 1,
            borderColor: colors.grayTwo,
            borderRadius: 5,
            backgroundColor: '#E7F2F1',
            elevation: 3,
          }}>
          <View style={{justifyContent: 'center'}}>
            <AvatarWithInitials
              initials={`${item.firstName.charAt(0)}${item.lastName.charAt(0)}`}
            />
          </View>
          <View style={{marginLeft: '6%', width: '50%'}}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              {item.firstName} {item.lastName}
            </Text>
            <Text
              style={{color: colors.grey18a, fontSize: 19, fontWeight: '600'}}>
              {item.jobTitle}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.favouriteContainer}
            onPress={() => handleAddToFavorites(item.id)}>
            <Image
              style={styles.favouritelButton}
              source={
                item.isFavorite
                  ? images.addFavouriteImage
                  : images.favouriteImage
              }
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ScreenHeader
        title={'Participants'}
        showIcon
        navigation={navigation}
        handlePress={() => setModalVisible(true)}
      />

      <LinearGradient
        colors={['#c4dfde', '#e5f9f8', '#c4dfde']}
        start={{x: 1, y: 1}}
        end={{x: 0.7, y: 0.3}}
        style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={item => handleParticipantList(item)}
        />
        {/* <View style={{}}>
          <Button
            title="Save"
            onPress={() => setModalVisible(true)}
            customStyles={styles.customButton}
            disabled={false}
          />
        </View> */}
        <Modal transparent visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.outerView}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.cancelIcon}>
                {/* <Icon color="black" name="cancel" size={25} /> */}
                <Image
                  style={styles.cancelModalButton}
                  source={images.cancelImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: 'grey',
                  padding: 5,
                  backgroundColor: colors.ghostwhite,
                  marginVertical: 15,
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '600',
                    color: colors.black2,
                    padding: 6,
                  }}>
                  Employees count: {data.length}
                </Text>
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: 'grey',
                  padding: 5,
                  marginBottom: 15,
                  backgroundColor: colors.ghostwhite,
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '600',
                    color: colors.black2,
                    padding: 6,
                  }}>
                  Favorites count: {count}
                </Text>
              </View>
            </View>
          </View>
        </Modal>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    width: '60%',
    flex: 1,
    elevation: 20,
    //  alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'white',
    padding: 10,
  },
  outerView: {
    // marginTop: viewport.height * 0.01,
  },
  customButton: {
    borderRadius: 20,

    width: '50%',
  },
  cancelModalButton: {
    height: 32,
    width: 32,
  },
  favouritelButton: {
    height: 40,
    width: 40,
  },
  favouriteContainer: {
    marginLeft: '6%',
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelIcon: {
    alignItems: 'center',
  },
});
