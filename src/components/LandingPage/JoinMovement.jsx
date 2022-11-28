import React from 'react';
import MovementImg from '../../assets/MovementImg.svg';
import WhiteArrow from '../../assets/WhiteArrow.svg';

const JoinMovement = () => {
  return (
    <>
      <div className="JoinMovement">
        <div className="JoinMovement_center">
          <div className="JoinMovement_column">
            <p className="JoinMovement_p">
              Join the <br /> movement
            </p>
            <img src={MovementImg} alt="" className="JoinMovement_img" />
          </div>
          <div className="JoinMovement_column2">
            <div className="contact_form">
              <div className="input_fields_div">
                <label htmlFor="" className="input_label">
                  First Name
                </label>
                <input type="text" className="contact_input" placeholder="First Name" />
              </div>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <div className="input_fields_div">
                <label htmlFor="" className="input_label">
                  Last Name
                </label>
                <input type="text" className="contact_input" placeholder="Last Name" />
              </div>
            </div>
            <div className="contact_form">
              <div className="input_fields_div">
                <label htmlFor="" className="input_label">
                  Email
                </label>
                <input type="email" className="contact_input" placeholder="Email" />
              </div>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <div className="input_fields_div">
                <label htmlFor="" className="input_label">
                  Phone Number
                </label>
                <input type="number" className="contact_input" placeholder="Phone Number" />
              </div>
            </div>
            <div className="contact_form">
              <div className="input_fields_div">
                <label htmlFor="" className="input_label">
                  Message
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="contact_textarea"
                  placeholder="Type Something"
                ></textarea>
              </div>
            </div>
            <button className="join_now_btn">
              Join now &nbsp;
              <img src={WhiteArrow} alt="" className="redArrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinMovement;
