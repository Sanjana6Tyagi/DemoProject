import React from 'react';
import {APSafeAreaView} from '../../components/Atoms/safeAreaView';

import HomeContainer from '../../modules/home/HomeContainer';
const HomeScreen = () => {
  return (
    <APSafeAreaView>
      <HomeContainer />
    </APSafeAreaView>
  );
};

export default HomeScreen;
