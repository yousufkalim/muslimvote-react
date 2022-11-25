import React from 'react';
import voterEngagement from '../../../assets/voterEngagement.png';
import Vector from '../../../assets/Vector.png';
import Flag from '../../../assets/Flag.png';
import Girl from '../../../assets/Girl.png';

const VoterEngagement = () => {
  return (
    <div className="VoterEngagementContainer">
      <div className="VoterPara">
        <div className="voterEngageDiv">
          <img src={voterEngagement} alt="Voter Engagment" className="voterEngagement" />
        </div>
        <div className="parabtn">
          <p className="paragraph">
            MVPVote’s Alliance for Civic Engagement (ACE) is a national network of local and
            state-anchored partners who engage their communities to conduct grassroots voter contact
            and education programs.{' '}
          </p>
          <div className="readMorebtnDiv">
            <p>Read More</p> &nbsp;
            <div className="arrowDiv">
              <img src={Vector} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flagGirlDiv">
        <div className="flagImgDiv">
          <img src={Flag} alt="flag" className="flag" />
        </div>
        <div className="girlDiv">
          <img src={Girl} alt="girl" className="girl" />
        </div>
      </div> */}
    </div>
  );
};

export default VoterEngagement;
