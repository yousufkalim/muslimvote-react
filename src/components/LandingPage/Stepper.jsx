import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import FastestImg from '../../assets/FastestImg.svg';
import ShapeImg from '../../assets/ShapeImg.svg';
import MattersImg from '../../assets/MattersImg.svg';
import ImpactfulImg from '../../assets/ImpactfulImg.svg';

const Stepper = () => {
  return (
    <>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <div className="fastest">
              <p className="fastest_title">Fastest Growing Population</p>
              <p className="fastest_p">
                In the past two decades, Muslim Americans have become one of the fastest growing
                racial or ethnic groups in the United States
              </p>
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="fastest_img_div">
              <img src={FastestImg} alt="" className="fastest_img" />
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <div className="shape_img_div">
              <img src={ShapeImg} alt="" className="spapeImg" />
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="shape">
              <p className="shape_title">We Shape Elections</p>
              <p className="shape_p">
                The Muslim Americans electorate is a formidable community with the power to shape
                and influence elections down the ticket throughout the state New York.
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <div className="Matters">
              <p className="Matters_title">Representation Matters</p>
              <p className="Matters_p">
                The decisions made by policymakers and our representatives at all levels of
                government impacts our day-to-day lives – from how much funding local schools get to
                policies around crime prevention and gun safety.
              </p>
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="Matters_img_div">
              <img src={MattersImg} alt="" className="MattersImg" />
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <div className="Impactful_img_div">
              <img src={ImpactfulImg} alt="" className="ImpactfulImg" />
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="Impactful">
              <p className="Impactful_title">Impactful Economic Strength</p>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default Stepper;
