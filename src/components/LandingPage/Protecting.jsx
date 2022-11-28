import React from 'react';
import ProtectingImg from '../../assets/ProtectingImg.svg';

const Protecting = () => {
  return (
    <>
      <div className="Protecting">
        <div className="Protecting_center">
          <div className="Protecting_colmn">
            <p className="Protecting_title">
              Protecting Our
              <br />
              Voting Rights
            </p>
            <p className="Protecting_p">
              More than a century after the right to vote was declared fundamental, that right is
              under attack. Efforts to make it harder for racial minorities to participate in the
              political process are proliferating across the country state by state- and we're
              fighting those efforts in court.
            </p>
          </div>
          <div className="Protecting_colmn2">
            <img src={ProtectingImg} alt="" className="Protecting_Img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Protecting;
