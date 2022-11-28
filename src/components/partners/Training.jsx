import React from 'react';
import partner from '../../assets/Partner.png';
import training from '../../assets/Training.png';
import frame1 from '../../assets/Frame1.png';
import frame2 from '../../assets/Frame2.png';

const Training = () => {
  return (
    <div className="TrainingContainer">
      <div className="partnerDiv">
        <img src={partner} alt="partners" className="partnerImg" />
      </div>
      <div className="TrainingDiv">
        <img src={training} alt="" className="TrainingImg" />
      </div>
      <div className="major">
        <div className="TrainingContent">
          <ul>
            <li>
              Provide a framework for civic engagement and{' '}
              <span className="red">political organizing</span>
            </li>

            <li>
              {' '}
              To provide a political framework regarding the importance of electoral organizing for
              <span className="red"> MVP</span> <span className="blue">communities</span>
            </li>
            <li>
              To deepen our political analysis of <span className="red">MVP</span> in our{' '}
              <span className="blue">political system.</span>
            </li>
            <li>
              To teach the rules and regulations for <span className="red">501(c)3</span>{' '}
              <span className="blue">organizations</span>
            </li>
            <li>
              Provide participants with organizing tools to effectively build civic{' '}
              <span className="red">engagement programs</span>
            </li>
            <li>
              To provide tools that fosters our communities’ knowledge of outreach in order to
              create and <span className="red">implement effective</span> voter registration,
              education and <span className="blue">mobilization programs</span>
            </li>
          </ul>
        </div>
        <div className="frame1Div">
          <img src={frame1} alt="frame1" className="frame1" />
        </div>
      </div>
      <div className="major2">
        <div className="TrainingContent">
          <ul>
            <li>
              To <span className="red">teach</span> how to incorporate civic participation into an
              organization’s existing <span className="blue">programs and structure</span>
            </li>
            <li>
              {' '}
              To provide strong <span className="blue">communications guidance</span>
            </li>
            <li>
              To teach how to design and conduct <span className="red">evaluations and learn</span>{' '}
              how to measure programs and its <span className="blue">impact</span>
            </li>
            <li>
              To <span className="red">support</span> and nurture the next{' '}
              <span className="blue">generation of leaders</span> and volunteers
            </li>
            <li>
              Increase and <span className="red">encourage regional partnerships</span>
            </li>
            <li>
              To provide a forum to share <span className="blue">successful</span> organizing models
              and <span className="red">lessons learned</span> from local partners
            </li>
            <li>
              To <span className="blue">develop</span> a strategic{' '}
              <span className="red">plan focused</span> on{' '}
              <span className="blue">building capacity</span> for the organizations to contribute
              tothis joint <span className="red">effort</span>
            </li>
          </ul>
        </div>
        <div className="frame1Div">
          <img src={frame2} alt="frame1" className="frame1" />
        </div>
      </div>
    </div>
  );
};

export default Training;
