import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { asRem } from '../helper';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Section = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: ${asRem(15)} 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

const IconWrapper = styled.div`
  box-sizing: border-box;
  width: ${asRem(24)};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 ${asRem(15)};
  flex: 1;
`;

const Title = styled.h4`
  margin: 0 0 ${asRem(5)};
  font-size: ${asRem(16)};
  font-weight: bold;
`;

const Description = styled.div`
  font-size: ${asRem(16)};
  font-weight: normal;
  margin: 0 0 ${asRem(5)};
`;

const ExtraInfo = styled.p`
  font-size: ${asRem(12)};
  font-weight: normal;
  color: #666;
  margin: 0;
`;

const Details = ({ title, icon, children, extraInfo, rightIcon }) => {
  return (
    <Section rightIcon={rightIcon}>
      <IconWrapper>
        <FontAwesomeIcon icon={icon} size='lg' />
      </IconWrapper>
      <Wrapper>
        {title && <Title>{title}</Title>}
        {children && <Description>{children}</Description>}
        {extraInfo && <ExtraInfo>{extraInfo}</ExtraInfo>}
      </Wrapper>
      {rightIcon && (
        <IconWrapper>
          <FontAwesomeIcon icon={faChevronRight} size='lg' />
        </IconWrapper>
      )}
    </Section>
  );
};

export default Details;
