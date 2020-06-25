import React from 'react';
import Button from '../constant/button';
import styled from 'styled-components';

import Navbar from './Navbar';
import Hero from './Hero';

import { CONTAINER_WIDTH } from '../constant/theme';

const Container = styled.div`
  max-width: ${CONTAINER_WIDTH.sm};
  margin: 0 auto;
`;

const Jobs = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Hero />
        <Button> No Thanks </Button>
        <Button primary> I'll Take it</Button>
      </Container>
    </>
  );
};

export default Jobs;
