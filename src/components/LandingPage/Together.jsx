import React from 'react';
import RedArrowImg from '../../assets/RedArrowImg.svg';
import TogetherImg from '../../assets/TogetherImg.svg';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const Together = () => {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
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
            <LightTooltip
              title="Volunteers are essential to sustaining many of our outreach programs and initiatives. If you are looking for an opportunity to make an impact in your community during an election, or throughout the year, we welcome you to join our national corps of volunteers. Looking to share your time and talents with New Yorkers in need? MVP welcomes your volunteer efforts to help us serve individuals, families, and communities to help them get their vote out. We support state nonprofit associations and civic engagement initiatives, who in turn recruit and support nonprofits in their state to do on-the-ground voter engagement work with the communities they serve. The sites are primarily human service nonprofits such as community health centers, food pantries, housing coalitions, and mutual aid associations. "
              placement="bottom-end"
              arrow
            >
              <button className="reedmore_btn">
                Read More <img src={RedArrowImg} alt="" className="redArrow" />
              </button>
            </LightTooltip>
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
