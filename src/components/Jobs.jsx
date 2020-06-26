import React from 'react';
import styled from 'styled-components';
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faTools,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';

import Button from '../constant/button';
import Hero from './Hero';
import Navbar from './Navbar';
import Details from './Details';

import { CONTAINER_WIDTH } from '../constant/theme';
import { asRem } from '../helper';
import { font } from '../constant/theme';

const MainContainer = styled.div`
  max-width: ${CONTAINER_WIDTH.sm};
  max-height: 100vh;
  height: 100%;
  background: #eee;
  margin: 0 auto;
`;

const InnerContainer = styled.div`
  max-width: ${asRem(520)};
  max-height: ${asRem(600)};
  margin: ${asRem(20)};
  background: #fff;
  border-radius: ${asRem(5)};
  margin-top: ${asRem(20)};
`;

const JobTitleWrapper = styled.section`
  max-height: ${asRem(200)};
  height: 100%;
  background: #fff;
  padding: ${asRem(10)};
  margin: 0;
`;

const PayRateWrapper = styled.div`
  height: ${asRem(50)};
  background: rgb(91, 218, 179);
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${asRem(100)};
  justify-content: space-around;
`;

const JobTitle = styled.h2`
  font-family: ${font.fontFamily};
  font-weight: bold;
  margin: 0;
`;

const CompanyTitle = styled.h4`
  font-family: ${font.fontFamily};
  font-weight: bold;
  margin: 0;
`;

const Jobs = () => {
  return (
    <>
      <MainContainer>
        <Navbar />
        <InnerContainer>
          {/* <Wrapper> */}
          <Hero />
          <JobTitleWrapper>
            <JobTitle> Construction General Helper</JobTitle>
            <CompanyTitle> C.D. Barnes & Associate </CompanyTitle>
          </JobTitleWrapper>

          <PayRateWrapper> Hello </PayRateWrapper>

          <Details icon={faCalendarAlt} title='Shift Dates' subTitle='APR 7' />
          <Details icon={faMapMarkerAlt} title='Shift Dates' subTitle='APR 7' />
          <Details icon={faTools} title='Shift Dates' subTitle='APR 7' />
          <Details icon={faUserAlt} title='Shift Dates' subTitle='APR 7' />
          <ButtonWrapper>
            <Button> No Thanks </Button>
            <Button primary> I'll Take it</Button>
          </ButtonWrapper>
          {/* </Wrapper> */}
        </InnerContainer>
      </MainContainer>
    </>
  );
};

export default Jobs;
