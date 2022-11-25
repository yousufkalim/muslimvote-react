import React from 'react';
import DqoutesImg from '../../assets/DqoutesImg.svg';
import DqoutesImg2 from '../../assets/DqoutesImg2.svg';

const Fighting = () => {
  return (
    <>
      <div className="Fighting">
        <div className="Fighting_center">
          <div className="Fighting_contant">
            <img src={DqoutesImg} alt="" className="Fighting_qoutes" />
            <div className="Fighting_heading">
              <p className="Fighting_p">
                Fighting for fair districting keeps our communities from being divided and our
                voices from being silenced.
              </p>
            </div>
            <img src={DqoutesImg2} alt="" className="Fighting_qoutes2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fighting;
