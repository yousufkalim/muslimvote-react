import React from 'react';
import LeaderShipImg from '../../assets/LeaderShipImg.svg';

const MuslimLeadership = () => {
  return (
    <>
      <div className="MuslimLeadership">
        <div className="MuslimLeadership_center">
          <div className="MuslimLeadership_colum">
            <img src={LeaderShipImg} alt="" className="LeaderShip_img" />
          </div>
          <div className="MuslimLeadership_colum">
            <p className="MuslimLeadership_p">
              We envision to prepare our next generation of
              <span className="muslim"> Muslim leadership</span> at
              <span className="city"> local</span> and national levels to represent the
              <span className="city"> under-represented</span> &
              <span className="city"> underserved</span>
              <span className="muslim"> Muslim</span> Community.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MuslimLeadership;
