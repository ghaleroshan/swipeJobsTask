import React from 'react';
import styled from 'styled-components';

import { asRem } from '../helper';

const JobTitleWrapper = styled.section`
  background: #fff;
  box-sizing: border-box;
  padding: ${asRem(10)} ${asRem(15)};
`;

const JobTitle = styled.h3`
  font-weight: bold;
  margin: 0 0 ${asRem(5)};
`;

const SubTitle = styled.h5`
  font-weight: bold;
  margin: 0;
  font-size: ${asRem(16)};
`;

const Title = ({ title, subTitle }) => {
  return (
    <JobTitleWrapper>
      <JobTitle>{title}</JobTitle>
      <SubTitle>{subTitle}</SubTitle>
    </JobTitleWrapper>
  );
};

export default Title;
