import React from 'react';
import HomePic from '../../assets/HomePic.svg';

const HomeSection = () => {
  return (
    <>
      <div className="HomeSection">
        <div className="HomeSection_centerDiv">
          <div className="HomeSection_colm1">
            <p className="home_content">
              We want an America where <span className="muslim">Muslims</span> can become
              <span className="city"> City Council, Mayors, Member of Congress</span> and{' '}
              <span className="city">President.</span> US
            </p>
          </div>
          <div className="HomeSection_colm2">
            <div className="home_image_div">
              <img className="home_img" src={HomePic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
