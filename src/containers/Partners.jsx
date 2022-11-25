import React from 'react';
import Header from '../components/LandingPage/Header';
import Navigation from '../components/LandingPage/Navigation';
import VoterEducation from '../components/LandingPage/partners/VoterEducation';
import VoterEngagement from '../components/LandingPage/partners/VoterEngagement';
import Training from '../components/LandingPage/partners/Training';
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
