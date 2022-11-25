import React from 'react';
import Header from '../components/LandingPage/Header';
import Navigation from '../components/LandingPage/Navigation';
import VoterEducation from '../components/LandingPage/partners/VoterEducation';
import VoterEngagement from '../components/LandingPage/partners/VoterEngagement';
import Training from '../components/LandingPage/partners/Training';

const Partners = () => {
  return (
    <>
      <Header />
      <Navigation />
      <VoterEngagement />
      <VoterEducation />
      <Training />
    </>
  );
};

export default Partners;
