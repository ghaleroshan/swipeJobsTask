import React from 'react';
import styled from 'styled-components';
import { asRem } from '../helper';

const PayRateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${asRem(50)};
  background: rgb(91, 218, 179);
  padding: ${asRem(15)};
`;

const Title = styled.div`
  font-size: ${asRem(12)};
  font-weight: bold;
  color: #000;
  margin-bottom: ${asRem(5)};
`;

const LargeText = styled.div`
  font-size: ${asRem(32)};
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  color: #fff;
`;

const Column = styled.div`
  text-align: ${(props) => (props.textAlign === 'right' ? 'right' : 'left')};
`;

const SuperScript = styled.span`
  font-size: 55%;
  transform: translate(6px, -14px);
  display: inline-block;
`;

const HourDetails = ({ distance, hourlyRate }) => {
  return (
    <PayRateWrapper>
      <Column>
        <Title> Distance </Title>
        <LargeText>{distance} miles</LargeText>
      </Column>
      <Column textAlign={'right'}>
        <Title> Hourly Rates </Title>
        <LargeText>
          <SuperScript>&#36;</SuperScript> {hourlyRate}
        </LargeText>
      </Column>
    </PayRateWrapper>
  );
};

export default HourDetails;
