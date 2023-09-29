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
  const [modal1Visible, setModal1Visible] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [details, setDetails] = useState(data);
  useEffect(() => {
    if (data) {
      //console.log(data, 'selectorsdata');
    }
  }, [data]);
  console.log(details, 'sanjanaa');
  const sortData = (data, criteria) => {
    console.log('inside sort');
    return data.slice().sort((a, b) => {
      const propA = a[criteria].toLowerCase();
      const propB = b[criteria].toLowerCase();
      return propA.localeCompare(propB);
    });
  };

  const handleSort = criteria => {
    const sorted = sortData(data, criteria);
    setDetails(sorted);
    setModal1Visible(false);
  };

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
        <TouchableOpacity
          onPress={() => setModal1Visible(true)}
          style={styles.modalIcon}>
          <Image
            style={styles.sortModalButton}
            source={images.sortImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Modal animationType="slide" transparent={true} visible={modal1Visible}>
          <View style={styles.outerView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={() => handleSort('firstName')}
                style={{backgroundColor: 'pink', borderRadius: 20, margin: 10}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', padding: 5}}>
                  Sort by First Name
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSort('lastName')}
                style={{backgroundColor: 'pink', borderRadius: 20}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', padding: 5}}>
                  Sort by Last Name
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <FlatList
          data={details}
          renderItem={item => handleParticipantList(item)}
        />

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '88%',
            right: 12,
            zIndex: 1,
            opacity: 0.8,

            backgroundColor: '#899ca5',
            padding: 20,
            borderRadius: 50,
            elevation: 10,
          }}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image
            style={styles.addparticipant}
            source={images.addParticipantButton}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Modal transparent visible={modalVisible}>
          <View style={styles.centeredView}>
            <View>
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
  addparticipant: {
    width: 40,
    height: 40,
  },

  outerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
  modalView: {
   backgroundColor: 'white',
borderRadius:5,
    padding: 20,
    alignItems: 'center',
  },
  sortModalButton: {
    height: 35,
    width: 35,
  },
  modalIcon: {
    alignItems: 'flex-end',
    margin: 10,
  },
});
