import React from 'react';
import LocatImg from '../../assets/LocatImg.svg';

const YourVote = () => {
  return (
    <>
      <div className="YourVote">
        <div className="YourVote_center">
          <div className="YourVote_column">
            <img src={LocatImg} alt="" className="YourVote_img" />
          </div>
          <div className="YourVote_column2">
            <p className="YourVote_title">
              Your vote means more funding and resources for the Muslim Community.
            </p>
            <p className="YourVote_p">
              Our collective power lies in our ability to make our voices heard. The single most
              effective way to have your voice heard is by voting. Voting is how we hold elected
              officials accountable for the decisions they are making on our behalf.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourVote;
