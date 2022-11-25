import React from 'react';
import WhatWeImg from '../../assets/WhatWeImg.svg';
import InternshipImge from '../../assets/InternshipImge.svg';

const Internship = () => {
  return (
    <>
      <div className="Internship">
        <div className="Internship_center">
          <img src={WhatWeImg} alt="" className="Internship_img" />
          <p className="Internship_p">
            We find part time <span className="city">jobs and internship</span> programs for our
            <span className="muslim"> Muslim</span> youth in the local
            <span className="city"> city council,</span> borough
            <span className="city"> president</span> and{' '}
            <span className="city"> mayor office </span>
            to build a pipeline for our <span className="muslim"> future</span>
            <span className="city"> political leadership</span> in the city.
          </p>
        </div>
        {/* Internship container  */}
        <div className="Internship_container">
          <div className="Internship_column1">
            <img src={InternshipImge} alt="" className="Internship_colum_img" />
          </div>
          <div className="Internship_column2">
            <p className="Internship_column_p">
              We remain a uniting force in the movement, coalescing together leading voices and
              organizations to collaborate on initiatives that bring us closer to the future we all
              envision. We integrate voter engagement into their ongoing activities and services. In
              doing so, we work to promote higher voter and civic participation, especially among
              populations new to the process or with a recent history of lower voter turnout.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Internship;
