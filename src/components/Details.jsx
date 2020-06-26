import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { asRem } from '../helper/';

const Section = styled.section`
  display: flex;
  height: ${asRem(50)};
  background: #fff;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: block;
  width: ${asRem(30)};
  padding: ${asRem(10)};
  margin-right: ${asRem(5)};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h6`
  margin: 0;
`;
const SubTitle = styled.h6`
  margin: 0;
`;
const Description = styled.p`
  margin: 0;
`;

const Details = ({ title, icon, subTitle, description }) => {
  return (
    <Section>
      <IconWrapper>
        <FontAwesomeIcon icon={icon} size='2x' />
      </IconWrapper>
      <Wrapper>
        <Title> {title} </Title>
        <SubTitle> {subTitle} </SubTitle>
        <Description> {description} </Description>
      </Wrapper>
    </Section>
  );
};

export default Details;
