import React from 'react';
import CommunityImg from '../../assets/CommunityImg.svg';

const Community = () => {
  return (
    <>
      <div className="Community">
        <div className="Community_center">
          <p className="Cummunity_p">Your vote is your power to empower your community.</p>
        </div>
        <div className="Community_container">
          <div className="Community_colmn1">
            <p className="Community_col_p">
              There are 1.2 million <span className="muslim">Muslims</span> in
              <span className="city"> New York City.</span> They contribute
              <span className="muslum"> $17 billion</span> to city’s
              <span className="city">economy.</span> Total <span className="city">NYC Budget</span>
              <span className="muslim"> $101 billion</span> is the city budget.
            </p>
            <p className="Community_col_p">
              Amount of <span className="city">resources</span> and
              <span className="city"> funding back </span> to <span className="muslim">Muslim</span>
              <span className="city"> Community</span> is minute.
            </p>
          </div>
          <div className="Community_colmn2">
            <img src={CommunityImg} alt="" className="Community_col_img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
