// Init
import React from 'react';

// Importing Components
import Header from '../components/LandingPage/Header';
import Navigation from '../components/LandingPage/Navigation';
import HomeSection from '../components/LandingPage/HomeSection';
import MuslimYouth from '../components/LandingPage/MuslimYouth';
import MuslimLeadership from '../components/LandingPage/MuslimLeadership';
import Community from '../components/LandingPage/Community';
import YourVote from '../components/LandingPage/YourVote';
import Together from '../components/LandingPage/Together';
import JoinMovement from '../components/LandingPage/JoinMovement';
import Internship from '../components/LandingPage/Internship';
import Claim from '../components/LandingPage/Claim';
import Stepper from '../components/LandingPage/Stepper';

// Home Component
export default function Home() {
  return (
    <div>
      <Header />
      <Navigation />
      <HomeSection />
      <MuslimYouth />
      <MuslimLeadership />
      <Community />
      <YourVote />
      <Together />
      <JoinMovement />
      <Internship />
      <Claim />
      <Stepper />
    </div>
  );
}
