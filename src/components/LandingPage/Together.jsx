import React from 'react';
import RedArrowImg from '../../assets/RedArrowImg.svg';
import TogetherImg from '../../assets/TogetherImg.svg';

const Together = () => {
  return (
    <>
      <div className="Together">
        <div className="Together_center">
          <div className="Together_column">
            <p className="together_title">TOGETHER WE WORK</p>
            <p className="together_p">
              By joining together to demand that we are included in the process of drawing fair
              district lines, we can ensure we have the opportunity to elect leaders who will truly
              represent us. Speak out for your community, your family, and your future today!
            </p>
            <button className="reedmore_btn">
              Read More <img src={RedArrowImg} alt="" className="redArrow" />
            </button>
          </div>
          <div className="Together_column">
            <img src={TogetherImg} alt="" className="together_column_image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Together;
