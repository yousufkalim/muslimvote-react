import React from 'react';
import PartnersTitle from '../../assets/PartnersTitle.svg';
import BlueArrow from '../../assets/BlueArrow.svg';
import PartnerImg from '../../assets/PartnerImg.svg';

const OurPartners = () => {
  return (
    <>
      <div className="OurPartners">
        <div className="OurPartners_center">
          <div className="OurPartners_column">
            <img src={PartnersTitle} alt="" className="OurPartners_title_img" />
            <p className="OurPartners_p">
              We are always seeking national, state, or regional service-based nonprofits to join us
              as partners in voter engagement. Now is the perfect time to join us in making sure
              democracy is accessible to everyone.
            </p>
            <p className="OurPartners_p">
              We know that you are unique and ideally positioned to effectively engage yourself and
              the communities you serve in democracy. We want to help you get there.
            </p>
            <button className="OurPartners_btn">
              Become Partner &nbsp;
              <img src={BlueArrow} alt="" className="redArrow" />
            </button>
          </div>
          <div className="OurPartners_column">
            <img src={PartnerImg} alt="" className="OurPartners_column_img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPartners;
