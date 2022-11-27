import React from 'react';
import Header from '../components/LandingPage/Header';
import Navigation from '../components/LandingPage/Navigation';
import VoterEducation from '../components/partners/VoterEducation';
import VoterEngagement from '../components/partners/VoterEngagement';
import Training from '../components/partners/Training';
import Election from '../components/LandingPage/Election';
import Drawers from '../components/LandingPage/Drawers';
import Fotoer from '../components/LandingPage/Fotoer';

const Partners = () => {
  return (
    <>
      <Header />
      <Navigation />
      <VoterEngagement />
      <VoterEducation />
      <Training />
      <Election />
      <Drawers />
      <Fotoer />
    </>
  );
};

export default Partners;
