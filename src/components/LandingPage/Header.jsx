// Init
import React from 'react';
import FbIcon from '../../assets/FbIcon.svg';
import TwiterIcon from '../../assets/TwiterIcon.svg';
import InstaIcon from '../../assets/InstaIcon.svg';
import { Link } from 'react-router-dom';

// Component
export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header_content">
          <div className="header_social_acount">
            <img src={FbIcon} alt="" className="social_icons" />
            <img src={TwiterIcon} alt="" className="social_icons" />
            <img src={InstaIcon} alt="" className="social_icons" />
          </div>
          <Link className="join_now_link" to="#">
            Donate
          </Link>
          <Link className="join_now_link2" to="#">
            Join Now
          </Link>
        </div>
      </div>
    </>
  );
}
