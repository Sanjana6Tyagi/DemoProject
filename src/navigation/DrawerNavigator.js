import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawerContent from './CustomDrawerContent';
import CustomScreen from './CustomScreen'; // Import your custom screen component

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Participants" component={ParticipantScreen} />
      <Drawer.Screen name="CustomScreen" component={CustomScreen} />{' '}
      {/* Add your custom screen here */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
