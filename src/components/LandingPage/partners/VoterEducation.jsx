import React from 'react';
import HandShake from '../../../assets/HandShake.png';
import WhiteVector from '../../../assets/WhiteVector.png';

const VoterEducation = () => {
  return (
    <div className="VoterEducationContainer">
      <div className="gradient">
        <div className="handShakeDiv">
          <img src={HandShake} alt="" className="HandShake" />
        </div>
        <div className="handShakePara">
          <h1>Voter Education</h1>
          <p>
            A critical component of (MVP) mission is to educate and empower newer immigrants to
            participate in the electoral process. By conveying culturally appropriate and translated
            messages and engaging trusted messengers and outlets, we can effectively engage this
            base of voters
          </p>
          <div className="readMorebtnDiv2">
            <p>Read More</p>&nbsp;
            <div className="arrowDiv">
              <img src={WhiteVector} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoterEducation;
