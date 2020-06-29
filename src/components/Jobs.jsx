import React from 'react';
import styled from 'styled-components';

import Button from '../common/button';
import Hero from './Hero';
import Title from './Title';
import Details from './JobDetails';
import HourDetails from './HourDetails';

import moment from 'moment';
import 'moment-timezone';
import Axios from 'axios';

import { config } from '../config';
import {
  faUserCircle,
  faCalendarAlt,
  faMapMarkerAlt,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import { asRem } from '../helper';

const Wrapper = styled.div`
  box-sizing: border-box;
  background: #fff;
  border-radius: ${asRem(5)};
`;

const DetailsWrapper = styled.div`
  box-sizing: border-box;
  padding: 0 ${asRem(15)};
`;

const ButtonWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: ${asRem(5)} ${asRem(15)} ${asRem(15)};
`;

const ListItem = styled.li`
  color: #000;
  font-size: ${asRem(16)};
  font-weight: normal;
  margin: 0 0 ${asRem(5)};
`;

const List = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: ${(prop) =>
    prop.listStyleType === 'none' ? 0 : `0 0 0 ${asRem(8)}`};

  list-style-type: ${(prop) =>
    prop.listStyleType === 'none' ? 'none' : '"- "'};

  ${ListItem} {
    margin: ${(prop) => prop.listStyleType !== 'none' && 0};
  }
`;

const StyledButton = styled(Button)`
  margin-right: ${asRem(5)};
`;

const timeFormat = {
  start: 'MMM D, ddd h:mm A',
  end: 'h:mmA z',
};

const convertToZone = (date, zone, timeFormat) => {
  return moment(new Date(date)).tz(zone).format(timeFormat);
};

const renderShiftsItem = (item, i, zone) => {
  const startDate = convertToZone(item.startDate, zone, timeFormat.start);
  const endDate = convertToZone(item.endDate, zone, timeFormat.end);
  console.log(startDate, endDate);
  return (
    <ListItem key={i}>
      {startDate} - {endDate}
    </ListItem>
  );
};

const renderRequirements = (item, i) => <ListItem key={i}>{item}</ListItem>;

const Jobs = ({ jobList, workerId, updateCounter }) => {
  const {
    jobId,
    jobTitle,
    company,
    wagePerHourInCents,
    milesToTravel,
    shifts,
    requirements,
  } = jobList;

  const distance = milesToTravel.toFixed(1);
  const distanceToTravel = milesToTravel.toFixed(2);
  const hourlyRate = (wagePerHourInCents / 100).toFixed(2);
  const reportToName = company.reportTo.name.split(' ')[0];

  const acceptJobAction = async () => {
    await Axios.post(`${config.apiUrl}/${workerId}/job/${jobId}/accept`)
      .then(updateCounter())
      .catch((error) => console.log(error));
  };

  const rejectJobAction = async () => {
    await Axios.post(`${config.apiUrl}/${workerId}/job/${jobId}/reject`)
      .then(updateCounter())
      .catch((error) => console.log(error));
  };

  return (
    <Wrapper>
      <Hero imgUrl={jobTitle.imageUrl} />
      <Title title={jobTitle.name} subTitle={company.name} />
      <HourDetails distance={distance} hourlyRate={hourlyRate} />

      <DetailsWrapper>
        {shifts && (
          <Details icon={faCalendarAlt} title='Shift Dates'>
            <List listStyleType={'none'}>
              {shifts.map((item, i) =>
                renderShiftsItem(item, i, company.address.zoneId),
              )}
            </List>
          </Details>
        )}
        <Details
          icon={faMapMarkerAlt}
          title='Location'
          rightIcon
          extraInfo={`${distanceToTravel} miles from your job search location`}>
          {company.address.formattedAddress}
        </Details>

        {requirements && (
          <Details icon={faTools} title='Requirements'>
            <List>
              {requirements.map((item, i) => renderRequirements(item, i))}
            </List>
          </Details>
        )}
        <Details icon={faUserCircle} title='Report To'>
          {reportToName}
          {company.reportTo.phone && ` ${company.reportTo.phone}`}
        </Details>
      </DetailsWrapper>
      <ButtonWrapper>
        <StyledButton isFullWidth onClick={rejectJobAction}>
          No Thanks
        </StyledButton>
        <Button primary isFullWidth onClick={acceptJobAction}>
          I'll Take it
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Jobs;
