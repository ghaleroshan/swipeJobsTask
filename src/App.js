import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

import Jobs from './components/Jobs';
import Navbar from './components/Navbar';
import { config } from './config';
import { asRem } from './helper';

const MainContainer = styled.div`
  height: 100vh;
  height: 100%;
  box-sizing: border-box;
  background: #eee;
  margin: 0 auto;
  padding: ${asRem(15)};
`;

const App = () => {
  const [user, setUser] = useState({});
  const [jobList, setJobList] = useState([]);
  const [counter, setCounter] = useState(0);

  const id = '7f90df6e-b832-44e2-b624-3143d428001f';
  const fetchData = async () => {
    const res = await Axios.get(`${config.apiUrl}/${id}/profile`);
    const jobList = await Axios.get(`${config.apiUrl}/${id}/matches`);
    console.log(res.data);
    console.log(jobList.data);
    setUser(res.data);
    setJobList(jobList.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateCounter = () => {
    setCounter((counter) => counter + 1);
    console.log(counter);
  };

  const showJobs = jobList && user && !!(jobList.length > counter);

  return (
    <>
      {user && <Navbar user={user} />}
      <MainContainer>
        {showJobs &&
          jobList.map(
            (item, i) =>
              counter === i && (
                <Jobs
                  key={i}
                  jobList={item}
                  workerId={user.workerId}
                  updateCounter={updateCounter}
                />
              ),
          )}
        {!showJobs && <p> No Results Found</p>}
      </MainContainer>
    </>
  );
};

export default App;
