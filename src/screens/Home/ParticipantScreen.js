import React from 'react';
import {APSafeAreaView} from '../../components/Atoms/safeAreaView';
import ParticipantContainer from '../../modules/home/ParticipantContainer';
import HomeContainer from '../../modules/home/HomeContainer';
const ParticipantScreen = () => {
  return (
    <APSafeAreaView>
      <ParticipantContainer />
    </APSafeAreaView>
  );
};

export default ParticipantScreen;
