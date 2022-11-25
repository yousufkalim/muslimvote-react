import React from 'react';
import ElectionImg from '../../assets/ElectionImg.svg';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const Election = () => {
  return (
    <>
      <div className="Election">
        <dov className="Election_center">
          <div className="Election_column">
            <p className="Election_title">ELECTION PROECTION</p>
            <p className="Election_p">
              MVP works to ensure that our communities’ voices and priorities are included in
              legislation related to voter protection, voting rights and other important civic
              issues
            </p>
          </div>
          <div className="Election_column2">
            <img src={ElectionImg} alt="" className="Election_img" />
          </div>
        </dov>

        <div className="timeLine_Stepper">
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent>
                <div className="timeLine_content">
                  <p className="timeLine_heading">
                    We manage the 1-888-MVP-VOTE election protection and information hotline to
                    answer state-specific questions or concerns about voting for callers in the
                    language they are most comfortable in. The hotline is provided in partnership
                    with Advancing Justice | AAJC and the Lawyer’s Committee.
                  </p>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="timeLine_Dot" />
                <TimelineConnector className="timeLie_line" />
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <div className="timeLine_content2">
                  <p className="timeLine_heading2">
                    Through coalition-building, we coordinate responses to key policy decisions,
                    ensuring that senators and representatives know that MVP communities have a
                    stake in key legislative decisions.
                  </p>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="timeLine_Dot2" />
                <TimelineConnector className="timeLie_line" />
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <div className="timeLine_content">
                  <p className="timeLine_heading">
                    We gather, analyze and disseminate data and research to policy-makers and
                    stakeholders, providing them with the data-based evidence they need to make
                    informed decisions regarding MVP communities. A key initiative for this is the
                    bi-annual Muslim Voter Survey (MVS), conducted as a partnership between MVP, MVP
                    Data, and Advancing Justice
                  </p>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="timeLine_Dot2" />
                <TimelineConnector className="timeLie_line" />
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <div className="timeLine_content2">
                  <p className="timeLine_heading2">
                    Along with local and national partners, we provide assistance in making sure
                    appropriate in-language materials are made available to local election officials
                    as they expand language accessibility in their jurisdictions. Under section 203
                    of the Voting Rights Act, this language accessibility is required when specific
                    language population criteria are met
                  </p>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="timeLine_Dot" />
                <TimelineConnector className="timeLie_line" />
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <div className="timeLine_content">
                  <p className="timeLine_heading">
                    We provide a platform for elected officials, experts and community organizers to
                    convene and share their knowledge and insights on the legislative and civic
                    issues impacting MVP communities
                  </p>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="timeLine_Dot" />
                <TimelineConnector className="timeLie_line" />
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <div className="timeLine_content2">
                  <p className="timeLine_heading2">
                    Through amplifying MVP voices and sharing stories that show the impact of
                    crucial voting legislation, we spread awareness on how policies and legislation
                    on voting affects the everyday lives of MVPs
                  </p>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="timeLine_Dot2" />
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </>
  );
};

export default Election;
