import React from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../../assets/NavLogo.svg';

const Navigation = () => {
  return (
    <>
      <div className="Navigation">
        <div className="Navigation_bar">
          <div className="Navigation_logo">
            <img src={NavLogo} alt="" />
          </div>
          <div className="Navigation_menu">
            <li className="Navigation_li">
              <Link className="Navigation_a" to="#">
                About
              </Link>
              <Link className="Navigation_a" to="#">
                Inititative
              </Link>
              <Link className="Navigation_a" to="#">
                Mission & Vision
              </Link>
              <Link className="Navigation_a" to="#">
                Partner
              </Link>
              <Link className="Navigation_a" to="#">
                Volunteer
              </Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
