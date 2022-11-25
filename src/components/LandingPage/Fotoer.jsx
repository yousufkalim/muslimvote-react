import React from 'react';
import ScrollTopImg from '../../assets/ScrollTopImg.svg';
import FooterLocatImg from '../../assets/FooterLocatImg.svg';
import FooterLogo from '../../assets/FooterLogo.svg';
import FooterTwit from '../../assets/FooterTwit.svg';
import FooterIn from '../../assets/FooterIn.svg';
import FooterFb from '../../assets/FooterFb.svg';

const Fotoer = () => {
  return (
    <>
      <div className="Fotoer">
        <div className="Fotoer_center">
          <div className="Fotoer_column">
            <img src={FooterLogo} alt="" className="Fotoer_logo" />
          </div>
          <div className="Fotoer_column">
            <div className="Fotoer_right_colums">
              <div className="Fotoer_right_contant">
                <img src={FooterLocatImg} alt="" className="locat_img" />
                <div className="Fotoer_right_div">
                  <p className="Fotoer_ronald_p">Ronald Reagan 40th </p>
                  <p className="Fotoer_ronald_p2">President Of The United States</p>
                  <div className="footer_social">
                    <img src={FooterFb} alt="" className="social_account_logo" />
                    <img src={FooterIn} alt="" className="social_account_logo" />
                    <img src={FooterTwit} alt="" className="social_account_logo" />
                  </div>
                </div>
              </div>
              <div className="Fotoer_right_colums">
                <img src={ScrollTopImg} alt="" className="scroll_img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_info">
        <p className="footer_info_p">© 2022 Muslims Vote Project, All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Fotoer;
